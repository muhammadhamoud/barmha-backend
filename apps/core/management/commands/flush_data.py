"""
Management command: python manage.py flush_data

Deletes data from selected models. Users and categories are always preserved
unless explicitly requested.

Usage:
  python manage.py flush_data --all                         # flush all listings + related data
  python manage.py flush_data --models properties vehicles  # flush specific models only
  python manage.py flush_data --all --wipe-users            # also delete non-superuser accounts
  python manage.py flush_data --all --yes                   # skip confirmation prompt

Available model keys:
  properties   vehicles   classifieds   jobs   services
  deals        events     news          ads    moderation
  messaging    reviews    notifications favourites
  geo          agencies   users

Categories and superuser accounts are always preserved.
"""

from django.core.management.base import BaseCommand

# ── Registry: key → (label, importer) ────────────────────────────────────────
# Each entry returns an ordered list of (ModelClass, label) ready to delete.
# Children must come before parents within each group.

def _models_properties():
    from apps.properties.models import PropertyListing, NearbyAmenity
    return [(NearbyAmenity, "NearbyAmenity"), (PropertyListing, "PropertyListing")]

def _models_vehicles():
    from apps.vehicles.models import VehicleListing, VehicleModel, VehicleMake, Showroom
    return [
        (VehicleListing, "VehicleListing"),
        (VehicleModel,   "VehicleModel"),
        (VehicleMake,    "VehicleMake"),
        (Showroom,       "Showroom"),
    ]

def _models_classifieds():
    from apps.classifieds.models import ClassifiedListing, Store
    return [(ClassifiedListing, "ClassifiedListing"), (Store, "Store")]

def _models_jobs():
    from apps.jobs.models import JobApplication, JobListing, CompanyProfile, FreelancerProfile, JobseekerProfile
    return [
        (JobApplication,    "JobApplication"),
        (JobListing,        "JobListing"),
        (CompanyProfile,    "CompanyProfile"),
        (FreelancerProfile, "FreelancerProfile"),
        (JobseekerProfile,  "JobseekerProfile"),
    ]

def _models_services():
    from apps.services.models import ServiceListing, ServiceProvider
    return [(ServiceListing, "ServiceListing"), (ServiceProvider, "ServiceProvider")]

def _models_deals():
    from apps.deals.models import DealRedemption, Deal, Merchant
    return [(DealRedemption, "DealRedemption"), (Deal, "Deal"), (Merchant, "Merchant")]

def _models_events():
    from apps.events.models import Event
    return [(Event, "Event")]

def _models_news():
    from apps.news.models import NewsArticle, NewsTag
    return [(NewsArticle, "NewsArticle"), (NewsTag, "NewsTag")]

def _models_ads():
    from apps.advertisements.models import AdBanner, AdPlacement
    return [(AdBanner, "AdBanner"), (AdPlacement, "AdPlacement")]

def _models_moderation():
    from apps.moderation.models import Report, SpamPattern, BlockedIP, BlockedUser, UserBlock
    return [
        (Report,       "Report"),
        (SpamPattern,  "SpamPattern"),
        (BlockedIP,    "BlockedIP"),
        (BlockedUser,  "BlockedUser"),
        (UserBlock,    "UserBlock"),
    ]

def _models_messaging():
    from apps.messaging.models import Message, Conversation
    return [(Message, "Message"), (Conversation, "Conversation")]

def _models_reviews():
    from apps.reviews.models import Review
    return [(Review, "Review")]

def _models_notifications():
    from apps.core.models import Notification
    return [(Notification, "Notification")]

def _models_favourites():
    from apps.accounts.models import Favourite, SavedSearch, Subscription
    return [(Favourite, "Favourite"), (SavedSearch, "SavedSearch"), (Subscription, "Subscription")]

def _models_geo():
    from apps.core.models import Location, Governorate
    return [(Location, "Location"), (Governorate, "Governorate")]

def _models_agencies():
    from apps.accounts.models import RealEstateAgent, RealEstateAgency
    return [(RealEstateAgent, "RealEstateAgent"), (RealEstateAgency, "RealEstateAgency")]

def _models_users():
    from apps.accounts.models import User
    return [(User, "User (non-superuser)")]


MODEL_REGISTRY = {
    "properties":    _models_properties,
    "vehicles":      _models_vehicles,
    "classifieds":   _models_classifieds,
    "jobs":          _models_jobs,
    "services":      _models_services,
    "deals":         _models_deals,
    "events":        _models_events,
    "news":          _models_news,
    "ads":           _models_ads,
    "moderation":    _models_moderation,
    "messaging":     _models_messaging,
    "reviews":       _models_reviews,
    "notifications": _models_notifications,
    "favourites":    _models_favourites,
    "geo":           _models_geo,
    "agencies":      _models_agencies,
    "users":         _models_users,
}

# Keys included in --all (excludes users and categories which are always kept)
ALL_KEYS = [
    "moderation", "reviews", "messaging", "ads",
    "events", "news", "deals", "services",
    "jobs", "classifieds", "vehicles", "properties",
    "notifications", "favourites", "agencies", "geo",
]


class Command(BaseCommand):
    help = "Flush data by model group. Users and categories are always preserved."

    def add_arguments(self, parser):
        parser.add_argument(
            "--all",
            action="store_true",
            help="Flush all groups (listings, geo, etc.) — excludes users and categories",
        )
        parser.add_argument(
            "--models",
            nargs="+",
            choices=list(MODEL_REGISTRY.keys()),
            metavar="MODEL",
            help=(
                "One or more model groups to flush: "
                + ", ".join(MODEL_REGISTRY.keys())
            ),
        )
        parser.add_argument(
            "--wipe-users",
            action="store_true",
            help="Also delete non-superuser accounts (superusers are always kept)",
        )
        parser.add_argument(
            "--yes", "-y",
            action="store_true",
            help="Skip the confirmation prompt",
        )

    def handle(self, *args, **options):
        flush_all  = options["all"]
        models_arg = options["models"] or []
        wipe_users = options["wipe_users"]

        if not flush_all and not models_arg and not wipe_users:
            self.stdout.write(self.style.ERROR(
                "Specify --all, --models <key> [...], or --wipe-users.\n"
                "Available keys: " + ", ".join(MODEL_REGISTRY.keys())
            ))
            return

        keys = list(ALL_KEYS) if flush_all else []
        for k in models_arg:
            if k not in keys:
                keys.append(k)
        if wipe_users and "users" not in keys:
            keys.append("users")

        if not options["yes"]:
            self.stdout.write(self.style.WARNING(
                f"\nAbout to flush: {', '.join(keys)}\n"
                "Superuser accounts and categories are never deleted.\n"
            ))
            confirm = input("Type 'yes' to continue, anything else to cancel: ").strip().lower()
            if confirm != "yes":
                self.stdout.write(self.style.ERROR("Aborted."))
                return

        self.stdout.write(f"Flushing: {', '.join(keys)} …")
        results = self._flush(keys, wipe_users)

        for label, count in results:
            if count:
                self.stdout.write(f"  deleted {count:>6,}  {label}")

        self.stdout.write(self.style.SUCCESS("✓ Flush complete."))

    def _flush(self, keys: list[str], wipe_users: bool) -> list[tuple]:
        # Disconnect review signals so bulk deletes don't spam Celery warnings.
        from django.db.models.signals import post_save, post_delete
        try:
            from apps.reviews.signals import on_review_save, on_review_delete
            from apps.reviews.models import Review
            post_save.disconnect(on_review_save, sender=Review)
            post_delete.disconnect(on_review_delete, sender=Review)
            _review_signals_disconnected = True
        except Exception:
            _review_signals_disconnected = False

        results = []
        try:
            for key in keys:
                loader = MODEL_REGISTRY.get(key)
                if not loader:
                    continue
                for model, label in loader():
                    try:
                        if key == "users":
                            count, _ = model.objects.filter(is_superuser=False).delete()
                        else:
                            count, _ = model.objects.all().delete()
                        results.append((label, count))
                    except Exception as exc:
                        self.stdout.write(self.style.WARNING(f"  warning: could not delete {label}: {exc}"))
                        results.append((label, 0))
        finally:
            if _review_signals_disconnected:
                post_save.connect(on_review_save, sender=Review)
                post_delete.connect(on_review_delete, sender=Review)

        return results
