import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.utils import timezone


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.conversation_id = self.scope["url_route"]["kwargs"]["conversation_id"]
        self.group_name      = f"chat_{self.conversation_id}"
        user                 = self.scope.get("user")

        if not user or not user.is_authenticated:
            await self.close()
            return

        if not await self.is_participant(user, self.conversation_id):
            await self.close()
            return

        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        if hasattr(self, "group_name"):
            await self.channel_layer.group_discard(self.group_name, self.channel_name)

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
        except (json.JSONDecodeError, ValueError):
            return

        msg_type = data.get("type", "message")
        user     = self.scope["user"]

        if msg_type == "typing":
            # Broadcast typing indicator to group (excluding sender)
            await self.channel_layer.group_send(
                self.group_name,
                {"type": "chat_typing", "user_id": user.pk},
            )
            return

        if msg_type == "read_receipt":
            message_id = data.get("message_id")
            if message_id:
                await self.mark_message_read(message_id, user)
                await self.channel_layer.group_send(
                    self.group_name,
                    {"type": "chat_read_receipt", "message_id": message_id, "reader_id": user.pk},
                )
            return

        # Default: text message
        body = data.get("body", "").strip()
        if not body:
            return

        msg = await self.save_message(user, self.conversation_id, body)
        await self.channel_layer.group_send(
            self.group_name,
            {
                "type":       "chat_message",
                "message_id": msg.pk,
                "sender_id":  user.pk,
                "body":       body,
                "created_at": msg.created_at.isoformat(),
                "is_read":    False,
            },
        )

    # ── Group event handlers ──────────────────────────────────────────────────

    async def chat_message(self, event):
        """Wrap outgoing message in the type-envelope the frontend expects."""
        await self.send(text_data=json.dumps({
            "type": "message",
            "message": {
                "id":           event["message_id"],
                "conversation": int(self.conversation_id),
                "sender":       event["sender_id"],
                "body":         event["body"],
                "image":        None,
                "created_at":   event["created_at"],
                "is_read":      event.get("is_read", False),
            },
        }))

    async def chat_read_receipt(self, event):
        await self.send(text_data=json.dumps({
            "type":       "read_receipt",
            "message_id": event["message_id"],
        }))

    async def chat_typing(self, event):
        await self.send(text_data=json.dumps({
            "type":    "typing",
            "user_id": event["user_id"],
        }))

    # ── DB helpers ────────────────────────────────────────────────────────────

    @database_sync_to_async
    def is_participant(self, user, conversation_id):
        from apps.messaging.models import Conversation
        return Conversation.objects.filter(pk=conversation_id, participants=user).exists()

    @database_sync_to_async
    def save_message(self, user, conversation_id, body):
        from apps.messaging.models import Conversation, Message
        conv = Conversation.objects.get(pk=conversation_id)
        msg  = Message.objects.create(conversation=conv, sender=user, body=body)
        Conversation.objects.filter(pk=conversation_id).update(
            last_message=body[:200],
            last_message_at=timezone.now(),
        )
        return msg

    @database_sync_to_async
    def mark_message_read(self, message_id, user):
        from apps.messaging.models import Message
        Message.objects.filter(
            pk=message_id,
            conversation__participants=user,
        ).exclude(sender=user).update(is_read=True)
