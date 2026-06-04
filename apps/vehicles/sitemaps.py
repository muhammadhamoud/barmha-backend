from apps.core.sitemaps import BarmhaSitemap, _make_slug
from .models import VehicleListing


class VehicleSitemap(BarmhaSitemap):
    changefreq = "daily"
    priority   = 0.8

    def items(self):
        return VehicleListing.objects.filter(is_active=True).order_by("-updated_at")

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f"/vehicles/{_make_slug(obj.pk, obj.title)}/"
