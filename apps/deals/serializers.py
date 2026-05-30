from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField
from .models import DealCategory, Merchant, Deal, DealRedemption


class DealCategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=DealCategory)

    class Meta:
        model  = DealCategory
        fields = ["id", "translations", "slug", "icon", "order"]


class MerchantSerializer(TranslatableModelSerializer):
    translations     = TranslatedFieldsField(shared_model=Merchant)
    area_name        = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()

    class Meta:
        model  = Merchant
        fields = [
            "id", "translations", "logo", "category", "location",
            "area_name", "governorate_name",
            "phone", "whatsapp", "website", "instagram",
            "is_verified", "is_featured", "avg_rating", "created_at",
        ]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None

    def get_governorate_name(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.safe_translation_getter("name", any_language=True)
        return None


class DealSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Deal)
    thumbnail    = serializers.ImageField(read_only=True)
    card         = serializers.ImageField(read_only=True)
    merchant     = MerchantSerializer(read_only=True)
    merchant_id  = serializers.PrimaryKeyRelatedField(
        queryset=Merchant.objects.all(), source="merchant", write_only=True
    )

    class Meta:
        model  = Deal
        fields = [
            "id", "translations", "merchant", "merchant_id", "category",
            "deal_type", "discount_value", "original_price", "deal_price",
            "currency", "thumbnail", "card", "start_date", "end_date",
            "is_active", "is_deal_of_day", "is_featured",
            "views_count", "redemptions_count", "created_at",
        ]


class DealRedemptionSerializer(serializers.ModelSerializer):
    class Meta:
        model  = DealRedemption
        fields = ["id", "deal", "code", "redeemed_at"]
        read_only_fields = ["code", "redeemed_at"]
