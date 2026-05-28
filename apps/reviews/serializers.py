from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    reviewer_name   = serializers.SerializerMethodField()
    reviewer_avatar = serializers.SerializerMethodField()

    class Meta:
        model  = Review
        fields = [
            "id", "reviewer", "reviewer_name", "reviewer_avatar",
            "subject_type", "subject_id",
            "rating", "title", "body",
            "is_verified", "is_approved",
            "created_at", "updated_at",
        ]
        read_only_fields = ["reviewer", "reviewer_name", "reviewer_avatar",
                            "is_verified", "is_approved", "created_at", "updated_at"]

    def get_reviewer_name(self, obj):
        return obj.reviewer.get_full_name() or obj.reviewer.username

    def get_reviewer_avatar(self, obj):
        try:
            profile = obj.reviewer.profile
            if profile.avatar_thumbnail:
                request = self.context.get("request")
                url = profile.avatar_thumbnail.url
                return request.build_absolute_uri(url) if request else url
        except Exception:
            pass
        return None
