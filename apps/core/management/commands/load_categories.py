"""
Management command: python manage.py load_categories

Flushes all category models then loads the canonical fixtures for every app.
Safe to run multiple times — flush ensures a clean slate with stable PKs.

Usage:
  python manage.py load_categories
  python manage.py load_categories --no-flush   # skip flush, just load
"""
from pathlib import Path

from django.core.management import call_command
from django.core.management.base import BaseCommand

_APPS_DIR = Path(__file__).resolve().parents[3]  # backend/apps/

FIXTURES = [
    str(_APPS_DIR / "classifieds" / "fixtures" / "categories.json"),
    str(_APPS_DIR / "jobs"        / "fixtures" / "categories.json"),
    str(_APPS_DIR / "services"    / "fixtures" / "categories.json"),
    str(_APPS_DIR / "deals"       / "fixtures" / "categories.json"),
    str(_APPS_DIR / "events"      / "fixtures" / "categories.json"),
    str(_APPS_DIR / "news"        / "fixtures" / "categories.json"),
]


class Command(BaseCommand):
    help = "Flush category tables and reload them from fixtures"

    def add_arguments(self, parser):
        parser.add_argument(
            "--no-flush",
            action="store_true",
            help="Skip flushing — useful when you only want to add missing rows",
        )

    def handle(self, *args, **options):
        if not options["no_flush"]:
            self._flush()

        self.stdout.write("Loading category fixtures…")
        for fixture_path in FIXTURES:
            self.stdout.write(f"  → {fixture_path}")
            call_command("loaddata", fixture_path, verbosity=0)

        self.stdout.write(self.style.SUCCESS("All categories loaded successfully."))

    def _flush(self):
        from apps.classifieds.models import ClassifiedCategory
        from apps.jobs.models import JobCategory
        from apps.services.models import ServiceCategory
        from apps.deals.models import DealCategory
        from apps.events.models import EventCategory
        from apps.news.models import NewsCategory

        models = [
            ClassifiedCategory,
            JobCategory,
            ServiceCategory,
            DealCategory,
            EventCategory,
            NewsCategory,
        ]

        self.stdout.write("Flushing existing categories…")
        for model in models:
            count, _ = model.objects.all().delete()
            label = model.__name__
            self.stdout.write(f"  deleted {count} {label} rows")
