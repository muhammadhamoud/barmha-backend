"""
python manage.py regen_thumbnails

Safe replacement for `imagekit generateimages`.
Skips rows with null/empty source images and catches per-image errors so one
bad file never aborts the whole run.
"""
from django.core.management.base import BaseCommand
from imagekit.cachefiles import ImageCacheFile


# (model_import_path, source_field, [spec_field, ...])
IMAGE_SPECS = [
    ("apps.properties.models", "PropertyImage",  "image",  ["thumbnail", "card", "detail", "og"]),
    ("apps.vehicles.models",   "VehicleImage",   "image",  ["thumbnail", "card", "detail", "og"]),
    ("apps.classifieds.models","ClassifiedImage", "image",  ["thumbnail", "card", "detail", "og"]),
    ("apps.accounts.models",   "UserProfile",    "avatar", ["avatar_thumbnail"]),
    ("apps.accounts.models",   "Agency",         "logo",   ["logo_thumbnail"]),
    ("apps.news.models",       "NewsArticle",    "image",  ["thumbnail", "card", "detail"]),
    ("apps.deals.models",      "Merchant",       "logo",   ["logo_thumbnail"]),
    ("apps.events.models",     "Event",          "image",  ["thumbnail", "card", "detail"]),
]


def _get_model(module_path, class_name):
    import importlib
    mod = importlib.import_module(module_path)
    return getattr(mod, class_name)


def _generate(obj, field_name, spec_field_name, stdout, verbosity):
    """Generate one spec variant for one object. Returns True on success."""
    try:
        source = getattr(obj, field_name, None)
        if not source or not source.name:
            return False                          # no file attached — skip silently

        spec_field = getattr(obj, spec_field_name, None)
        if spec_field is None:
            return False

        # Force generation: accessing .url on an ImageCacheFile triggers generate()
        cache_file = ImageCacheFile(spec_field.generator)
        cache_file.generate()
        if verbosity >= 2:
            stdout.write(f"  ✓ {obj.__class__.__name__} #{obj.pk} → {spec_field_name}")
        return True

    except Exception as exc:
        if verbosity >= 1:
            stdout.write(
                f"  ⚠ {obj.__class__.__name__} #{obj.pk} {spec_field_name}: {exc}"
            )
        return False


class Command(BaseCommand):
    help = "Safely regenerate imagekit thumbnails, skipping null/broken source images."

    def add_arguments(self, parser):
        parser.add_argument(
            "--model", dest="model", default=None,
            help="Limit to one model class name, e.g. --model PropertyImage",
        )

    def handle(self, *args, **options):
        verbosity = options["verbosity"]
        only_model = options.get("model")

        total_ok = total_skip = total_err = 0

        for module_path, class_name, source_field, spec_fields in IMAGE_SPECS:
            if only_model and class_name != only_model:
                continue

            try:
                Model = _get_model(module_path, class_name)
            except Exception as exc:
                self.stdout.write(f"Could not import {class_name}: {exc}")
                continue

            qs = Model.objects.exclude(**{f"{source_field}__isnull": True}) \
                              .exclude(**{f"{source_field}__exact": ""})
            count = qs.count()
            self.stdout.write(f"{class_name}: {count} rows with images")

            for obj in qs.iterator(chunk_size=200):
                for spec_field_name in spec_fields:
                    ok = _generate(obj, source_field, spec_field_name,
                                   self.stdout, verbosity)
                    if ok:
                        total_ok += 1
                    else:
                        total_skip += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"\nDone — generated: {total_ok}, skipped: {total_skip}, errors: {total_err}"
            )
        )
