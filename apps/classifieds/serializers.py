from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField
from .models import ClassifiedCategory, Store, ClassifiedListing, ClassifiedImage


class ClassifiedCreateSerializer(TranslatableModelSerializer):
    """
    Write serializer for POST /classifieds/ and PATCH /classifieds/<id>/.
    Accepts translations in { ar: {title, description}, en: {...} } format
    plus all writable FK and scalar fields.
    """
    translations = TranslatedFieldsField(shared_model=ClassifiedListing)

    class Meta:
        model  = ClassifiedListing
        fields = [
            "id",
            "translations",
            "listing_type", "condition",
            "price", "currency", "negotiable", "hide_price",
            "category", "location",
            "is_active",
        ]
        extra_kwargs = {
            "listing_type": {"required": False},
            "condition":    {"required": False, "allow_blank": True},
            "price":        {"required": False, "allow_null": True},
            "currency":     {"required": False},
            "category":     {"required": False, "allow_null": True},
            "location":     {"required": False, "allow_null": True},
            "is_active":    {"required": False},
        }

    def validate(self, attrs):
        # Resolve governorate → location when no specific area was chosen
        from apps.core.utils import resolve_governorate_to_location
        attrs = resolve_governorate_to_location(attrs, self.initial_data)
        return attrs


class ClassifiedCategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=ClassifiedCategory)
    children     = serializers.SerializerMethodField()

    class Meta:
        model  = ClassifiedCategory
        fields = ["id", "translations", "slug", "icon", "order", "is_active", "children"]

    def get_children(self, obj):
        kids = obj.children.filter(is_active=True)
        return ClassifiedCategorySerializer(kids, many=True).data


class ClassifiedImageSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(read_only=True)
    card      = serializers.ImageField(read_only=True)

    class Meta:
        model  = ClassifiedImage
        fields = ["id", "image", "thumbnail", "card", "is_primary", "order"]


class StoreSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Store)
    area_name    = serializers.SerializerMethodField()

    class Meta:
        model  = Store
        fields = ["id", "translations", "logo", "cover", "location", "area_name",
                  "phone", "whatsapp", "instagram", "is_verified", "is_active", "created_at"]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None


class ClassifiedListSerializer(TranslatableModelSerializer):
    translations     = TranslatedFieldsField(shared_model=ClassifiedListing)
    primary_image    = serializers.SerializerMethodField()
    images           = serializers.SerializerMethodField()
    location_name    = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()
    governorate_id   = serializers.SerializerMethodField()
    seller_name      = serializers.SerializerMethodField()
    seller_phone     = serializers.SerializerMethodField()
    seller_whatsapp  = serializers.SerializerMethodField()

    class Meta:
        model  = ClassifiedListing
        fields = [
            "id", "translations", "listing_type", "condition",
            "price", "currency", "negotiable", "hide_price",
            "is_featured", "is_promoted", "is_preloved",
            "views_count", "location",
            "primary_image", "images", "location_name",
            "governorate_name", "governorate_id",
            "seller_name", "seller_phone", "seller_whatsapp", "created_at",
        ]

    def get_primary_image(self, obj):
        img = obj.images.filter(is_primary=True).first() or obj.images.first()
        if img:
            return ClassifiedImageSerializer(img, context=self.context).data
        return None

    def get_images(self, obj):
        return ClassifiedImageSerializer(
            obj.images.order_by("order", "id"), many=True, context=self.context
        ).data

    def get_location_name(self, obj):
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

    def get_seller_name(self, obj):
        return obj.seller.get_full_name() or obj.seller.username

    def get_seller_phone(self, obj):
        # Store phone takes precedence; fall back to user phone
        if hasattr(obj, "store") and obj.store and obj.store.phone:
            return obj.store.phone
        return obj.seller.phone or None

    def get_seller_whatsapp(self, obj):
        if hasattr(obj, "store") and obj.store and obj.store.whatsapp:
            return obj.store.whatsapp
        return obj.seller.whatsapp or self.get_seller_phone(obj)


class ClassifiedDetailSerializer(ClassifiedListSerializer):
    images = ClassifiedImageSerializer(many=True, read_only=True)
    store  = StoreSerializer(read_only=True)

    class Meta(ClassifiedListSerializer.Meta):
        fields = ClassifiedListSerializer.Meta.fields + [
            "images", "store", "views_count", "expires_at", "updated_at",
        ]
