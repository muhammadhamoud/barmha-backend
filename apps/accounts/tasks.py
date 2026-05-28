import logging
from celery import shared_task
from django.conf import settings

logger = logging.getLogger("apps.accounts")


@shared_task
def send_otp_sms(phone, code):
    try:
        from twilio.rest import Client
        client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
        client.messages.create(
            body=f"Your barmha.com verification code is: {code}",
            from_=settings.TWILIO_PHONE_NUMBER,
            to=phone,
        )
    except Exception as e:
        logger.warning(f"SMS send failed for {phone}: {e}. Code: {code}")


@shared_task
def send_welcome_email(user_id):
    from django.core.mail import send_mail
    from apps.accounts.models import User
    try:
        user = User.objects.get(pk=user_id)
        send_mail(
            subject="Welcome to barmha.com",
            message=f"Hello {user.first_name or user.username}, welcome to barmha.com!",
            from_email="noreply@barmha.com",
            recipient_list=[user.email],
            fail_silently=True,
        )
    except Exception as e:
        logger.error(f"Welcome email failed for user {user_id}: {e}")


@shared_task
def notify_saved_search_users():
    from apps.accounts.models import SavedSearch
    from django.utils import timezone
    from datetime import timedelta
    cutoff = timezone.now() - timedelta(hours=24)
    searches = SavedSearch.objects.filter(notify=True).select_related("user")
    for search in searches:
        logger.info(f"Checking saved search {search.id} for user {search.user_id}")
