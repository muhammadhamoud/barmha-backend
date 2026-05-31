"""
Management command: python manage.py load_vehicles

Flushes VehicleMake + VehicleModel tables then reloads from the canonical
fixtures.  VehicleListings that FK to a make/model are preserved — their
FK is set to NULL during the cascade (SET_NULL in the model) before the
flush, then the fixtures restore the same PKs so existing listings can be
re-pointed if needed.

Usage:
  python manage.py load_vehicles               # flush + reload
  python manage.py load_vehicles --no-flush    # load only (idempotent on PKs)
"""
from pathlib import Path

from django.core.management import call_command
from django.core.management.base import BaseCommand

# Absolute paths so loaddata can find the files regardless of cwd
_APPS_DIR = Path(__file__).resolve().parents[3]  # backend/apps/

FIXTURES = [
    str(_APPS_DIR / "vehicles" / "fixtures" / "makes.json"),
    str(_APPS_DIR / "vehicles" / "fixtures" / "models.json"),
]


class Command(BaseCommand):
    help = "Flush vehicle make/model tables and reload from fixtures"

    def add_arguments(self, parser):
        parser.add_argument(
            "--no-flush",
            action="store_true",
            help="Skip flushing — useful to add missing rows without wiping existing data",
        )

    def handle(self, *args, **options):
        if not options["no_flush"]:
            self._flush()

        self.stdout.write("Loading vehicle fixtures…")
        for fixture_path in FIXTURES:
            self.stdout.write(f"  → {fixture_path}")
            call_command("loaddata", fixture_path, verbosity=0)

        from apps.vehicles.models import VehicleMake, VehicleModel
        makes  = VehicleMake.objects.count()
        models = VehicleModel.objects.count()
        self.stdout.write(self.style.SUCCESS(
            f"Done — {makes} makes, {models} models loaded."
        ))

    def _flush(self):
        from apps.vehicles.models import VehicleMake, VehicleModel

        self.stdout.write("Flushing vehicle makes and models…")

        model_count, _ = VehicleModel.objects.all().delete()
        self.stdout.write(f"  deleted {model_count} VehicleModel rows")

        make_count, _ = VehicleMake.objects.all().delete()
        self.stdout.write(f"  deleted {make_count} VehicleMake rows")
