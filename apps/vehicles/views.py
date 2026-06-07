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
from .models import VehicleListing, VehicleMake, VehicleModel, VehicleImage, Showroom, RentalCompany, Garage, CarPart
from .serializers import (
    VehicleCreateSerializer, VehicleListSerializer, VehicleDetailSerializer,
    VehicleMakeSerializer, VehicleModelSerializer, VehicleImageSerializer,
    ShowroomSerializer, RentalCompanySerializer,
    GarageSerializer, CarPartSerializer,
)
from .filters import VehicleFilter


class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        owner = getattr(obj, "posted_by", None)
        return owner == request.user or request.user.is_staff


def _listing_qs():
    return (
        VehicleListing.objects
        .filter(is_active=True)
        .select_related("make", "model", "location__governorate", "showroom")
        .prefetch_related("images")
    )


class VehicleListCreateView(generics.ListCreateAPIView):
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = VehicleFilter
    ordering_fields  = ["price", "year", "mileage", "created_at", "updated_at", "views_count", "avg_rating", "ratings_count", "is_featured", "is_promoted"]
    ordering         = ["-is_featured", "-is_promoted", "-updated_at"]

    def get_queryset(self):
        qs = VehicleListing.objects.select_related("make", "model", "location__governorate", "showroom").prefetch_related("images")
        owner = self.request.query_params.get("owner")
        if not owner:
            qs = qs.filter(is_active=True)
        return qs

    def get_serializer_class(self):
        if self.request.method == "POST":
            return VehicleCreateSerializer
        return VehicleListSerializer

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


class VehicleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = VehicleListing.objects.select_related("make", "model", "location__governorate", "showroom").prefetch_related("images")
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in ("PUT", "PATCH"):
            return VehicleCreateSerializer
        return VehicleDetailSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        VehicleListing.objects.filter(pk=instance.pk).update(views_count=F("views_count") + 1)
        return Response(self.get_serializer(instance).data)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def upload_vehicle_image(request, pk):
    """
    POST /vehicles/<pk>/images/
    Accepts multipart/form-data with an 'image' field.
    Only the listing owner or staff may upload.
    The first uploaded image is automatically set as primary.
    """
    listing = generics.get_object_or_404(VehicleListing, pk=pk)
    if listing.posted_by != request.user and not request.user.is_staff:
        return Response({"error": "Not allowed"}, status=status.HTTP_403_FORBIDDEN)

    serializer = VehicleImageSerializer(data=request.data, context={"request": request})
    serializer.is_valid(raise_exception=True)
    image = serializer.save(listing=listing)

    # First image on the listing becomes primary automatically
    if not VehicleImage.objects.filter(listing=listing, is_primary=True).exclude(pk=image.pk).exists():
        VehicleImage.objects.filter(pk=image.pk).update(is_primary=True)

    return Response(VehicleImageSerializer(image, context={"request": request}).data,
                    status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def track_view(request, pk):
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", ""))
    cache_key = f"view_vehicles_{pk}_{ip}"
    if not cache.get(cache_key):
        VehicleListing.objects.filter(pk=pk, is_active=True).update(views_count=F("views_count") + 1)
        cache.set(cache_key, True, 86400)
    obj = VehicleListing.objects.filter(pk=pk).values("views_count").first()
    return Response({"views_count": obj["views_count"] if obj else 0})


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def similar_vehicles(request, pk):
    listing = generics.get_object_or_404(VehicleListing, pk=pk, is_active=True)
    qs = VehicleListing.objects.filter(
        category=listing.category,
        make=listing.make,
        is_active=True,
    ).exclude(pk=pk).select_related("make", "model", "location__governorate").prefetch_related("images")[:6]
    return Response(VehicleListSerializer(qs, many=True, context={"request": request}).data)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def contact_vehicle(request, pk):
    listing = generics.get_object_or_404(VehicleListing, pk=pk, is_active=True)
    return Response({"status": "contact_request_received", "listing_id": listing.pk})


class CategoryVehiclesView(generics.ListAPIView):
    serializer_class = VehicleListSerializer
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = VehicleFilter
    ordering_fields  = ["price", "year", "created_at"]

    def get_queryset(self):
        filters = {"is_active": True}
        if "category" in self.kwargs:
            filters["category"] = self.kwargs["category"]
        if "listing_type" in self.kwargs:
            filters["listing_type"] = self.kwargs["listing_type"]
        return _listing_qs().filter(**filters)


class VehicleMakeListView(generics.ListAPIView):
    queryset           = VehicleMake.objects.prefetch_related("models").all()
    serializer_class   = VehicleMakeSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class VehicleModelListView(generics.ListAPIView):
    serializer_class   = VehicleModelSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None

    def get_queryset(self):
        return VehicleModel.objects.filter(make_id=self.kwargs["pk"])


class ShowroomListView(generics.ListAPIView):
    queryset           = Showroom.objects.select_related("location").all()
    serializer_class   = ShowroomSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class ShowroomDetailView(generics.RetrieveAPIView):
    queryset           = Showroom.objects.select_related("location").all()
    serializer_class   = ShowroomSerializer
    permission_classes = [permissions.AllowAny]


class ShowroomListingsView(generics.ListAPIView):
    serializer_class = VehicleListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return _listing_qs().filter(showroom_id=self.kwargs["pk"])


class RentalCompanyListView(generics.ListAPIView):
    queryset           = RentalCompany.objects.select_related("location").all()
    serializer_class   = RentalCompanySerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class GarageListView(generics.ListAPIView):
    queryset           = Garage.objects.select_related("location").all()
    serializer_class   = GarageSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class CarPartListCreateView(generics.ListCreateAPIView):
    serializer_class = CarPartSerializer
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend]

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_queryset(self):
        return CarPart.objects.filter(is_active=True).select_related("compatible_make")

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class CarPartDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = CarPart.objects.select_related("compatible_make")
    serializer_class   = CarPartSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]
