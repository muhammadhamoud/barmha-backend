from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer
from parler_rest.fields import TranslatedFieldsField
from .models import (
    Governorate, Location, PrayerTime,
    SiteSettings, ContactMessage, Notification, FCMDevice, ListingShare, DrawnAreaAlert,
    ListingRating, SiteFeedback,
)


class GovernorateSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Governorate)

    class Meta:
        model  = Governorate
        fields = ["id", "slug", "translations", "is_active", "order"]


class LocationSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Location)
    governorate_slug = serializers.CharField(source="governorate.slug", read_only=True)

    class Meta:
        model  = Location
        fields = ["id", "translations", "governorate", "governorate_slug",
                  "latitude", "longitude", "is_popular"]


class PrayerTimeSerializer(serializers.ModelSerializer):
    governorate_slug = serializers.CharField(source="governorate.slug", read_only=True)

    class Meta:
        model  = PrayerTime
        fields = ["id", "governorate", "governorate_slug", "date",
                  "fajr", "sunrise", "dhuhr", "asr", "maghrib", "isha"]


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model  = SiteSettings
        fields = ["key", "value"]


class ContactMessageSerializer(serializers.ModelSerializer):
    # Honeypot: bots fill every field; real users leave this blank.
    # The field is write-only and never stored.
    website = serializers.CharField(
        required=False, allow_blank=True, write_only=True,
        help_text="Leave blank",
    )

    class Meta:
        model  = ContactMessage
        fields = ["id", "name", "email", "phone", "subject", "message", "website"]

    def validate_name(self, value):
        if len(value) > 200:
            raise serializers.ValidationError("Name is too long.")
        return value

    def validate_subject(self, value):
        if len(value) > 300:
            raise serializers.ValidationError("Subject is too long.")
        return value

    def validate_message(self, value):
        if len(value) > 5000:
            raise serializers.ValidationError("Message must be 5 000 characters or fewer.")
        return value

    def validate_website(self, value):
        # Honeypot hit — reject silently with a fake success shape
        if value:
            raise serializers.ValidationError("Invalid submission.")
        return value

    def to_internal_value(self, data):
        result = super().to_internal_value(data)
        result.pop("website", None)   # never write honeypot to the model
        return result


class NotificationSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Notification)

    class Meta:
        model  = Notification
        fields = ["id", "translations", "notif_type", "action_url", "is_read", "created_at"]
        read_only_fields = ["id", "created_at"]


class FCMDeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model  = FCMDevice
        fields = ["id", "token", "platform"]


class ListingShareSerializer(serializers.ModelSerializer):
    """Serializer for creating and reading ListingShare records."""
    sender_name   = serializers.SerializerMethodField(read_only=True)
    sender_avatar = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model  = ListingShare
        fields = ["id", "sender", "sender_name", "sender_avatar",
                  "recipient", "section", "listing_id", "note", "created_at"]
        read_only_fields = ["id", "sender", "sender_name", "sender_avatar", "created_at"]

    def get_sender_name(self, obj):
        return obj.sender.get_full_name() or obj.sender.username or obj.sender.email.split("@")[0]

    def get_sender_avatar(self, obj):
        try:
            spec = obj.sender.avatar_thumbnail
            if not spec:
                return None
            url = spec.url
            request = self.context.get("request")
            return request.build_absolute_uri(url) if request else url
        except Exception:
            try:
                url = obj.sender.avatar.url
                request = self.context.get("request")
                return request.build_absolute_uri(url) if request else url
            except Exception:
                return None


class DrawnAreaAlertSerializer(serializers.ModelSerializer):
    class Meta:
        model  = DrawnAreaAlert
        fields = ["id", "name", "polygon_wkt", "section", "is_active", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]


class ListingRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model  = ListingRating
        fields = ["id", "section", "listing_id", "stars", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_stars(self, value):
        if not (1 <= value <= 5):
            raise serializers.ValidationError("Stars must be between 1 and 5.")
        return value

    def validate(self, data):
        section    = data.get("section") or getattr(self.instance, "section", None)
        listing_id = data.get("listing_id") or getattr(self.instance, "listing_id", None)
        user       = self.context["request"].user
        qs = ListingRating.objects.filter(user=user, section=section, listing_id=listing_id)
        if self.instance:
            qs = qs.exclude(pk=self.instance.pk)
        if qs.exists():
            raise serializers.ValidationError("You have already rated this listing.")
        return data


class SiteFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model  = SiteFeedback
        fields = ["id", "stars", "text", "page", "created_at"]
        read_only_fields = ["id", "created_at"]
