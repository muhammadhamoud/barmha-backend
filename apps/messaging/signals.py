"""Create in-app Notification records when messages are sent."""
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender="messaging.Message")
def notify_on_new_message(sender, instance, created, **kwargs):
    if not created:
        return
    from apps.core.models import Notification

    # Notify every participant except the sender
    for participant in instance.conversation.participants.exclude(pk=instance.sender_id):
        title_ar = f"رسالة جديدة من {instance.sender.get_full_name() or instance.sender.username}"
        title_en = f"New message from {instance.sender.get_full_name() or instance.sender.username}"
        body_text = instance.body[:100] if instance.body else "📷 صورة"

        n = Notification(
            recipient  = participant,
            notif_type = "new_message",
            action_url = f"/messages/{instance.conversation_id}",
        )
        n.save()
        n.set_current_language("ar"); n.title = title_ar; n.body = body_text; n.save()
        n.set_current_language("en"); n.title = title_en; n.body = body_text; n.save()
