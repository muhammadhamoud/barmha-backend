from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import ServiceListing


@receiver(post_save, sender=ServiceListing)
def notify_area_alerts_on_service(sender, instance, created, **kwargs):
    if not created or not instance.is_active:
        return
    if not instance.location_id:
        return
    try:
        loc = instance.location
        title = instance.safe_translation_getter("title", any_language=True) or ""
        from apps.core.area_alert_utils import notify_area_alerts
        notify_area_alerts("services", instance.pk, loc.latitude, loc.longitude, title)
    except Exception:
        pass
