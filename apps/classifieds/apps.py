from django.apps import AppConfig

class ClassifiedsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.classifieds"

    def ready(self):
        import apps.classifieds.signals  # noqa: F401
