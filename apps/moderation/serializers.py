from rest_framework import serializers
from .models import Report, BlockedIP, BlockedUser

# Maps content_type → (app_label, ModelName, owner_field_for_values())
_LISTING_OWNER_MAP = {
    "properties":  ("apps.properties",  "PropertyListing",  "posted_by_id"),
    "vehicles":    ("apps.vehicles",    "VehicleListing",   "posted_by_id"),
    "classifieds": ("apps.classifieds", "ClassifiedListing","seller_id"),
    "jobs":        ("apps.jobs",        "JobListing",       "posted_by_id"),
    "services":    ("apps.services",    "ServiceListing",   "provider__user_id"),
}


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Report
        fields = [
            "id", "reporter", "content_type", "object_id",
            "reason", "description", "status",
            "reviewed_by", "reviewed_at", "ip_address", "created_at",
        ]
        read_only_fields = ["reporter", "status", "reviewed_by", "reviewed_at", "ip_address", "created_at"]


class AdminReportSerializer(ReportSerializer):
    """Serializer for admin list/detail — adds computed fields and allows status writes."""
    reporter_name    = serializers.SerializerMethodField()
    listing_owner_id = serializers.SerializerMethodField()

    class Meta(ReportSerializer.Meta):
        fields           = ReportSerializer.Meta.fields + ["reporter_name", "listing_owner_id"]
        # status is writable for admin via this serializer
        read_only_fields = ["reporter", "reviewed_by", "reviewed_at", "ip_address", "created_at",
                            "reporter_name", "listing_owner_id"]

    def get_reporter_name(self, obj):
        if not obj.reporter:
            return None
        return obj.reporter.get_full_name() or obj.reporter.username

    def get_listing_owner_id(self, obj):
        entry = _LISTING_OWNER_MAP.get(obj.content_type)
        if not entry:
            return None
        app_label, model_name, owner_field = entry
        from django.apps import apps as django_apps
        try:
            Model = django_apps.get_model(app_label, model_name)
            row = Model.objects.filter(pk=obj.object_id).values(owner_field).first()
            return row.get(owner_field) if row else None
        except Exception:
            return None


class BlockedIPSerializer(serializers.ModelSerializer):
    class Meta:
        model  = BlockedIP
        fields = ["id", "ip_address", "reason", "note", "is_permanent", "expires_at", "created_at"]
        read_only_fields = ["created_at"]


class BlockedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model  = BlockedUser
        fields = ["id", "user", "reason", "note", "is_permanent", "expires_at", "created_at"]
        read_only_fields = ["created_at"]
