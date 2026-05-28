from django.contrib.sitemaps import Sitemap
from .models import VehicleListing


class VehicleSitemap(Sitemap):
    changefreq = "daily"
    priority   = 0.8
    protocol   = "https"

    def items(self):
        return VehicleListing.objects.filter(is_active=True).order_by("-updated_at")

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f"/en/vehicles/{obj.pk}/"
