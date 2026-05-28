from rest_framework import serializers
from .models import AdPlacement, AdBanner


class AdPlacementSerializer(serializers.ModelSerializer):
    class Meta:
        model  = AdPlacement
        fields = ["id", "key", "description", "width", "height", "max_ads"]


class AdBannerSerializer(serializers.ModelSerializer):
    """
    Public-facing serializer — returns absolute image URL for the banner image
    so the frontend can render it without knowing the media root.
    """
    ctr        = serializers.FloatField(read_only=True)
    image_url  = serializers.SerializerMethodField()
    placement_key = serializers.CharField(source="placement.key", read_only=True)

    class Meta:
        model  = AdBanner
        fields = [
            "id", "placement", "placement_key", "title",
            "image", "image_url", "url",
            "status", "start_date", "end_date",
            "impressions", "clicks", "ctr",
            "budget", "currency", "created_at",
        ]
        read_only_fields = ["impressions", "clicks", "created_at"]
        extra_kwargs = {
            # image upload is multipart/form-data; make it optional on PATCH
            "image": {"required": False},
        }

    def get_image_url(self, obj):
        """Return absolute URL for the banner image, or None if not set."""
        try:
            if not obj.image:
                return None
            url     = obj.image.url
            request = self.context.get("request")
            return request.build_absolute_uri(url) if request else url
        except Exception:
            return None


class AdBannerAdminSerializer(AdBannerSerializer):
    """
    Admin-only serializer — includes advertiser info and full write access.
    Admins can set status directly (normal users cannot).
    """
    advertiser_email = serializers.EmailField(source="advertiser.email", read_only=True)

    class Meta(AdBannerSerializer.Meta):
        fields = AdBannerSerializer.Meta.fields + ["advertiser", "advertiser_email"]
        read_only_fields = ["impressions", "clicks", "created_at", "advertiser"]
