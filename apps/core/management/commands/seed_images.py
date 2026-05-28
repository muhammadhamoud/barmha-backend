"""
Usage:
  python manage.py seed_images --only vehicles --path media/seed_images --clear-existing
"""

import mimetypes
import random
import uuid
from pathlib import Path

from django.conf import settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.management.base import BaseCommand


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


class Command(BaseCommand):
    help = "Seed random local images into existing vehicle listings."

    def add_arguments(self, parser):
        parser.add_argument(
            "--path",
            type=str,
            default="media/seed_images",
            help="Base folder containing image folders.",
        )
        parser.add_argument(
            "--only",
            type=str,
            choices=["vehicles"],
            default="vehicles",
        )
        parser.add_argument(
            "--images-per-listing",
            type=int,
            default=3,
        )
        parser.add_argument(
            "--clear-existing",
            action="store_true",
        )

    def handle(self, *args, **options):
        base_path = Path(options["path"])

        if not base_path.is_absolute():
            base_path = Path(settings.BASE_DIR) / base_path

        self.stdout.write(f"Using seed images from: {base_path}")

        self._seed_vehicle_images(
            base_path=base_path,
            images_per_listing=options["images_per_listing"],
            clear_existing=options["clear_existing"],
        )

        self.stdout.write(self.style.SUCCESS("✓ Vehicle image update complete."))

    def _seed_vehicle_images(self, base_path, images_per_listing, clear_existing):
        from apps.vehicles.models import VehicleListing, VehicleImage

        vehicle_images_folder = base_path / "vehicles"

        available_images = self._get_all_images(vehicle_images_folder)

        if not available_images:
            self.stdout.write(
                self.style.ERROR(
                    f"No image files found in: {vehicle_images_folder}"
                )
            )
            return

        self.stdout.write(
            self.style.SUCCESS(
                f"Found {len(available_images)} image file(s) in vehicles folder."
            )
        )

        listings = VehicleListing.objects.all()
        total = listings.count()

        updated = 0
        failed = 0

        for listing in listings.iterator():
            try:
                if clear_existing:
                    self._delete_existing_vehicle_images(listing)

                existing_count = listing.images.count()

                if existing_count >= images_per_listing:
                    continue

                needed = images_per_listing - existing_count

                selected_images = random.choices(
                    available_images,
                    k=needed,
                )

                for index, image_path in enumerate(selected_images):
                    vehicle_image = VehicleImage(
                        listing=listing,
                        is_primary=(existing_count == 0 and index == 0),
                        order=existing_count + index,
                    )

                    self._save_random_image_to_field(
                        obj=vehicle_image,
                        field_name="image",
                        image_path=image_path,
                    )

                self._ensure_primary_image(listing)
                updated += 1

            except Exception as exc:
                failed += 1
                self.stdout.write(
                    self.style.WARNING(
                        f"Failed listing ID {listing.pk}: {exc}"
                    )
                )

        self.stdout.write(
            self.style.SUCCESS(
                f"vehicles: updated {updated}/{total} listing(s). Failed: {failed}."
            )
        )

    def _get_all_images(self, folder_path):
        folder_path = Path(folder_path)

        if not folder_path.exists():
            return []

        return [
            path
            for path in folder_path.rglob("*")
            if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
        ]

    def _save_random_image_to_field(self, obj, field_name, image_path):
        image_path = Path(image_path)

        extension = image_path.suffix.lower()

        content_type, _ = mimetypes.guess_type(str(image_path))

        if not content_type:
            if extension in [".jpg", ".jpeg"]:
                content_type = "image/jpeg"
            elif extension == ".png":
                content_type = "image/png"
            elif extension == ".webp":
                content_type = "image/webp"
            else:
                content_type = "application/octet-stream"

        unique_name = f"{uuid.uuid4().hex}{extension}"

        with image_path.open("rb") as file:
            uploaded_file = SimpleUploadedFile(
                name=unique_name,
                content=file.read(),
                content_type=content_type,
            )

        image_field = getattr(obj, field_name)
        image_field.save(unique_name, uploaded_file, save=True)

    def _delete_existing_vehicle_images(self, listing):
        for vehicle_image in listing.images.all():
            if vehicle_image.image:
                vehicle_image.image.delete(save=False)
            vehicle_image.delete()

    def _ensure_primary_image(self, listing):
        if listing.images.filter(is_primary=True).exists():
            return

        first_image = listing.images.order_by("order").first()

        if first_image:
            first_image.is_primary = True
            first_image.save(update_fields=["is_primary"])