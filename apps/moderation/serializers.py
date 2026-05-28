from rest_framework import serializers
from .models import Report, BlockedIP, BlockedUser


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Report
        fields = [
            "id", "reporter", "content_type", "object_id",
            "reason", "description", "status",
            "reviewed_by", "reviewed_at", "ip_address", "created_at",
        ]
        read_only_fields = ["reporter", "status", "reviewed_by", "reviewed_at", "ip_address", "created_at"]


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
