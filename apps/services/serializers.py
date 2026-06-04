from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField
from .models import ServiceCategory, ServiceProvider, ServiceListing


class ServiceCreateSerializer(TranslatableModelSerializer):
    """
    Write serializer for POST /services/ and PATCH /services/<id>/.
    The provider FK is injected by the view's perform_create().
    """
    translations = TranslatedFieldsField(shared_model=ServiceListing)

    class Meta:
        model  = ServiceListing
        fields = [
            "id",
            "translations",
            "category", "price", "min_price", "max_price", "currency", "price_type",
            "is_remote", "location",
            "is_active",
        ]
        extra_kwargs = {
            "category":   {"required": False, "allow_null": True},
            "price":      {"required": False, "allow_null": True},
            "min_price":  {"required": False, "allow_null": True},
            "max_price":  {"required": False, "allow_null": True},
            "currency":   {"required": False},
            "price_type": {"required": False},
            "location":   {"required": False, "allow_null": True},
            "is_active":  {"required": False},
        }

    def validate(self, attrs):
        # Resolve governorate → location when no specific area was chosen
        from apps.core.utils import resolve_governorate_to_location
        attrs = resolve_governorate_to_location(attrs, self.initial_data)
        return attrs


class ServiceCategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=ServiceCategory)

    class Meta:
        model  = ServiceCategory
        fields = ["id", "translations", "slug", "icon", "order"]


class ServiceProviderSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=ServiceProvider)
    area_name    = serializers.SerializerMethodField()
    user_name    = serializers.SerializerMethodField()

    class Meta:
        model  = ServiceProvider
        fields = [
            "id", "translations", "user", "user_name", "categories", "location", "area_name",
            "phone", "whatsapp", "portfolio",
            "is_verified", "is_featured", "avg_rating", "review_count", "created_at",
        ]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None

    def get_user_name(self, obj):
        return obj.user.get_full_name() or obj.user.username


class ServiceListingSerializer(TranslatableModelSerializer):
    translations     = TranslatedFieldsField(shared_model=ServiceListing)
    provider_name    = serializers.SerializerMethodField()
    area_name        = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()
    governorate_id   = serializers.SerializerMethodField()
    seller_phone     = serializers.SerializerMethodField()
    seller_whatsapp  = serializers.SerializerMethodField()

    class Meta:
        model  = ServiceListing
        fields = [
            "id", "translations", "provider", "provider_name", "category",
            "price", "min_price", "max_price", "currency", "price_type",
            "location", "area_name", "governorate_name", "governorate_id",
            "seller_phone", "seller_whatsapp",
            "is_active", "is_featured", "is_promoted", "views_count", "avg_rating", "ratings_count", "created_at",
        ]

    def get_provider_name(self, obj):
        return str(obj.provider.user)

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None

    def get_governorate_id(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.pk
        return None

    def get_governorate_name(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.safe_translation_getter("name", any_language=True)
        return None

    def get_seller_phone(self, obj):
        return obj.provider.phone or obj.provider.user.phone or None

    def get_seller_whatsapp(self, obj):
        return obj.provider.whatsapp or obj.provider.user.whatsapp or self.get_seller_phone(obj)


class ServiceDetailSerializer(ServiceListingSerializer):
    """Full detail serializer — includes provider contact info and primary image."""
    provider = ServiceProviderSerializer(read_only=True)

    class Meta(ServiceListingSerializer.Meta):
        fields = ServiceListingSerializer.Meta.fields + [
            "provider", "updated_at",
        ]
