from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Avg, Count

from .models import ListingRating

_MODEL_MAP = {
    "properties":  ("apps.properties",  "PropertyListing"),
    "vehicles":    ("apps.vehicles",    "VehicleListing"),
    "classifieds": ("apps.classifieds", "ClassifiedListing"),
    "jobs":        ("apps.jobs",        "JobListing"),
    "services":    ("apps.services",    "ServiceListing"),
}


def _update_listing_rating(section: str, listing_id: int):
    entry = _MODEL_MAP.get(section)
    if not entry:
        return
    from django.apps import apps
    try:
        Model = apps.get_model(*entry)
    except LookupError:
        return

    agg = ListingRating.objects.filter(
        section=section, listing_id=listing_id
    ).aggregate(avg=Avg("stars"), count=Count("id"))

    avg   = round(agg["avg"] or 0, 2)
    count = agg["count"] or 0
    Model.objects.filter(pk=listing_id).update(avg_rating=avg, ratings_count=count)


@receiver(post_save, sender=ListingRating)
def on_rating_save(sender, instance, **kwargs):
    _update_listing_rating(instance.section, instance.listing_id)


@receiver(post_delete, sender=ListingRating)
def on_rating_delete(sender, instance, **kwargs):
    _update_listing_rating(instance.section, instance.listing_id)
