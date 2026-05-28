from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from .models import PropertyListing


@receiver(pre_save, sender=PropertyListing)
def detect_property_price_change(sender, instance, **kwargs):
    if not instance.pk:
        return  # new listing — no notification
    try:
        old = PropertyListing.objects.get(pk=instance.pk)
    except PropertyListing.DoesNotExist:
        return
    if old.price == instance.price:
        return

    from apps.core.price_change_utils import notify_price_change
    title_text = str(instance)
    notify_price_change(
        content_type = "property",
        listing_id   = instance.pk,
        old_price    = old.price,
        new_price    = instance.price,
        currency     = instance.currency or "SYP",
        title_text   = title_text,
        action_url   = f"/properties/{instance.pk}",
    )


@receiver(post_save, sender=PropertyListing)
def notify_area_alerts_on_property(sender, instance, created, **kwargs):
    if not created:
        return
    if not instance.is_active:
        return
    from apps.core.area_alert_utils import notify_area_alerts
    notify_area_alerts(
        section    = "properties",
        listing_id = instance.pk,
        lat        = instance.latitude,
        lng        = instance.longitude,
        title      = instance.title or "",
    )
