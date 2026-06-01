"""
Management command: populate missing latitude/longitude for Location rows and
PropertyListing rows that were created when the step-4 map was broken in production.

Run once after deploying the static-import map fix:
    python manage.py fix_listing_coords

What it does:
  1. For every Location with null lat/lng → set to the governorate's centre.
  2. For every PropertyListing with null lat/lng that has a location → copy from location.
"""

from django.core.management.base import BaseCommand
from django.db import transaction

# Governorate centre coordinates (lat, lng) — mirrors frontend GOVERNORATE_COORDS.
GOVERNORATE_CENTERS = {
    "damascus":    (33.5102, 36.2919),
    "rif_dimashq": (33.5000, 36.5000),
    "aleppo":      (36.2021, 37.1343),
    "homs":        (34.7324, 36.7137),
    "hama":        (35.1318, 36.7520),
    "latakia":     (35.5317, 35.7911),
    "tartus":      (34.8956, 35.8866),
    "idlib":       (35.9300, 36.6341),
    "deir_ezzor":  (35.3336, 40.1408),
    "hasakah":     (36.5118, 40.7421),
    "raqqa":       (35.9497, 39.0094),
    "daraa":       (32.6189, 36.1021),
    "suwayda":     (32.7086, 36.5673),
    "quneitra":    (33.1261, 35.8243),
}


class Command(BaseCommand):
    help = "Back-fill missing lat/lng on Location and PropertyListing rows."

    def handle(self, *args, **options):
        self._fix_locations()
        self._fix_properties()

    @transaction.atomic
    def _fix_locations(self):
        from apps.core.models import Location

        qs = Location.objects.filter(
            latitude__isnull=True
        ).select_related("governorate")

        updated = 0
        for loc in qs.iterator(chunk_size=500):
            gov_slug = loc.governorate.slug if loc.governorate else None
            center = GOVERNORATE_CENTERS.get(gov_slug)
            if not center:
                continue
            loc.latitude  = center[0]
            loc.longitude = center[1]
            loc.save(update_fields=["latitude", "longitude"])
            updated += 1

        self.stdout.write(self.style.SUCCESS(
            f"Locations fixed: {updated}"
        ))

    @transaction.atomic
    def _fix_properties(self):
        from apps.properties.models import PropertyListing

        qs = PropertyListing.objects.filter(
            latitude__isnull=True,
            location__isnull=False,
            location__latitude__isnull=False,
        ).select_related("location")

        updated = 0
        for prop in qs.iterator(chunk_size=500):
            prop.latitude  = prop.location.latitude
            prop.longitude = prop.location.longitude
            prop.save(update_fields=["latitude", "longitude"])
            updated += 1

        self.stdout.write(self.style.SUCCESS(
            f"PropertyListings fixed: {updated}"
        ))
