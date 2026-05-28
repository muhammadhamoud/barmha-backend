from django.apps import AppConfig

class CoreConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.core"

    def ready(self):
        # Register imagekit generators so ImageSpecField specs resolve correctly
        import apps.core.images  # noqa: F401
