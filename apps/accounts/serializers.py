import re
from rest_framework import serializers
from .models import User, RealEstateAgent, RealEstateAgency, Subscription, SavedSearch, Favourite, PaymentIntent


def _normalize_phone(value: str) -> str:
    """
    Normalize a phone/whatsapp number for storage:
    - Strip all non-digit characters (spaces, dashes, parens, dots, +)
    - Remove a leading '00' prefix (international trunk) but keep a single leading '0'
    Returns the cleaned digit-only string, or '' if blank.
    """
    if not value:
        return value
    digits = re.sub(r'\D', '', value)          # keep digits only
    if digits.startswith('00'):
        digits = digits[2:]                    # strip double-zero trunk prefix
    return digits


# ─────────────────────────────────────────────────────────────────────────────
# LEGACY RegisterSerializer — kept for future use (OTP flow / username field)
# ─────────────────────────────────────────────────────────────────────────────
# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, min_length=8)
#
#     class Meta:
#         model  = User
#         fields = ["id","email","username","password","user_type","first_name","last_name","phone","whatsapp"]
#
#     def create(self, validated_data):
#         return User.objects.create_user(**validated_data)


class SimpleRegisterSerializer(serializers.ModelSerializer):
    """
    Email OR phone registration — at least one is required.
    Phone-only accounts get an internal stub email (@barmha.phone) so the DB
    unique constraint is satisfied; users log in with their phone number.
    """
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model  = User
        fields = ["id", "email", "password", "user_type", "first_name", "last_name", "phone"]
        extra_kwargs = {
            "first_name": {"required": False, "allow_blank": True},
            "last_name":  {"required": False, "allow_blank": True},
            "phone":      {"required": False, "allow_blank": True},
            "user_type":  {"required": False},
            "email":      {"required": False, "allow_blank": True},
        }

    def validate_email(self, value):
        if not value:
            return value
        value = value.strip().lower()
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("هذا البريد الإلكتروني مسجّل مسبقاً.")
        return value

    def validate_phone(self, value):
        return _normalize_phone(value)

    def validate(self, attrs):
        email = (attrs.get('email') or '').strip()
        phone = (attrs.get('phone') or '').strip()
        if not email and not phone:
            raise serializers.ValidationError(
                {'email': 'يجب إدخال البريد الإلكتروني أو رقم الهاتف على الأقل.'}
            )
        if phone and not email:
            # Phone-only: check phone uniqueness (email uniqueness checked via stub collision)
            if User.objects.filter(phone=phone).exists():
                raise serializers.ValidationError(
                    {'phone': 'رقم الهاتف هذا مسجّل مسبقاً.'}
                )
        return attrs

    def create(self, validated_data):
        phone = validated_data.get('phone', '')
        email = (validated_data.get('email') or '').strip()

        # Phone-only account: stub email uses just the number (no prefix)
        if not email and phone:
            validated_data['email'] = f'{phone}@barmha.phone'
            # No email to verify — mark account as verified immediately
            validated_data['is_verified'] = True

        # Sync whatsapp to phone at registration time (user can change later)
        validated_data.setdefault('whatsapp', phone)

        return User.objects.create_user(**validated_data)


class UserProfileSerializer(serializers.ModelSerializer):
    # Use SerializerMethodField so imagekit thumbnail generation errors never
    # crash the response with a 500.  ImageSpecField is virtual (not a DB
    # column) and its .url access triggers on-the-fly image generation; wrapping
    # it in try/except is the safest pattern.
    avatar_thumbnail = serializers.SerializerMethodField()

    class Meta:
        model  = User
        fields = ["id","email","first_name","last_name","phone","whatsapp",
                  "avatar","avatar_thumbnail","social_avatar_url","user_type","bio","is_verified",
                  "email_verified","is_staff","language","created_at"]
        read_only_fields = ["id","email","is_verified","email_verified","is_staff","created_at","social_avatar_url"]
        # email is read-only: users cannot change it via the profile API.
        # is_staff is read-only: only set via Django admin.
        # username intentionally omitted from the public profile API

    def validate_phone(self, value):
        return _normalize_phone(value)

    def validate_whatsapp(self, value):
        return _normalize_phone(value)

    def get_avatar_thumbnail(self, obj):
        """
        Returns the best available avatar URL:
        1. Imagekit-processed thumbnail of the uploaded avatar
        2. Raw uploaded avatar URL
        3. Social provider avatar URL (Google / Facebook picture)
        """
        try:
            spec = obj.avatar_thumbnail   # ImageSpecField descriptor → SpecFile
            if not spec:
                return obj.social_avatar_url or None
            url = spec.url                # triggers synchronous cache generation
            request = self.context.get("request")
            return request.build_absolute_uri(url) if request else url
        except Exception:
            try:
                url = obj.avatar.url
                request = self.context.get("request")
                return request.build_absolute_uri(url) if request else url
            except Exception:
                return obj.social_avatar_url or None


class UserPublicSerializer(serializers.ModelSerializer):
    """Minimal public profile — used for user search / listing share recipient picker."""
    avatar_thumbnail = serializers.SerializerMethodField()
    full_name        = serializers.SerializerMethodField()

    class Meta:
        model  = User
        fields = ["id", "full_name", "username", "avatar_thumbnail"]

    def get_avatar_thumbnail(self, obj):
        try:
            spec = obj.avatar_thumbnail
            if not spec:
                return obj.social_avatar_url or None
            url = spec.url
            request = self.context.get("request")
            return request.build_absolute_uri(url) if request else url
        except Exception:
            try:
                url = obj.avatar.url
                request = self.context.get("request")
                return request.build_absolute_uri(url) if request else url
            except Exception:
                return obj.social_avatar_url or None

    def get_full_name(self, obj):
        return obj.get_full_name() or obj.username or obj.email.split("@")[0]


class AgencySerializer(serializers.ModelSerializer):
    logo_thumbnail = serializers.ImageField(read_only=True)

    class Meta:
        model  = RealEstateAgency
        fields = "__all__"


class AgentSerializer(serializers.ModelSerializer):
    user   = UserProfileSerializer(read_only=True)
    agency = AgencySerializer(read_only=True)

    class Meta:
        model  = RealEstateAgent
        fields = "__all__"


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Subscription
        fields = "__all__"
        read_only_fields = ["user"]


class SavedSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model  = SavedSearch
        fields = ["id","section","filters","name","notify","created_at"]
        read_only_fields = ["id","created_at"]


class FavouriteSerializer(serializers.ModelSerializer):
    """
    Returns each favourite enriched with the card data of the referenced listing
    so the frontend can render ListingCardComponent without extra requests.
    """
    section = serializers.SerializerMethodField()
    listing = serializers.SerializerMethodField()

    # Singular content_type → plural URL segment (matches Angular route path)
    _SECTION_MAP = {
        "property":   "properties",
        "vehicle":    "vehicles",
        "classified": "classifieds",
        "service":    "services",
        "job":        "jobs",
        "deal":       "deals",
        "event":      "events",
    }

    class Meta:
        model  = Favourite
        fields = ["id", "content_type", "object_id", "section", "listing", "created_at"]

    def get_section(self, obj):
        return self._SECTION_MAP.get(obj.content_type, obj.content_type)

    def get_listing(self, obj):                              # noqa: C901
        request = self.context.get("request")
        ct      = obj.content_type
        oid     = obj.object_id

        def abs_url(img_spec):
            """Return absolute URL for an ImageSpecField, or None on any error."""
            try:
                url = img_spec.url
                return request.build_absolute_uri(url) if request else url
            except Exception:
                return None

        def primary_card(images_qs):
            img = images_qs.filter(is_primary=True).first() or images_qs.first()
            if not img:
                return None
            # ImageSpecField descriptors can raise at access time (imagekit bug with
            # format=builtin), so wrap each spec access individually.
            for spec_name in ("card", "thumbnail", "image"):
                try:
                    spec = getattr(img, spec_name, None)
                    if spec is not None:
                        return abs_url(spec)
                except Exception:
                    continue
            return None

        def translations_dict(item):
            """Build {lang: {title: ...}} from a TranslatableModel."""
            result = {}
            for lang in ("ar", "en"):
                title = item.safe_translation_getter("title", language_code=lang)
                if title:
                    result[lang] = {"title": title}
            return result or None

        try:
            # ── Properties ────────────────────────────────────────────────────
            if ct == "property":
                from apps.properties.models import PropertyListing
                item = PropertyListing.objects.select_related("location").prefetch_related("images").get(pk=oid)
                return {
                    "title":             item.title,
                    "translations":      None,
                    "price":             float(item.price) if item.price is not None else None,
                    "hide_price":        item.hide_price,
                    "currency":          item.currency,
                    "primary_image_url": primary_card(item.images),
                    "location_name":     item.location.safe_translation_getter("name", any_language=True) if item.location else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       item.is_promoted,
                    "created_at":        item.created_at.isoformat(),
                }

            # ── Vehicles ──────────────────────────────────────────────────────
            if ct == "vehicle":
                from apps.vehicles.models import VehicleListing
                item = VehicleListing.objects.select_related("location").prefetch_related("images").get(pk=oid)
                return {
                    "title":             item.title,
                    "translations":      None,
                    "price":             float(item.price) if item.price is not None else None,
                    "hide_price":        item.hide_price,
                    "currency":          item.currency,
                    "primary_image_url": primary_card(item.images),
                    "location_name":     item.location.safe_translation_getter("name", any_language=True) if item.location else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       item.is_promoted,
                    "created_at":        item.created_at.isoformat(),
                }

            # ── Classifieds ───────────────────────────────────────────────────
            if ct == "classified":
                from apps.classifieds.models import ClassifiedListing
                item = ClassifiedListing.objects.select_related("location").prefetch_related("images").get(pk=oid)
                return {
                    "title":             None,
                    "translations":      translations_dict(item),
                    "price":             float(item.price) if item.price is not None else None,
                    "hide_price":        item.hide_price,
                    "currency":          item.currency,
                    "primary_image_url": primary_card(item.images),
                    "location_name":     item.location.safe_translation_getter("name", any_language=True) if item.location else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       item.is_promoted,
                    "created_at":        item.created_at.isoformat(),
                }

            # ── Services ──────────────────────────────────────────────────────
            if ct == "service":
                from apps.services.models import ServiceListing
                item = ServiceListing.objects.select_related("location").get(pk=oid)
                return {
                    "title":             None,
                    "translations":      translations_dict(item),
                    "price":             float(item.price) if item.price is not None else None,
                    "hide_price":        False,
                    "currency":          item.currency,
                    "primary_image_url": None,
                    "location_name":     item.location.safe_translation_getter("name", any_language=True) if item.location else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       item.is_promoted,
                    "created_at":        item.created_at.isoformat(),
                }

            # ── Jobs ──────────────────────────────────────────────────────────
            if ct == "job":
                from apps.jobs.models import JobListing
                item = JobListing.objects.select_related("location__governorate").get(pk=oid)
                return {
                    "title":             None,
                    "translations":      translations_dict(item),
                    "price":             None,
                    "hide_price":        False,
                    "currency":          "SYP",
                    "primary_image_url": None,
                    "location_name":     item.location.safe_translation_getter("name", any_language=True) if item.location else None,
                    "governorate_name":  item.location.governorate.safe_translation_getter("name", any_language=True) if item.location and item.location.governorate else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       getattr(item, "is_promoted", False),
                    "created_at":        item.created_at.isoformat(),
                }

            # ── Deals ─────────────────────────────────────────────────────────
            if ct == "deal":
                from apps.deals.models import Deal
                item = Deal.objects.select_related("merchant__location__governorate").get(pk=oid)
                merchant = item.merchant
                loc = merchant.location if merchant else None
                return {
                    "title":             None,
                    "translations":      translations_dict(item),
                    "price":             float(item.deal_price) if item.deal_price is not None else None,
                    "hide_price":        False,
                    "currency":          item.currency,
                    "primary_image_url": abs_url(item.card) if hasattr(item, "card") else None,
                    "location_name":     loc.safe_translation_getter("name", any_language=True) if loc else None,
                    "governorate_name":  loc.governorate.safe_translation_getter("name", any_language=True) if loc and loc.governorate else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       getattr(item, "is_promoted", False),
                    "created_at":        item.created_at.isoformat(),
                }

            # ── Events ────────────────────────────────────────────────────────
            if ct == "event":
                from apps.events.models import Event
                item = Event.objects.select_related("location__governorate").get(pk=oid)
                return {
                    "title":             None,
                    "translations":      translations_dict(item),
                    "price":             float(item.price) if getattr(item, "price", None) is not None else None,
                    "hide_price":        False,
                    "currency":          getattr(item, "currency", "SYP"),
                    "primary_image_url": abs_url(item.card) if hasattr(item, "card") else None,
                    "location_name":     item.location.safe_translation_getter("name", any_language=True) if getattr(item, "location", None) else None,
                    "governorate_name":  item.location.governorate.safe_translation_getter("name", any_language=True) if getattr(item, "location", None) and item.location.governorate else None,
                    "is_featured":       item.is_featured,
                    "is_promoted":       getattr(item, "is_promoted", False),
                    "created_at":        item.created_at.isoformat(),
                }

        except Exception:
            # Listing was deleted or unavailable — return stub so the fav entry
            # is still shown (user can remove it manually).
            return None


class PaymentIntentSerializer(serializers.ModelSerializer):
    class Meta:
        model  = PaymentIntent
        fields = ["id","amount","currency","stripe_pi_id","status","created_at"]
        read_only_fields = ["id","stripe_pi_id","status","created_at"]
