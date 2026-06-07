from rest_framework import generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from django.db.models import F
from django.core.cache import cache

from apps.core.pagination import BarmhaPagination
from .filters import ServiceFilter
from .models import ServiceCategory, ServiceProvider, ServiceListing
from .serializers import ServiceCreateSerializer, ServiceCategorySerializer, ServiceProviderSerializer, ServiceListingSerializer, ServiceDetailSerializer


class IsProviderOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        provider = getattr(obj, "provider", None)
        if provider:
            return provider.user == request.user or request.user.is_staff
        return request.user.is_staff


class ServiceListCreateView(generics.ListCreateAPIView):
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = ServiceFilter
    ordering_fields  = ["price", "created_at", "updated_at", "is_featured", "is_promoted", "avg_rating", "ratings_count"]
    ordering         = ["-is_featured", "-is_promoted", "-updated_at"]

    def get_queryset(self):
        qs = ServiceListing.objects.select_related("provider__user", "category", "location__governorate")
        owner = self.request.query_params.get("owner")
        if not owner:
            qs = qs.filter(is_active=True)
        return qs

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ServiceCreateSerializer
        return ServiceListingSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        # Auto-create a ServiceProvider profile if the user doesn't have one yet
        provider, _ = ServiceProvider.objects.get_or_create(user=self.request.user)
        serializer.save(provider=provider)


class ServiceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = ServiceListing.objects.select_related("provider__user", "category", "location__governorate")
    permission_classes = [IsProviderOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in ("PUT", "PATCH"):
            return ServiceCreateSerializer
        return ServiceDetailSerializer


class ServiceCategoryListView(generics.ListAPIView):
    queryset           = ServiceCategory.objects.all()
    serializer_class   = ServiceCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class ServiceProviderListView(generics.ListAPIView):
    queryset           = ServiceProvider.objects.select_related("user", "location").all()
    serializer_class   = ServiceProviderSerializer
    pagination_class   = BarmhaPagination
    filter_backends    = [DjangoFilterBackend]
    filterset_fields   = ["categories", "is_verified", "is_featured"]
    permission_classes = [permissions.AllowAny]


class ServiceProviderDetailView(generics.RetrieveAPIView):
    queryset           = ServiceProvider.objects.select_related("user", "location")
    serializer_class   = ServiceProviderSerializer
    permission_classes = [permissions.AllowAny]


class ServiceProviderListingsView(generics.ListAPIView):
    serializer_class = ServiceListingSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return ServiceListing.objects.filter(provider_id=self.kwargs["pk"], is_active=True).select_related("provider__user", "category", "location__governorate")


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def provider_reviews(request, pk):
    from apps.reviews.models import Review
    from apps.reviews.serializers import ReviewSerializer
    from django.contrib.contenttypes.models import ContentType
    ct = ContentType.objects.get_for_model(ServiceProvider)
    reviews = Review.objects.filter(content_type=ct, object_id=pk).select_related("reviewer")
    from apps.core.pagination import BarmhaPagination
    paginator = BarmhaPagination()
    page = paginator.paginate_queryset(reviews, request)
    return paginator.get_paginated_response(ReviewSerializer(page, many=True, context={"request": request}).data)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def track_view(request, pk):
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", ""))
    cache_key = f"view_services_{pk}_{ip}"
    if not cache.get(cache_key):
        ServiceListing.objects.filter(pk=pk, is_active=True).update(views_count=F("views_count") + 1)
        cache.set(cache_key, True, 86400)
    obj = ServiceListing.objects.filter(pk=pk).values("views_count").first()
    return Response({"views_count": obj["views_count"] if obj else 0})


class FeaturedServicesView(generics.ListAPIView):
    serializer_class = ServiceListingSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return ServiceListing.objects.filter(is_featured=True, is_active=True).select_related("provider__user", "category", "location__governorate")
