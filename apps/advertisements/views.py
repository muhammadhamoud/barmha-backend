from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.db import models as db_models
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from apps.core.pagination import BarmhaPagination
from .models import AdPlacement, AdBanner, AdImpression, AdClick
from .serializers import AdPlacementSerializer, AdBannerSerializer, AdBannerAdminSerializer


def _get_client_ip(request):
    xff = request.META.get("HTTP_X_FORWARDED_FOR")
    return xff.split(",")[0].strip() if xff else request.META.get("REMOTE_ADDR", "0.0.0.0")


# ─────────────────────────────────────────────────────────────────────────────
# Public / display views
# ─────────────────────────────────────────────────────────────────────────────

class AdPlacementListView(generics.ListAPIView):
    """List all placement slots with their dimensions — used by admin UI."""
    queryset           = AdPlacement.objects.all()
    serializer_class   = AdPlacementSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class ActiveBannersView(generics.ListAPIView):
    """
    GET /ads/placements/<key>/active/
    Returns currently active banners for a specific slot.
    Called by the frontend AdBannerComponent to populate each slot.
    """
    serializer_class   = AdBannerSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None

    def get_queryset(self):
        today     = timezone.now().date()
        placement = get_object_or_404(AdPlacement, key=self.kwargs["key"])
        return AdBanner.objects.filter(
            placement=placement,
            status="active",
            start_date__lte=today,
            end_date__gte=today,
        ).order_by("-created_at")[:placement.max_ads]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx["request"] = self.request
        return ctx


# ─────────────────────────────────────────────────────────────────────────────
# Admin management views  (require is_staff)
# ─────────────────────────────────────────────────────────────────────────────

class AdminAdPlacementListCreateView(generics.ListCreateAPIView):
    """
    GET  /ads/admin/placements/     — list all placement slots
    POST /ads/admin/placements/     — create a new slot
    Staff only.
    """
    queryset           = AdPlacement.objects.all()
    serializer_class   = AdPlacementSerializer
    permission_classes = [permissions.IsAdminUser]
    pagination_class   = None


class AdminAdPlacementDetailView(generics.RetrieveUpdateDestroyAPIView):
    """GET/PUT/PATCH/DELETE /ads/admin/placements/<id>/   — staff only."""
    queryset           = AdPlacement.objects.all()
    serializer_class   = AdPlacementSerializer
    permission_classes = [permissions.IsAdminUser]


class AdminAdBannerListCreateView(generics.ListCreateAPIView):
    """
    GET  /ads/admin/banners/    — list all banners (all advertisers)
    POST /ads/admin/banners/    — create a banner (admin assigns advertiser)
    Staff only.
    """
    serializer_class   = AdBannerAdminSerializer
    permission_classes = [permissions.IsAdminUser]
    pagination_class   = BarmhaPagination

    def get_queryset(self):
        qs = AdBanner.objects.select_related("placement", "advertiser").order_by("-created_at")
        # Optional filters via query params
        placement = self.request.query_params.get("placement")
        status_f  = self.request.query_params.get("status")
        if placement:
            qs = qs.filter(placement__key=placement)
        if status_f:
            qs = qs.filter(status=status_f)
        return qs

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx["request"] = self.request
        return ctx

    def perform_create(self, serializer):
        # Admin can specify advertiser_id in payload; fallback to self
        advertiser_id = self.request.data.get("advertiser")
        from apps.accounts.models import User
        try:
            advertiser = User.objects.get(pk=advertiser_id) if advertiser_id else self.request.user
        except User.DoesNotExist:
            advertiser = self.request.user
        serializer.save(advertiser=advertiser)


class AdminAdBannerDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET/PUT/PATCH/DELETE /ads/admin/banners/<id>/
    Staff only — can update status, dates, image, URL for any banner.
    """
    queryset           = AdBanner.objects.select_related("placement", "advertiser")
    serializer_class   = AdBannerAdminSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx["request"] = self.request
        return ctx


# ─────────────────────────────────────────────────────────────────────────────
# Tracking endpoints  (public — called by the frontend banner component)
# ─────────────────────────────────────────────────────────────────────────────

@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def record_impression(request, pk):
    """POST /ads/banners/<pk>/impression/  — fire-and-forget counter increment."""
    banner = get_object_or_404(AdBanner, pk=pk, status="active")
    AdImpression.objects.create(
        banner     = banner,
        ip_address = _get_client_ip(request),
        user       = request.user if request.user.is_authenticated else None,
    )
    AdBanner.objects.filter(pk=pk).update(impressions=db_models.F("impressions") + 1)
    return Response({"detail": "Recorded."}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def record_click(request, pk):
    """POST /ads/banners/<pk>/click/  — increments click counter, returns target URL."""
    banner = get_object_or_404(AdBanner, pk=pk, status="active")
    AdClick.objects.create(
        banner     = banner,
        ip_address = _get_client_ip(request),
        user       = request.user if request.user.is_authenticated else None,
    )
    AdBanner.objects.filter(pk=pk).update(clicks=db_models.F("clicks") + 1)
    return Response({"url": banner.url})
