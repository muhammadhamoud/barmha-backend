from rest_framework import serializers
from .models import VehicleMake, VehicleModel, VehicleListing, VehicleImage, Showroom, RentalCompany, Garage, CarPart

# sub_type values the frontend sends → (listing_type, category) for the model
_SUBTYPE_MAP = {
    "sale":       ("sale", "car"),
    "rent":       ("rent", "car"),
    "commercial": ("sale", "commercial"),
    "motorcycle": ("sale", "motorbike"),
    "motorbike":  ("sale", "motorbike"),
    "boat":       ("sale", "boat"),
}


class VehicleCreateSerializer(serializers.ModelSerializer):
    """
    Write serializer used for POST /vehicles/ (create) and PATCH /vehicles/<id>/ (update).
    Accepts the field names the frontend actually sends, normalises sub_type → listing_type +
    category, and resolves model_name (free text) to a VehicleModel FK if possible.
    """
    # Frontend sends a free-text model name; we resolve it to a FK in validate()
    model_name = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model  = VehicleListing
        fields = [
            "id",
            "listing_intent",
            "title", "description",
            "listing_type", "category",
            "make", "model", "model_name", "trim", "year",
            "price", "currency", "negotiable", "hide_price",
            "mileage", "fuel_type", "gear_type", "condition",
            "engine_size", "cylinders", "wheel_drive", "body_style",
            "color_exterior", "color_interior", "doors", "seats",
            "import_source", "insurance_type", "features",
            "under_warranty", "computer_check",
            "location",
            "is_active",
        ]
        extra_kwargs = {
            "listing_intent": {"required": False},
            # Allow nulls / blanks for optional fields
            "description":    {"required": False, "allow_blank": True},
            "make":           {"required": False, "allow_null": True},
            "model":          {"required": False, "allow_null": True},
            "year":           {"required": False, "allow_null": True},
            "price":          {"required": False, "allow_null": True},
            "mileage":        {"required": False, "allow_null": True},
            "engine_size":    {"required": False, "allow_blank": True, "allow_null": True},
            "cylinders":      {"required": False, "allow_null": True},
            "doors":          {"required": False, "allow_null": True},
            "seats":          {"required": False, "allow_null": True},
            "location":       {"required": False, "allow_null": True},
            "listing_type":   {"required": False},
            "category":       {"required": False},
            "currency":       {"required": False},
            "condition":      {"required": False, "allow_blank": True},
            "fuel_type":      {"required": False, "allow_blank": True},
            "gear_type":      {"required": False, "allow_blank": True},
            "body_style":     {"required": False, "allow_blank": True},
            "wheel_drive":    {"required": False, "allow_blank": True},
            "color_exterior": {"required": False, "allow_blank": True},
            "color_interior": {"required": False, "allow_blank": True},
            "trim":           {"required": False, "allow_blank": True},
            "import_source":  {"required": False, "allow_blank": True},
            "insurance_type": {"required": False, "allow_blank": True},
            "is_active":      {"required": False},
        }

    def validate(self, attrs):
        # ── Normalise listing_type + category — only when being explicitly set ─
        # Guard with `in attrs` so a partial PATCH (e.g. {is_active: false})
        # does not overwrite the existing listing_type/category with defaults.
        if "listing_type" in attrs or "category" in attrs:
            listing_type = attrs.get("listing_type", "sale")
            category     = attrs.get("category", "car")
            if listing_type in _SUBTYPE_MAP:
                listing_type, category = _SUBTYPE_MAP[listing_type]
                attrs["listing_type"] = listing_type
                attrs["category"]     = category
            elif not category:
                attrs["category"] = "car"

        # ── Resolve model_name → VehicleModel FK ─────────────────────────────
        model_name = attrs.pop("model_name", "") or ""
        if not attrs.get("model") and model_name and attrs.get("make"):
            vehicle_model, _ = VehicleModel.objects.get_or_create(
                make=attrs["make"], name=model_name.strip()
            )
            attrs["model"] = vehicle_model

        # ── Default price to 0 — only on create or when price is explicitly sent
        if not self.partial or "price" in attrs:
            if attrs.get("price") is None:
                attrs["price"] = 0

        # ── Coerce null CharField values to "" — only for fields being set ──
        for char_field in (
            "engine_size", "trim", "color_exterior", "color_interior",
            "fuel_type", "gear_type", "body_style", "wheel_drive",
            "condition", "import_source", "insurance_type",
        ):
            if char_field in attrs and attrs[char_field] is None:
                attrs[char_field] = ""

        # ── Resolve governorate → location when no specific area chosen ───────
        from apps.core.utils import resolve_governorate_to_location
        attrs = resolve_governorate_to_location(attrs, self.initial_data)

        return attrs


class VehicleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model  = VehicleModel
        fields = ["id", "name"]


class VehicleMakeSerializer(serializers.ModelSerializer):
    models       = VehicleModelSerializer(many=True, read_only=True)
    logo_display = serializers.SerializerMethodField()

    class Meta:
        model  = VehicleMake
        fields = ["id", "name", "logo", "logo_url", "logo_display", "popular", "models"]

    def get_logo_display(self, obj):
        """Uploaded logo takes priority; falls back to CDN logo_url."""
        request = self.context.get("request")
        if obj.logo:
            try:
                url = obj.logo.url
                return request.build_absolute_uri(url) if request else url
            except Exception:
                pass
        return obj.logo_url or None


class VehicleImageSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(read_only=True)
    card      = serializers.ImageField(read_only=True)
    detail    = serializers.ImageField(read_only=True)

    class Meta:
        model  = VehicleImage
        fields = ["id", "image", "thumbnail", "card", "detail", "is_primary", "order"]


class ShowroomSerializer(serializers.ModelSerializer):
    area_name = serializers.SerializerMethodField()

    class Meta:
        model  = Showroom
        fields = ["id", "name", "logo", "cover", "location", "area_name",
                  "phone", "whatsapp", "description", "is_verified", "is_featured", "created_at"]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None


class VehicleListSerializer(serializers.ModelSerializer):
    make_name        = serializers.SerializerMethodField()
    model_name       = serializers.SerializerMethodField()
    primary_image    = serializers.SerializerMethodField()
    images           = serializers.SerializerMethodField()
    area_name        = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()
    governorate_id   = serializers.SerializerMethodField()
    ai_summary       = serializers.SerializerMethodField()
    seller_phone     = serializers.SerializerMethodField()
    seller_whatsapp  = serializers.SerializerMethodField()
    seller_name      = serializers.SerializerMethodField()
    seller_logo      = serializers.SerializerMethodField()

    class Meta:
        model  = VehicleListing
        fields = [
            "id", "listing_intent", "title", "listing_type", "category",
            "make_name", "model_name", "trim", "year",
            "price", "currency", "negotiable", "hide_price",
            "mileage", "fuel_type", "gear_type", "condition",
            "engine_size", "cylinders", "wheel_drive", "views_count",
            "is_active", "is_featured", "is_promoted", "is_sold",
            "location",
            "primary_image", "images", "area_name",
            "governorate_name", "governorate_id", "ai_summary",
            "seller_phone", "seller_whatsapp",
            "seller_name", "seller_logo", "created_at",
        ]

    def get_make_name(self, obj):
        return obj.make.name if obj.make else None

    def get_model_name(self, obj):
        return obj.model.name if obj.model else None

    def get_primary_image(self, obj):
        img = obj.images.filter(is_primary=True).first() or obj.images.first()
        if img:
            return VehicleImageSerializer(img, context=self.context).data
        return None

    def get_images(self, obj):
        return VehicleImageSerializer(
            obj.images.order_by("order", "id"), many=True, context=self.context
        ).data

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

    def get_ai_summary(self, obj):
        year  = str(obj.year) if obj.year else ""
        make  = obj.make.name if obj.make else ""
        model = obj.model.name if obj.model else ""
        parts = [p for p in [year, make, model] if p]
        extras = [p for p in [obj.fuel_type or "", getattr(obj, "body_style", "") or ""] if p]
        price  = f"{obj.currency} {obj.price:,.0f}" if obj.price else ""
        base   = " ".join(parts)
        detail = " — " + ", ".join(extras) if extras else ""
        cost   = f", {price}" if price else ""
        return f"{base}{detail}{cost}".strip()

    def get_seller_phone(self, obj):
        if obj.showroom and obj.showroom.phone:
            return obj.showroom.phone
        return obj.posted_by.phone or None

    def get_seller_whatsapp(self, obj):
        if obj.showroom and obj.showroom.whatsapp:
            return obj.showroom.whatsapp
        return obj.posted_by.whatsapp or self.get_seller_phone(obj)

    def get_seller_name(self, obj):
        if obj.showroom:
            return obj.showroom.name or None
        u = obj.posted_by
        return f"{u.first_name} {u.last_name}".strip() or u.username

    def get_seller_logo(self, obj):
        req = self.context.get("request")
        if obj.showroom and obj.showroom.logo:
            try:
                return req.build_absolute_uri(obj.showroom.logo.url) if req else obj.showroom.logo.url
            except Exception:
                pass
        try:
            if obj.posted_by and obj.posted_by.avatar_thumbnail:
                t = obj.posted_by.avatar_thumbnail
                return req.build_absolute_uri(t.url) if req else t.url
        except Exception:
            pass
        return None


class VehicleDetailSerializer(VehicleListSerializer):
    images   = VehicleImageSerializer(many=True, read_only=True)
    showroom = ShowroomSerializer(read_only=True)

    class Meta(VehicleListSerializer.Meta):
        fields = VehicleListSerializer.Meta.fields + [
            "make", "model",   # raw FK integers for edit-mode pre-selection
            "description",
            "body_style", "color_exterior", "color_interior", "doors", "seats",
            "import_source", "insurance_type", "features",
            "under_warranty", "computer_check",
            "expires_at", "updated_at",
            "meta_title", "meta_description",
            "images", "showroom",
        ]


class RentalCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model  = RentalCompany
        fields = ["id", "name", "logo", "location", "phone", "website", "is_featured", "created_at"]


class GarageSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Garage
        fields = ["id", "name", "location", "phone", "specializations", "is_featured", "created_at"]


class CarPartSerializer(serializers.ModelSerializer):
    thumbnail            = serializers.ImageField(read_only=True)
    compatible_make_name = serializers.SerializerMethodField()

    class Meta:
        model  = CarPart
        fields = [
            "id", "title", "description", "price", "currency", "condition",
            "compatible_make", "compatible_make_name", "image", "thumbnail",
            "is_active", "created_at",
        ]
        read_only_fields = ["posted_by"]

    def get_compatible_make_name(self, obj):
        return obj.compatible_make.name if obj.compatible_make else None
