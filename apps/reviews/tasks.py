from celery import shared_task
from django.db.models import Avg, Count

MODEL_MAP = {
    "agent":      ("accounts", "RealEstateAgent"),
    "agency":     ("accounts", "RealEstateAgency"),
    "provider":   ("services", "ServiceProvider"),
    "merchant":   ("deals",    "Merchant"),
    "freelancer": ("jobs",     "FreelancerProfile"),
    "company":    ("jobs",     "CompanyProfile"),
}


@shared_task(bind=True, max_retries=3)
def update_avg_rating(self, subject_type, subject_id):
    from apps.reviews.models import Review
    from django.apps import apps

    if subject_type not in MODEL_MAP:
        return

    agg = Review.objects.filter(
        subject_type=subject_type,
        subject_id=subject_id,
        is_approved=True,
    ).aggregate(avg=Avg("rating"), count=Count("id"))

    avg   = round(agg["avg"] or 0, 2)
    count = agg["count"]

    app_label, model_name = MODEL_MAP[subject_type]
    try:
        Model  = apps.get_model(app_label, model_name)
        kwargs = {"avg_rating": avg}
        if hasattr(Model, "review_count"):
            kwargs["review_count"] = count
        Model.objects.filter(pk=subject_id).update(**kwargs)
    except Exception as exc:
        raise self.retry(exc=exc, countdown=60)
