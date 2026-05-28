from django.contrib.sitemaps import Sitemap
from .models import JobListing


class JobSitemap(Sitemap):
    changefreq = "daily"
    priority   = 0.7
    protocol   = "https"

    def items(self):
        return JobListing.objects.filter(is_active=True)

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f"/en/jobs/{obj.pk}/"
