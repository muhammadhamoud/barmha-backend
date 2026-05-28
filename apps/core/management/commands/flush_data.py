"""
Management command: python manage.py flush_data

Deletes ALL data from every model EXCEPT user accounts.
Superusers and regular user accounts are preserved.

Usage:
  python manage.py flush_data                # prompts for confirmation
  python manage.py flush_data --yes          # skip confirmation prompt
  python manage.py flush_data --keep-users   # preserve all users (default behaviour)
  python manage.py flush_data --wipe-users   # also delete non-superuser accounts

What is deleted:
  - All listings  (properties, vehicles, classifieds, jobs, services)
  - All deals, merchants, deal categories
  - All events, news, and their categories / tags
  - All reviews, messages, conversations
  - All notifications, favourites, saved searches, subscriptions
  - All moderation records (reports, spam patterns, blocked IPs / users)
  - All advertisements (placements, banners)
  - Governorates and Locations
  - Vehicle makes / models, showrooms
  - Classified / job / service / news / event / deal categories
  - Real-estate agencies and agents

What is KEPT:
  - All User accounts (unless --wipe-users is passed)
  - Superuser accounts (always kept)
"""

from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Delete all data except user accounts (superusers always kept)"

    def add_arguments(self, parser):
        parser.add_argument(
            "--yes", "-y",
            action="store_true",
            help="Skip the confirmation prompt",
        )
        parser.add_argument(
            "--wipe-users",
            action="store_true",
            help="Also delete non-superuser accounts (superusers are always kept)",
        )

    def handle(self, *args, **options):
        wipe_users = options["wipe_users"]

        if not options["yes"]:
            self.stdout.write(self.style.WARNING(
                "\nThis will permanently delete ALL data from the database"
                + (" including regular user accounts" if wipe_users else " (user accounts will be kept)")
                + ".\nSuperuser accounts are never deleted.\n"
            ))
            confirm = input("Type 'yes' to continue, anything else to cancel: ").strip().lower()
            if confirm != "yes":
                self.stdout.write(self.style.ERROR("Aborted."))
                return

        self.stdout.write("Flushing data…")
        deleted = self._flush(wipe_users=wipe_users)

        for model_name, count in deleted:
            if count:
                self.stdout.write(f"  deleted {count:>6,}  {model_name}")

        if wipe_users:
            self.stdout.write(self.style.SUCCESS("✓ Flush complete — all data wiped (superusers kept)."))
        else:
            self.stdout.write(self.style.SUCCESS("✓ Flush complete — user accounts preserved."))

    # ── core flush logic ──────────────────────────────────────────────────────

    def _flush(self, wipe_users=False):
        """
        Delete every model in dependency order (children before parents).
        Returns a list of (model_label, deleted_count) tuples for reporting.
        """
        from apps.moderation.models       import Report, SpamPattern, BlockedIP, BlockedUser, UserBlock
        from apps.reviews.models          import Review
        from apps.messaging.models        import Message, Conversation
        from apps.advertisements.models   import AdBanner, AdPlacement
        from apps.events.models           import Event, EventCategory
        from apps.news.models             import NewsArticle, NewsTag, NewsCategory
        from apps.deals.models            import DealRedemption, Deal, Merchant, DealCategory
        from apps.services.models         import ServiceListing, ServiceProvider, ServiceCategory
        from apps.jobs.models             import (
            JobApplication, JobListing, CompanyProfile,
            FreelancerProfile, JobseekerProfile, JobCategory,
        )
        from apps.classifieds.models      import ClassifiedListing, ClassifiedCategory, Store
        from apps.vehicles.models         import VehicleListing, VehicleModel, VehicleMake, Showroom
        from apps.properties.models       import PropertyListing, NearbyAmenity
        from apps.accounts.models         import (
            RealEstateAgent, RealEstateAgency,
            Subscription, SavedSearch, Favourite,
        )
        from apps.core.models             import Notification, Location, Governorate

        # Ordered list of models to clear — children first so FK constraints don't fire.
        # Each entry is (ModelClass, label_for_output).
        models_to_clear = [
            # ── moderation ─────────────────────────────────────────────────
            (Report,          "Report"),
            (SpamPattern,     "SpamPattern"),
            (BlockedIP,       "BlockedIP"),
            (BlockedUser,     "BlockedUser"),
            (UserBlock,       "UserBlock"),
            # ── reviews ────────────────────────────────────────────────────
            (Review,          "Review"),
            # ── messaging ──────────────────────────────────────────────────
            (Message,         "Message"),
            (Conversation,    "Conversation"),
            # ── ads ────────────────────────────────────────────────────────
            (AdBanner,        "AdBanner"),
            (AdPlacement,     "AdPlacement"),
            # ── events ─────────────────────────────────────────────────────
            (Event,           "Event"),
            (EventCategory,   "EventCategory"),
            # ── news ───────────────────────────────────────────────────────
            (NewsArticle,     "NewsArticle"),
            (NewsTag,         "NewsTag"),
            (NewsCategory,    "NewsCategory"),
            # ── deals ──────────────────────────────────────────────────────
            (DealRedemption,  "DealRedemption"),
            (Deal,            "Deal"),
            (Merchant,        "Merchant"),
            (DealCategory,    "DealCategory"),
            # ── services ───────────────────────────────────────────────────
            (ServiceListing,  "ServiceListing"),
            (ServiceProvider, "ServiceProvider"),
            (ServiceCategory, "ServiceCategory"),
            # ── jobs ───────────────────────────────────────────────────────
            (JobApplication,  "JobApplication"),
            (JobListing,      "JobListing"),
            (CompanyProfile,  "CompanyProfile"),
            (FreelancerProfile,"FreelancerProfile"),
            (JobseekerProfile,"JobseekerProfile"),
            (JobCategory,     "JobCategory"),
            # ── classifieds ────────────────────────────────────────────────
            (ClassifiedListing,"ClassifiedListing"),
            (Store,           "Store"),
            (ClassifiedCategory,"ClassifiedCategory"),
            # ── vehicles ───────────────────────────────────────────────────
            (NearbyAmenity,   "NearbyAmenity"),
            (PropertyListing, "PropertyListing"),
            (VehicleListing,  "VehicleListing"),
            (VehicleModel,    "VehicleModel"),
            (VehicleMake,     "VehicleMake"),
            (Showroom,        "Showroom"),
            # ── accounts extras ────────────────────────────────────────────
            (Notification,    "Notification"),
            (Favourite,       "Favourite"),
            (SavedSearch,     "SavedSearch"),
            (Subscription,    "Subscription"),
            (RealEstateAgent, "RealEstateAgent"),
            (RealEstateAgency,"RealEstateAgency"),
            # ── core geo ───────────────────────────────────────────────────
            (Location,        "Location"),
            (Governorate,     "Governorate"),
        ]

        results = []
        for model, label in models_to_clear:
            try:
                count, _ = model.objects.all().delete()
                results.append((label, count))
            except Exception as exc:
                self.stdout.write(self.style.WARNING(f"  warning: could not delete {label}: {exc}"))
                results.append((label, 0))

        # ── users ─────────────────────────────────────────────────────────
        if wipe_users:
            from apps.accounts.models import User
            count, _ = User.objects.filter(is_superuser=False).delete()
            results.append(("User (non-superuser)", count))

        return results
