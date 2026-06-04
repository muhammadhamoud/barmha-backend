from django.contrib.sitemaps import Sitemap
from django.conf import settings
from django.utils.text import slugify


def _make_slug(pk, title):
    """Return '{pk}-{unicode-slug}' or just '{pk}' when title produces nothing."""
    s = slugify(title or '', allow_unicode=True)[:70]
    return f"{pk}-{s}" if s else str(pk)


class BarmhaSitemap(Sitemap):
    """Base sitemap that always uses SITE_DOMAIN from settings."""
    protocol = "https"

    def get_domain(self, site=None):
        return getattr(settings, 'SITE_DOMAIN', 'barmha.com')
