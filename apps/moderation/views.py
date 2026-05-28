from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from apps.core.pagination import BarmhaPagination
from .models import Report, BlockedIP, BlockedUser, UserBlock
from .serializers import ReportSerializer, BlockedIPSerializer, BlockedUserSerializer


def _get_client_ip(request):
    xff = request.META.get("HTTP_X_FORWARDED_FOR")
    return xff.split(",")[0].strip() if xff else request.META.get("REMOTE_ADDR", "")


class ReportListCreateView(generics.ListCreateAPIView):
    serializer_class = ReportSerializer
    pagination_class = BarmhaPagination

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.IsAdminUser()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        return Report.objects.all()

    def perform_create(self, serializer):
        serializer.save(
            reporter=self.request.user,
            ip_address=_get_client_ip(self.request),
        )


class ReportDetailView(generics.UpdateAPIView):
    serializer_class   = ReportSerializer
    permission_classes = [permissions.IsAdminUser]
    queryset           = Report.objects.all()


@api_view(["POST"])
@permission_classes([permissions.IsAdminUser])
def block_user(request, pk):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    user = get_object_or_404(User, pk=pk)
    obj, _ = BlockedUser.objects.update_or_create(
        user=user,
        defaults={
            "reason":       request.data.get("reason", ""),
            "note":         request.data.get("note", ""),
            "is_permanent": request.data.get("is_permanent", True),
            "expires_at":   request.data.get("expires_at"),
            "blocked_by":   request.user,
        },
    )
    return Response(BlockedUserSerializer(obj).data)


@api_view(["POST"])
@permission_classes([permissions.IsAdminUser])
def block_ip(request):
    serializer = BlockedIPSerializer(data=request.data)
    if serializer.is_valid():
        obj, _ = BlockedIP.objects.update_or_create(
            ip_address=serializer.validated_data["ip_address"],
            defaults={**serializer.validated_data, "blocked_by": request.user},
        )
        return Response(BlockedIPSerializer(obj).data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def toggle_user_block(request, pk):
    from django.contrib.auth import get_user_model
    User   = get_user_model()
    target = get_object_or_404(User, pk=pk)
    if target == request.user:
        return Response({"detail": "Cannot block yourself."}, status=status.HTTP_400_BAD_REQUEST)
    existing = UserBlock.objects.filter(blocker=request.user, blocked=target).first()
    if existing:
        existing.delete()
        return Response({"blocked": False})
    UserBlock.objects.create(blocker=request.user, blocked=target)
    return Response({"blocked": True}, status=status.HTTP_201_CREATED)
