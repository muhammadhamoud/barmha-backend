from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Conversation, Message

User = get_user_model()


class ParticipantSerializer(serializers.ModelSerializer):
    avatar_thumbnail = serializers.SerializerMethodField()

    class Meta:
        model  = User
        fields = ["id", "username", "first_name", "last_name", "avatar_thumbnail"]

    def get_avatar_thumbnail(self, obj):
        try:
            spec = obj.avatar_thumbnail
            if not spec:
                return obj.social_avatar_url or None
            url = spec.url
            request = self.context.get("request")
            return request.build_absolute_uri(url) if request else url
        except Exception:
            return obj.social_avatar_url or None


class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.IntegerField(source="sender.id", read_only=True)

    class Meta:
        model  = Message
        fields = ["id", "conversation", "sender", "body", "image", "is_read", "created_at"]
        read_only_fields = ["conversation", "sender", "is_read", "created_at"]


class LastMessageSerializer(serializers.ModelSerializer):
    sender = serializers.IntegerField(source="sender.id", read_only=True)

    class Meta:
        model  = Message
        fields = ["id", "sender", "body", "image", "is_read", "created_at"]


class ConversationSerializer(serializers.ModelSerializer):
    participants      = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    participants_data = serializers.SerializerMethodField()
    last_message      = serializers.SerializerMethodField()
    unread_count      = serializers.SerializerMethodField()

    class Meta:
        model  = Conversation
        fields = [
            "id", "participants", "participants_data",
            "listing_type", "listing_id",
            "last_message", "last_message_at",
            "unread_count", "created_at",
        ]

    def get_participants_data(self, obj):
        request = self.context.get("request")
        users = obj.participants.all()
        return ParticipantSerializer(users, many=True, context={"request": request}).data

    def get_last_message(self, obj):
        msg = obj.messages.order_by("-created_at").first()
        if msg:
            return LastMessageSerializer(msg, context=self.context).data
        return None

    def get_unread_count(self, obj):
        request = self.context.get("request")
        if not request:
            return 0
        return obj.messages.filter(is_read=False).exclude(sender=request.user).count()
