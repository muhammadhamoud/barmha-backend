from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from .models import ClassifiedListing


@receiver(pre_save, sender=ClassifiedListing)
def detect_classified_price_change(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old = ClassifiedListing.objects.get(pk=instance.pk)
    except ClassifiedListing.DoesNotExist:
        return
    if old.price == instance.price:
        return

    from apps.core.price_change_utils import notify_price_change
    notify_price_change(
        content_type = "classified",
        listing_id   = instance.pk,
        old_price    = old.price,
        new_price    = instance.price,
        currency     = instance.currency or "SYP",
        title_text   = str(instance),
        action_url   = f"/classifieds/{instance.pk}",
    )


@receiver(post_save, sender=ClassifiedListing)
def notify_area_alerts_on_classified(sender, instance, created, **kwargs):
    if not created or not instance.is_active:
        return
    if not instance.location_id:
        return
    try:
        loc = instance.location
        title = instance.safe_translation_getter("title", any_language=True) or ""
        from apps.core.area_alert_utils import notify_area_alerts
        notify_area_alerts("classifieds", instance.pk, loc.latitude, loc.longitude, title)
    except Exception:
        pass
