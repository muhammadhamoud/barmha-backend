from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from django.db.models import F
from django.core.cache import cache

from django.conf import settings as django_settings
from apps.core.pagination import BarmhaPagination
from apps.core.throttles import ListingCreateThrottle
from apps.accounts.models import RealEstateAgent, RealEstateAgency
from apps.accounts.serializers import AgentSerializer, AgencySerializer

from .models import PropertyListing, PropertyImage, EducationInstitution
from .serializers import (
    PropertyCreateSerializer, PropertyListSerializer, PropertyDetailSerializer,
    PropertyImageSerializer, EducationInstitutionSerializer,
)
from .filters import PropertyFilter


class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.posted_by == request.user or request.user.is_staff


class PropertyListCreateView(generics.ListCreateAPIView):
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = PropertyFilter
    ordering_fields  = ["price", "created_at", "updated_at", "area_sqm", "views_count", "is_featured", "is_promoted"]

    def get_queryset(self):
        qs = PropertyListing.objects.select_related("location__governorate", "agency", "agent").prefetch_related("images")
        # When an owner filter is present, show all statuses so the dashboard
        # can display both active and inactive listings.
        owner = self.request.query_params.get("owner")
        if not owner:
            qs = qs.filter(is_active=True)
        return qs

    def get_serializer_class(self):
        if self.request.method == "POST":
            return PropertyCreateSerializer
        return PropertyListSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_throttles(self):
        if self.request.method == "POST":
            rates = getattr(django_settings, "REST_FRAMEWORK", {}).get("DEFAULT_THROTTLE_RATES", {})
            if "listing_create" in rates:
                return [ListingCreateThrottle()]
        return super().get_throttles()

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = PropertyListing.objects.select_related("location__governorate", "agency", "agent").prefetch_related("images", "nearby")
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in ("PUT", "PATCH"):
            return PropertyCreateSerializer
        return PropertyDetailSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        PropertyListing.objects.filter(pk=instance.pk).update(views_count=F("views_count") + 1)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def upload_property_image(request, pk):
    """POST /properties/<pk>/images/ — multipart/form-data with 'image' field."""
    listing = generics.get_object_or_404(PropertyListing, pk=pk)
    if listing.posted_by != request.user and not request.user.is_staff:
        return Response({"error": "Not allowed"}, status=status.HTTP_403_FORBIDDEN)
    serializer = PropertyImageSerializer(data=request.data, context={"request": request})
    serializer.is_valid(raise_exception=True)
    image = serializer.save(listing=listing)
    if not PropertyImage.objects.filter(listing=listing, is_primary=True).exclude(pk=image.pk).exists():
        PropertyImage.objects.filter(pk=image.pk).update(is_primary=True)
    return Response(PropertyImageSerializer(image, context={"request": request}).data,
                    status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def contact_listing(request, pk):
    listing = generics.get_object_or_404(PropertyListing, pk=pk, is_active=True)
    return Response({"status": "contact_request_received", "listing_id": listing.pk})


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def request_callback(request, pk):
    listing = generics.get_object_or_404(PropertyListing, pk=pk, is_active=True)
    return Response({"status": "callback_request_received", "listing_id": listing.pk})


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def similar_listings(request, pk):
    listing = generics.get_object_or_404(PropertyListing, pk=pk, is_active=True)
    qs = PropertyListing.objects.filter(
        category=listing.category,
        location=listing.location,
        is_active=True,
    ).exclude(pk=pk).select_related("location__governorate").prefetch_related("images")[:6]
    return Response(PropertyListSerializer(qs, many=True, context={"request": request}).data)


class CategoryListingsView(generics.ListAPIView):
    serializer_class = PropertyListSerializer
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = PropertyFilter
    ordering_fields  = ["price", "created_at"]

    def get_queryset(self):
        category = self.kwargs["category"]
        return PropertyListing.objects.filter(category=category, is_active=True).select_related("location__governorate").prefetch_related("images")


class AgentListView(generics.ListAPIView):
    queryset           = RealEstateAgent.objects.select_related("user", "agency").all()
    serializer_class   = AgentSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class AgentDetailView(generics.RetrieveAPIView):
    queryset           = RealEstateAgent.objects.select_related("user", "agency")
    serializer_class   = AgentSerializer
    permission_classes = [permissions.AllowAny]


class AgentListingsView(generics.ListAPIView):
    serializer_class = PropertyListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return PropertyListing.objects.filter(agent_id=self.kwargs["pk"], is_active=True).select_related("location__governorate").prefetch_related("images")


class AgencyListView(generics.ListAPIView):
    queryset           = RealEstateAgency.objects.all()
    serializer_class   = AgencySerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class AgencyDetailView(generics.RetrieveAPIView):
    queryset           = RealEstateAgency.objects.all()
    serializer_class   = AgencySerializer
    permission_classes = [permissions.AllowAny]


class AgencyListingsView(generics.ListAPIView):
    serializer_class = PropertyListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return PropertyListing.objects.filter(agency_id=self.kwargs["pk"], is_active=True).select_related("location__governorate").prefetch_related("images")


class EducationListView(generics.ListAPIView):
    serializer_class   = EducationInstitutionSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return EducationInstitution.objects.filter(inst_type=self.kwargs["inst_type"]).select_related("location")


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def track_view(request, pk):
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", ""))
    cache_key = f"view_properties_{pk}_{ip}"
    if not cache.get(cache_key):
        PropertyListing.objects.filter(pk=pk, is_active=True).update(views_count=F("views_count") + 1)
        cache.set(cache_key, True, 86400)
    obj = PropertyListing.objects.filter(pk=pk).values("views_count").first()
    return Response({"views_count": obj["views_count"] if obj else 0})


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def popular_locations(request):
    from apps.core.models import Location
    from apps.core.serializers import LocationSerializer
    locations = Location.objects.filter(
        propertylisting__is_active=True
    ).distinct()[:20]
    return Response(LocationSerializer(locations, many=True, context={"request": request}).data)


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def popular_searches(request):
    searches = [
        {"label": "Apartments for rent in Damascus", "params": "purpose=for_rent&category=residential&property_type=apartment"},
        {"label": "Villas for sale", "params": "purpose=for_sale&property_type=villa"},
        {"label": "Offices in Aleppo", "params": "category=commercial&property_type=office"},
        {"label": "Studios in Latakia", "params": "property_type=studio"},
    ]
    return Response(searches)
