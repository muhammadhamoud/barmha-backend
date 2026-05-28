from django.contrib.sitemaps import Sitemap
from .models import ClassifiedListing


class ClassifiedSitemap(Sitemap):
    changefreq = "daily"
    priority   = 0.6
    protocol   = "https"

    def items(self):
        return ClassifiedListing.objects.filter(is_active=True)

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f"/en/classifieds/{obj.pk}/"
