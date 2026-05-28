from django.contrib.sitemaps import Sitemap
from django.utils import timezone
from datetime import timedelta
from .models import NewsArticle


class NewsSitemap(Sitemap):
    changefreq = "hourly"
    priority   = 1.0
    protocol   = "https"

    def items(self):
        cutoff = timezone.now() - timedelta(days=2)
        return NewsArticle.objects.filter(is_published=True, published_at__gte=cutoff)

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        slug = obj.safe_translation_getter("slug", any_language=True) or str(obj.pk)
        return f"/api/v1/news/{slug}/"
