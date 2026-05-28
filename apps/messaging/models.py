from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import Transpose, ResizeToFit
from apps.core.validators import validate_image_size, validate_image_type


class Conversation(models.Model):
    participants    = models.ManyToManyField("accounts.User", related_name="conversations")
    listing_type    = models.CharField(max_length=30, blank=True)
    listing_id      = models.PositiveIntegerField(null=True, blank=True)
    last_message    = models.TextField(blank=True)
    last_message_at = models.DateTimeField(null=True, blank=True)
    created_at      = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-last_message_at"]

    def __str__(self):
        return f"Conversation #{self.pk}"


class Message(models.Model):
    conversation           = models.ForeignKey(Conversation, on_delete=models.CASCADE, related_name="messages")
    sender                 = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="sent_messages")
    body                   = models.TextField(blank=True)
    image                  = ProcessedImageField(
        upload_to="messaging/images/",
        processors=[Transpose(), ResizeToFit(1024, 768)],
        format="WEBP", options={"quality": 85},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    is_read                = models.BooleanField(default=False)
    is_deleted_by_sender   = models.BooleanField(default=False)
    is_deleted_by_receiver = models.BooleanField(default=False)
    created_at             = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"Message #{self.pk} in Conversation #{self.conversation_id}"
