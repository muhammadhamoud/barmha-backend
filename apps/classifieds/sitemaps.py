from apps.core.sitemaps import BarmhaSitemap, _make_slug
from .models import ClassifiedListing


class ClassifiedSitemap(BarmhaSitemap):
    changefreq = "daily"
    priority   = 0.6

    def items(self):
        return ClassifiedListing.objects.filter(is_active=True).order_by("-updated_at")

    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        title = obj.safe_translation_getter("title", any_language=True) or ""
        return f"/classifieds/{_make_slug(obj.pk, title)}/"
