from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Atom1Feed
from .models import NewsArticle


class LatestNewsFeed(Feed):
    feed_type   = Atom1Feed
    title       = "Barmha — Latest News"
    link        = "/api/v1/news/"
    description = "Latest news articles from Barmha"

    def items(self):
        return NewsArticle.objects.filter(is_published=True).order_by("-published_at")[:50]

    def item_title(self, item):
        return item.safe_translation_getter("title", any_language=True) or ""

    def item_description(self, item):
        return item.safe_translation_getter("summary", any_language=True) or ""

    def item_link(self, item):
        slug = item.safe_translation_getter("slug", any_language=True) or str(item.pk)
        return f"/api/v1/news/{slug}/"

    def item_pubdate(self, item):
        return item.published_at or item.created_at
