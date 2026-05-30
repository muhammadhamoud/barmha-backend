from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from django.db.models import F
from django.core.cache import cache

from apps.core.pagination import BarmhaPagination
from .filters import ClassifiedFilter
from .models import ClassifiedCategory, Store, ClassifiedListing, ClassifiedImage
from .serializers import (
    ClassifiedCreateSerializer, ClassifiedCategorySerializer, StoreSerializer,
    ClassifiedListSerializer, ClassifiedDetailSerializer, ClassifiedImageSerializer,
)


class IsSellerOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.seller == request.user or request.user.is_staff


def _listing_qs():
    return (
        ClassifiedListing.objects
        .filter(is_active=True)
        .select_related("seller", "store", "category", "location__governorate")
        .prefetch_related("images")
    )


class ClassifiedListCreateView(generics.ListCreateAPIView):
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = ClassifiedFilter
    ordering_fields  = ["price", "created_at", "updated_at", "views_count", "is_featured", "is_promoted"]

    def get_queryset(self):
        qs = ClassifiedListing.objects.select_related("seller", "store", "category", "location__governorate").prefetch_related("images")
        owner = self.request.query_params.get("owner")
        if not owner:
            qs = qs.filter(is_active=True)
        return qs

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ClassifiedCreateSerializer
        return ClassifiedListSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def upload_classified_image(request, pk):
    """POST /classifieds/<pk>/images/ — multipart/form-data with 'image' field."""
    listing = generics.get_object_or_404(ClassifiedListing, pk=pk)
    if listing.seller != request.user and not request.user.is_staff:
        return Response({"error": "Not allowed"}, status=status.HTTP_403_FORBIDDEN)
    serializer = ClassifiedImageSerializer(data=request.data, context={"request": request})
    serializer.is_valid(raise_exception=True)
    image = serializer.save(listing=listing)
    if not ClassifiedImage.objects.filter(listing=listing, is_primary=True).exclude(pk=image.pk).exists():
        ClassifiedImage.objects.filter(pk=image.pk).update(is_primary=True)
    return Response(ClassifiedImageSerializer(image, context={"request": request}).data,
                    status=status.HTTP_201_CREATED)


class ClassifiedDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = ClassifiedListing.objects.select_related("seller", "store", "category", "location__governorate").prefetch_related("images")
    permission_classes = [IsSellerOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in ("PUT", "PATCH"):
            return ClassifiedCreateSerializer
        return ClassifiedDetailSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        ClassifiedListing.objects.filter(pk=instance.pk).update(views_count=F("views_count") + 1)
        return Response(self.get_serializer(instance).data)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def track_view(request, pk):
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", ""))
    cache_key = f"view_classifieds_{pk}_{ip}"
    if not cache.get(cache_key):
        ClassifiedListing.objects.filter(pk=pk, is_active=True).update(views_count=F("views_count") + 1)
        cache.set(cache_key, True, 86400)
    obj = ClassifiedListing.objects.filter(pk=pk).values("views_count").first()
    return Response({"views_count": obj["views_count"] if obj else 0})


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def similar_classifieds(request, pk):
    listing = generics.get_object_or_404(ClassifiedListing, pk=pk, is_active=True)
    qs = _listing_qs().filter(category=listing.category).exclude(pk=pk)[:6]
    return Response(ClassifiedListSerializer(qs, many=True, context={"request": request}).data)


class ClassifiedCategoryListView(generics.ListAPIView):
    queryset           = ClassifiedCategory.objects.filter(is_active=True, parent=None).prefetch_related("children")
    serializer_class   = ClassifiedCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class ClassifiedCategoryDetailView(generics.RetrieveAPIView):
    queryset           = ClassifiedCategory.objects.filter(is_active=True)
    serializer_class   = ClassifiedCategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field       = "slug"


class StoreListView(generics.ListAPIView):
    queryset           = Store.objects.filter(is_active=True).select_related("location")
    serializer_class   = StoreSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class StoreDetailView(generics.RetrieveAPIView):
    queryset           = Store.objects.select_related("location")
    serializer_class   = StoreSerializer
    permission_classes = [permissions.AllowAny]


class StoreListingsView(generics.ListAPIView):
    serializer_class = ClassifiedListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return _listing_qs().filter(store_id=self.kwargs["pk"])


class PrelovedListView(generics.ListAPIView):
    serializer_class = ClassifiedListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return _listing_qs().filter(is_preloved=True)


class FeaturedListView(generics.ListAPIView):
    serializer_class = ClassifiedListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return _listing_qs().filter(is_featured=True)
