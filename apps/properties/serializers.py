from rest_framework import serializers
from .models import PropertyListing, PropertyImage, NearbyAmenity, EducationInstitution
from apps.accounts.serializers import AgencySerializer, AgentSerializer

# Property types that are commercial / international in nature
_COMMERCIAL_TYPES  = {"office", "shop", "building", "warehouse", "commercial", "store", "showroom"}
_INTERNATIONAL_TYPES = {"international"}

# Mapping for purpose values sent by the frontend
_PURPOSE_MAP = {
    "sale":       "for_sale",
    "rent":       "for_rent",
    "wanted":     "for_sale",
    "commercial": "for_sale",
    "for_sale":   "for_sale",
    "for_rent":   "for_rent",
}


class NearbyAmenityWriteSerializer(serializers.Serializer):
    """Minimal write shape for a nearby amenity submitted with a property."""
    amenity_type = serializers.CharField(max_length=30)
    name         = serializers.CharField(max_length=100)
    distance_m   = serializers.IntegerField(required=False, allow_null=True)


class PropertyCreateSerializer(serializers.ModelSerializer):
    """
    Write serializer for POST /properties/ and PATCH /properties/<id>/.

    The frontend sends:
      - purpose    → 'sale'/'rent' (mapped to 'for_sale'/'for_rent')
      - category   → 'apartment'/'villa'/'office'/… (becomes property_type;
                     model category is derived as residential/commercial)
      - property_type (optional, used if already a valid type string)
      - nearby     → list of {amenity_type, name, distance_m} written as
                     NearbyAmenity rows after the property is saved/updated
    """

    nearby = NearbyAmenityWriteSerializer(many=True, required=False, write_only=True)

    class Meta:
        model  = PropertyListing
        fields = [
            "id",
            "listing_intent",
            "title", "description", "purpose", "category", "property_type",
            "price", "price_per_sqm", "currency", "price_period",
            "negotiable", "hide_price",
            "area_sqm", "bedrooms", "bathrooms", "furnishing",
            "contract_type", "deposit", "floor_number", "total_floors",
            "office_capacity", "kahramaa_included", "internet_included",
            "amenities", "no_commission", "reference_code",
            "location", "address_detail", "latitude", "longitude",
            "nearby",
            "is_active",
        ]
        extra_kwargs = {
            "listing_intent": {"required": False},
            "description":    {"required": False, "allow_blank": True},
            "price":          {"required": False, "allow_null": True},
            "price_per_sqm":  {"required": False, "allow_null": True},
            "purpose":        {"required": False, "allow_blank": True},
            "category":       {"required": False, "allow_blank": True},
            "property_type":  {"required": False, "allow_blank": True},
            "bedrooms":       {"required": False, "allow_blank": True, "allow_null": True},
            "bathrooms":      {"required": False, "allow_null": True},
            "area_sqm":       {"required": False, "allow_null": True},
            "floor_number":   {"required": False, "allow_null": True},
            "total_floors":   {"required": False, "allow_null": True},
            "office_capacity":{"required": False, "allow_null": True},
            "furnishing":     {"required": False, "allow_blank": True},
            "contract_type":  {"required": False, "allow_blank": True},
            "deposit":        {"required": False, "allow_blank": True, "allow_null": True},
            "location":       {"required": False, "allow_null": True},
            "address_detail": {"required": False, "allow_blank": True},
            "latitude":       {"required": False, "allow_null": True},
            "longitude":      {"required": False, "allow_null": True},
            "currency":       {"required": False},
            "price_period":   {"required": False, "allow_blank": True, "allow_null": True},
            "reference_code": {"required": False, "allow_blank": True},
            "kahramaa_included": {"required": False},
            "internet_included": {"required": False},
            "is_active":         {"required": False},
        }

    def _sync_nearby(self, instance, nearby_data):
        """Delete all existing nearby amenities and recreate from submitted list."""
        instance.nearby.all().delete()
        for item in (nearby_data or []):
            NearbyAmenity.objects.create(
                listing=instance,
                amenity_type=item["amenity_type"],
                name=item["name"],
                distance_m=item.get("distance_m"),
            )

    def validate(self, attrs):
        # Pop nearby before passing to parent; handled separately in create/update
        self._nearby_data = attrs.pop("nearby", None)

        # ── Coerce null → '' for NOT NULL CharFields — only for fields being set ──
        # Guard with `field in attrs` so a partial PATCH (e.g. {is_active: false})
        # does not inject "" into unrelated fields and corrupt existing data.
        for field in ("bedrooms", "price_period", "deposit", "furnishing", "contract_type"):
            if field in attrs and attrs[field] is None:
                attrs[field] = ""

        # ── Normalise purpose — only when purpose is being explicitly sent ───
        if "purpose" in attrs:
            attrs["purpose"] = _PURPOSE_MAP.get(attrs["purpose"] or "", "for_sale")
        elif not self.partial:
            attrs["purpose"] = "for_sale"

        # ── Map frontend category/property_type → model fields ───────────────
        # Only run when the client is actually setting these fields.
        if "property_type" in attrs or "category" in attrs:
            raw_type = attrs.get("property_type") or attrs.get("category") or "other"
            valid_model_categories = {"residential", "commercial", "international"}
            if raw_type in valid_model_categories:
                attrs.setdefault("property_type", raw_type)
            else:
                attrs["property_type"] = raw_type
                if raw_type in _COMMERCIAL_TYPES:
                    attrs["category"] = "commercial"
                elif raw_type in _INTERNATIONAL_TYPES:
                    attrs["category"] = "international"
                else:
                    attrs["category"] = "residential"

        # ── Default price — only on create, or when price is explicitly sent ─
        if not self.partial or "price" in attrs:
            if attrs.get("price") is None:
                attrs["price"] = 0

        # ── Resolve governorate → location when no specific area chosen ───────
        from apps.core.utils import resolve_governorate_to_location
        attrs = resolve_governorate_to_location(attrs, self.initial_data)

        return attrs

    def create(self, validated_data):
        instance = super().create(validated_data)
        if self._nearby_data is not None:
            self._sync_nearby(instance, self._nearby_data)
        return instance

    def update(self, instance, validated_data):
        instance = super().update(instance, validated_data)
        if self._nearby_data is not None:
            self._sync_nearby(instance, self._nearby_data)
        return instance


class PropertyImageSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(read_only=True)
    card      = serializers.ImageField(read_only=True)
    detail    = serializers.ImageField(read_only=True)

    class Meta:
        model  = PropertyImage
        fields = ["id", "image", "thumbnail", "card", "detail", "is_primary", "order"]


class NearbyAmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model  = NearbyAmenity
        fields = ["id", "amenity_type", "name", "distance_m"]


class PropertyListSerializer(serializers.ModelSerializer):
    primary_image    = serializers.SerializerMethodField()
    images           = serializers.SerializerMethodField()
    area_name        = serializers.SerializerMethodField()
    city_name        = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()
    governorate_id   = serializers.SerializerMethodField()
    ai_summary       = serializers.SerializerMethodField()
    seller_phone     = serializers.SerializerMethodField()
    seller_whatsapp  = serializers.SerializerMethodField()
    seller_name      = serializers.SerializerMethodField()
    seller_logo      = serializers.SerializerMethodField()

    class Meta:
        model  = PropertyListing
        fields = [
            "id", "listing_intent", "title", "purpose", "category", "property_type",
            "price", "currency", "price_period", "negotiable", "hide_price",
            "bedrooms", "bathrooms", "area_sqm", "furnishing",
            "floor_number", "total_floors", "views_count",
            "avg_rating", "ratings_count",
            "is_active", "is_featured", "is_promoted", "is_sold_rented",
            "location", "latitude", "longitude",
            "primary_image", "images", "area_name", "city_name",
            "governorate_name", "governorate_id",
            "ai_summary", "seller_phone", "seller_whatsapp",
            "seller_name", "seller_logo", "created_at",
        ]

    def get_primary_image(self, obj):
        img = obj.images.filter(is_primary=True).first() or obj.images.first()
        if img:
            return PropertyImageSerializer(img, context=self.context).data
        return None

    def get_images(self, obj):
        return PropertyImageSerializer(
            obj.images.order_by("order", "id"), many=True, context=self.context
        ).data

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None

    def get_city_name(self, obj):
        """Kept for backward-compat — returns governorate name (use governorate_name instead)."""
        if obj.location and obj.location.governorate:
            return obj.location.governorate.safe_translation_getter("name", any_language=True)
        return None

    def get_governorate_id(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.pk
        return None

    def get_governorate_name(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.safe_translation_getter("name", any_language=True)
        return None

    def get_ai_summary(self, obj):
        beds    = f"{obj.bedrooms}-bedroom " if obj.bedrooms else ""
        purpose = "for rent" if obj.purpose == "rent" else "for sale"
        area    = self.get_city_name(obj) or self.get_area_name(obj) or ""
        price   = f"{obj.currency} {obj.price:,.0f}" if obj.price else ""
        period  = f"/{obj.price_period}" if getattr(obj, "price_period", None) else ""
        loc     = f" in {area}" if area else ""
        cost    = f", {price}{period}" if price else ""
        return f"{beds}{obj.category or ''} {purpose}{loc}{cost}".strip()

    def get_seller_phone(self, obj):
        """Return best available seller phone: agent user → agency → posted_by."""
        if obj.agent and obj.agent.user.phone:
            return obj.agent.user.phone
        if obj.agency and obj.agency.phone:
            return obj.agency.phone
        return obj.posted_by.phone or None

    def get_seller_whatsapp(self, obj):
        """Return best available seller WhatsApp, falling back to phone number."""
        if obj.agent and obj.agent.user.whatsapp:
            return obj.agent.user.whatsapp
        if obj.agency and obj.agency.whatsapp:
            return obj.agency.whatsapp
        return obj.posted_by.whatsapp or self.get_seller_phone(obj)

    def get_seller_name(self, obj):
        if obj.agent and obj.agent.user:
            u = obj.agent.user
            return f"{u.first_name} {u.last_name}".strip() or u.username
        if obj.agency:
            return obj.agency.name or None
        u = obj.posted_by
        return f"{u.first_name} {u.last_name}".strip() or u.username

    def get_seller_logo(self, obj):
        req = self.context.get("request")
        try:
            if obj.agent and obj.agent.user.avatar_thumbnail:
                t = obj.agent.user.avatar_thumbnail
                return req.build_absolute_uri(t.url) if req else t.url
        except Exception:
            pass
        try:
            if obj.agency and obj.agency.logo_thumbnail:
                t = obj.agency.logo_thumbnail
                return req.build_absolute_uri(t.url) if req else t.url
        except Exception:
            pass
        try:
            if obj.posted_by and obj.posted_by.avatar_thumbnail:
                t = obj.posted_by.avatar_thumbnail
                return req.build_absolute_uri(t.url) if req else t.url
        except Exception:
            pass
        return None


class PropertyDetailSerializer(PropertyListSerializer):
    images         = PropertyImageSerializer(many=True, read_only=True)
    nearby         = NearbyAmenitySerializer(many=True, read_only=True)
    agency         = AgencySerializer(read_only=True)
    agent          = AgentSerializer(read_only=True)

    class Meta(PropertyListSerializer.Meta):
        fields = PropertyListSerializer.Meta.fields + [
            "description", "address_detail", "latitude", "longitude",
            "price_per_sqm", "floor_number", "total_floors", "office_capacity",
            "contract_type", "deposit", "no_commission",
            "kahramaa_included", "internet_included", "amenities",
            "reference_code", "views_count", "expires_at", "updated_at",
            "meta_title", "meta_description",
            "images", "nearby", "agency", "agent",
        ]


class EducationInstitutionSerializer(serializers.ModelSerializer):
    logo_thumbnail = serializers.ImageField(read_only=True)
    area_name      = serializers.SerializerMethodField()

    class Meta:
        model  = EducationInstitution
        fields = [
            "id", "name", "inst_type", "description", "logo", "logo_thumbnail",
            "location", "area_name", "phone", "email", "website",
            "is_featured", "created_at",
        ]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None
