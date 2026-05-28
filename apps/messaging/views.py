from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from django.utils import timezone
from django.shortcuts import get_object_or_404
from .models import Conversation, Message
from .serializers import ConversationSerializer, MessageSerializer


def _resolve_listing_owner(listing_type: str, listing_id):
    """Look up the owner/seller user_id from a listing type + id.  Returns None on any failure."""
    if not listing_type or not listing_id:
        return None
    try:
        if listing_type == "property":
            from apps.properties.models import PropertyListing
            return PropertyListing.objects.get(pk=listing_id).owner_id
        if listing_type == "vehicle":
            from apps.vehicles.models import VehicleListing
            return VehicleListing.objects.get(pk=listing_id).owner_id
        if listing_type == "classified":
            from apps.classifieds.models import ClassifiedListing
            return ClassifiedListing.objects.get(pk=listing_id).owner_id
        if listing_type == "job":
            from apps.jobs.models import JobListing
            return JobListing.objects.get(pk=listing_id).owner_id
        if listing_type == "service":
            from apps.services.models import ServiceListing
            return ServiceListing.objects.get(pk=listing_id).owner_id
    except Exception:
        pass
    return None


class ConversationListView(generics.ListAPIView):
    serializer_class   = ConversationSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class   = None  # return plain list; users rarely have >30 conversations

    def get_queryset(self):
        return (
            Conversation.objects.filter(participants=self.request.user)
                                .prefetch_related("participants", "messages")
                                .order_by("-last_message_at", "-created_at")
        )

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx["request"] = self.request
        return ctx


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def start_conversation(request):
    listing_type  = request.data.get("listing_type", "")
    listing_id    = request.data.get("listing_id")
    other_user_id = request.data.get("user_id")

    # Auto-resolve owner from listing when user_id not explicitly provided
    if not other_user_id and listing_type and listing_id:
        other_user_id = _resolve_listing_owner(listing_type, listing_id)

    if not other_user_id:
        return Response(
            {"detail": "user_id is required, or provide listing_type + listing_id to auto-resolve."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Prevent messaging yourself
    if int(other_user_id) == request.user.pk:
        return Response({"detail": "Cannot start a conversation with yourself."}, status=status.HTTP_400_BAD_REQUEST)

    from django.contrib.auth import get_user_model
    User = get_user_model()
    try:
        other = User.objects.get(pk=other_user_id)
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

    # Return existing conversation if one already exists for this listing pair
    existing = (
        Conversation.objects.filter(
            participants=request.user,
            listing_type=listing_type or "",
            listing_id=listing_id,
        ).filter(participants=other)
        .first()
    )
    if existing:
        return Response(ConversationSerializer(existing, context={"request": request}).data)

    conv = Conversation.objects.create(listing_type=listing_type or "", listing_id=listing_id)
    conv.participants.set([request.user, other])
    return Response(
        ConversationSerializer(conv, context={"request": request}).data,
        status=status.HTTP_201_CREATED,
    )


class ConversationDetailView(generics.RetrieveAPIView):
    serializer_class   = ConversationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Conversation.objects.filter(participants=self.request.user).prefetch_related("participants", "messages")

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx["request"] = self.request
        return ctx


class MessageListView(generics.ListAPIView):
    serializer_class   = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        conv_pk = self.kwargs["pk"]
        try:
            conv = Conversation.objects.get(pk=conv_pk, participants=self.request.user)
        except Conversation.DoesNotExist:
            return Message.objects.none()
        return conv.messages.all()


class MessageCreateView(generics.CreateAPIView):
    """POST /messaging/messages/ — used for image uploads from the chat component."""
    serializer_class   = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]
    parser_classes     = [MultiPartParser, FormParser, JSONParser]

    def perform_create(self, serializer):
        conv_pk = self.request.data.get("conversation")
        conv = get_object_or_404(
            Conversation, pk=conv_pk, participants=self.request.user
        )
        msg = serializer.save(sender=self.request.user, conversation=conv)
        # Keep conversation's denormalised last_message / last_message_at in sync
        Conversation.objects.filter(pk=conv.pk).update(
            last_message=msg.body[:200] if msg.body else "",
            last_message_at=timezone.now(),
        )


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def mark_read(request, pk):
    try:
        conv = Conversation.objects.get(pk=pk, participants=request.user)
    except Conversation.DoesNotExist:
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    conv.messages.filter(is_read=False).exclude(sender=request.user).update(is_read=True)
    return Response({"detail": "Marked as read."})


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
def unread_count(request):
    count = Message.objects.filter(
        conversation__participants=request.user,
        is_read=False,
    ).exclude(sender=request.user).count()
    return Response({"unread_count": count})
