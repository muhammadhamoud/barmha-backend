from django.contrib.sitemaps import Sitemap
from .models import PropertyListing


class PropertySitemap(Sitemap):
    changefreq = "daily"
    priority   = 0.8
    protocol   = "https"

    def items(self):
        return PropertyListing.objects.filter(is_active=True).order_by("-updated_at")

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f"/en/properties/{obj.pk}/"
