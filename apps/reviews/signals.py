from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Review


@receiver(post_save, sender=Review)
def on_review_save(sender, instance, created, **kwargs):
    from apps.reviews.tasks import update_avg_rating
    update_avg_rating.delay(instance.subject_type, instance.subject_id)

    if created:
        _notify_subject_owner(instance)


@receiver(post_delete, sender=Review)
def on_review_delete(sender, instance, **kwargs):
    from apps.reviews.tasks import update_avg_rating
    update_avg_rating.delay(instance.subject_type, instance.subject_id)


def _notify_subject_owner(review: Review):
    """Send a 'review_received' notification to the owner of the reviewed entity."""
    try:
        owner = _resolve_owner(review.subject_type, review.subject_id)
        if not owner or owner.pk == review.reviewer_id:
            return
        from apps.core.models import Notification
        reviewer_name = review.reviewer.get_full_name() or review.reviewer.username
        title_ar = f"تقييم جديد من {reviewer_name}"
        title_en = f"New review from {reviewer_name}"
        body_ar = review.title or review.body[:100] or "★" * review.rating
        body_en = body_ar

        n = Notification(recipient=owner, notif_type="review_received", action_url="")
        n.save()
        n.set_current_language("ar"); n.title = title_ar; n.body = body_ar; n.save()
        n.set_current_language("en"); n.title = title_en; n.body = body_en; n.save()
    except Exception:
        pass  # never crash the request


def _resolve_owner(subject_type: str, subject_id: int):
    """Return the User who owns the reviewed entity, or None."""
    try:
        if subject_type == "agent":
            from apps.accounts.models import Agent
            return Agent.objects.get(pk=subject_id).user
        if subject_type == "agency":
            from apps.accounts.models import Agency
            return Agency.objects.get(pk=subject_id).owner
        if subject_type == "provider":
            from apps.services.models import ServiceProvider
            return ServiceProvider.objects.get(pk=subject_id).user
        if subject_type in ("showroom", "merchant"):
            from apps.vehicles.models import Showroom
            return Showroom.objects.get(pk=subject_id).owner
        if subject_type in ("store",):
            from apps.classifieds.models import Store
            return Store.objects.get(pk=subject_id).owner
        if subject_type == "company":
            from apps.jobs.models import Company
            return Company.objects.get(pk=subject_id).owner
    except Exception:
        pass
    return None
