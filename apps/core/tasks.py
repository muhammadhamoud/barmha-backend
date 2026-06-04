import logging
import requests
from celery import shared_task
from django.conf import settings
from django.utils import timezone

logger = logging.getLogger("apps.core")


@shared_task
def expire_old_listings():
    now = timezone.now()
    total = 0
    try:
        from apps.properties.models import PropertyListing
        c = PropertyListing.objects.filter(is_active=True, expires_at__lt=now).update(is_active=False)
        total += c
    except Exception as e:
        logger.error(f"expire properties error: {e}")
    try:
        from apps.vehicles.models import VehicleListing
        c = VehicleListing.objects.filter(is_active=True, expires_at__lt=now).update(is_active=False)
        total += c
    except Exception as e:
        logger.error(f"expire vehicles error: {e}")
    try:
        from apps.classifieds.models import ClassifiedListing
        c = ClassifiedListing.objects.filter(is_active=True, expires_at__lt=now).update(is_active=False)
        total += c
    except Exception as e:
        logger.error(f"expire classifieds error: {e}")
    try:
        from apps.jobs.models import JobListing
        c = JobListing.objects.filter(is_active=True, expires_at__lt=now).update(is_active=False)
        total += c
    except Exception as e:
        logger.error(f"expire jobs error: {e}")
    try:
        from apps.deals.models import Deal
        c = Deal.objects.filter(is_active=True, end_date__lt=now.date()).update(is_active=False)
        total += c
    except Exception as e:
        logger.error(f"expire deals error: {e}")
    logger.info(f"expire_old_listings: deactivated {total} listings")
    return total


@shared_task
def ping_search_engines():
    """Notify Google and Bing that sitemap.xml has been updated."""
    from django.conf import settings as _settings
    site = getattr(_settings, "SITE_URL", "https://barmha.com").rstrip("/")
    sitemap_url = f"{site}/sitemap.xml"
    endpoints = [
        f"https://www.google.com/ping?sitemap={sitemap_url}",
        f"https://www.bing.com/ping?sitemap={sitemap_url}",
    ]
    for url in endpoints:
        try:
            requests.get(url, timeout=10)
        except Exception as e:
            logger.warning(f"sitemap ping failed for {url}: {e}")
    logger.info("Sitemap pings sent to Google and Bing")


@shared_task
def send_push_notification(user_id, title_en, title_ar, body_en, body_ar, action_url=""):
    from apps.core.models import FCMDevice, Notification
    from apps.accounts.models import User
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return

    notif = Notification(recipient=user, notif_type="system", action_url=action_url)
    notif.set_current_language("en")
    notif.title = title_en
    notif.body  = body_en
    notif.save()
    notif.set_current_language("ar")
    notif.title = title_ar
    notif.body  = body_ar
    notif.save()

    devices = FCMDevice.objects.filter(user=user, is_active=True)
    lang = getattr(user, "language", "ar")
    title = title_ar if lang == "ar" else title_en
    body  = body_ar  if lang == "ar" else body_en

    fcm_key = getattr(settings, "FCM_SERVER_KEY", "")
    fcm_project = getattr(settings, "FCM_PROJECT_ID", "")
    if not fcm_key or not fcm_project:
        logger.warning("FCM not configured — skipping push for user %s", user_id)
        return

    for device in devices:
        payload = {
            "message": {
                "token": device.token,
                "notification": {"title": title, "body": body},
                "data": {"action_url": action_url},
            }
        }
        try:
            requests.post(
                f"https://fcm.googleapis.com/v1/projects/{fcm_project}/messages:send",
                json=payload,
                headers={"Authorization": f"Bearer {fcm_key}"},
                timeout=10,
            )
        except Exception as e:
            logger.error(f"FCM push error for device {device.token}: {e}")
