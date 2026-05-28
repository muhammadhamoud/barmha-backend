from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from .models import VehicleListing


@receiver(pre_save, sender=VehicleListing)
def detect_vehicle_price_change(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old = VehicleListing.objects.get(pk=instance.pk)
    except VehicleListing.DoesNotExist:
        return
    if old.price == instance.price:
        return

    from apps.core.price_change_utils import notify_price_change
    notify_price_change(
        content_type = "vehicle",
        listing_id   = instance.pk,
        old_price    = old.price,
        new_price    = instance.price,
        currency     = instance.currency or "SYP",
        title_text   = str(instance),
        action_url   = f"/vehicles/{instance.pk}",
    )


@receiver(post_save, sender=VehicleListing)
def notify_area_alerts_on_vehicle(sender, instance, created, **kwargs):
    if not created or not instance.is_active:
        return
    if not instance.location_id:
        return
    try:
        loc = instance.location
        from apps.core.area_alert_utils import notify_area_alerts
        notify_area_alerts("vehicles", instance.pk, loc.latitude, loc.longitude, instance.title or "")
    except Exception:
        pass
