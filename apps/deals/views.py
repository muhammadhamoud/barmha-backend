from django.db import models as db_models
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
import uuid
from apps.core.pagination import BarmhaPagination
from .models import DealCategory, Merchant, Deal, DealRedemption
from .serializers import (
    DealCategorySerializer, MerchantSerializer,
    DealSerializer, DealRedemptionSerializer,
)


class DealListView(generics.ListAPIView):
    serializer_class   = DealSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        now = timezone.now()
        qs  = Deal.objects.filter(
            is_active=True, start_date__lte=now, end_date__gte=now
        ).select_related("merchant", "category", "merchant__location__governorate")
        gov = self.request.query_params.get("governorate")
        if gov:
            qs = qs.filter(merchant__location__governorate=gov)
        cat = self.request.query_params.get("category")
        if cat:
            qs = qs.filter(category=cat)
        return qs


class DealDetailView(generics.RetrieveAPIView):
    serializer_class   = DealSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Deal.objects.select_related("merchant", "category")

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        Deal.objects.filter(pk=instance.pk).update(views_count=db_models.F("views_count") + 1)
        return super().retrieve(request, *args, **kwargs)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def redeem_deal(request, pk):
    deal = get_object_or_404(Deal, pk=pk, is_active=True)
    now  = timezone.now()
    if not (deal.start_date <= now <= deal.end_date):
        return Response({"detail": "Deal is not currently active."}, status=status.HTTP_400_BAD_REQUEST)
    if DealRedemption.objects.filter(deal=deal, user=request.user).exists():
        return Response({"detail": "Already redeemed."}, status=status.HTTP_400_BAD_REQUEST)
    code       = uuid.uuid4().hex[:12].upper()
    redemption = DealRedemption.objects.create(deal=deal, user=request.user, code=code)
    Deal.objects.filter(pk=pk).update(redemptions_count=db_models.F("redemptions_count") + 1)
    return Response(DealRedemptionSerializer(redemption).data, status=status.HTTP_201_CREATED)


class DealCategoryListView(generics.ListAPIView):
    queryset           = DealCategory.objects.all()
    serializer_class   = DealCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


@method_decorator(cache_page(1800), name="list")
class DealOfDayView(generics.ListAPIView):
    serializer_class   = DealSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None

    def get_queryset(self):
        now = timezone.now()
        return Deal.objects.filter(
            is_deal_of_day=True, is_active=True,
            start_date__lte=now, end_date__gte=now,
        )


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def nearby_deals(request):
    now = timezone.now()
    qs  = Deal.objects.filter(is_active=True, start_date__lte=now, end_date__gte=now)[:20]
    return Response(DealSerializer(qs, many=True).data)


class MerchantListView(generics.ListAPIView):
    queryset           = Merchant.objects.select_related("category", "location")
    serializer_class   = MerchantSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class MerchantDetailView(generics.RetrieveAPIView):
    queryset           = Merchant.objects.select_related("category", "location")
    serializer_class   = MerchantSerializer
    permission_classes = [permissions.AllowAny]


class MerchantDealsView(generics.ListAPIView):
    serializer_class   = DealSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Deal.objects.filter(merchant_id=self.kwargs["pk"])
