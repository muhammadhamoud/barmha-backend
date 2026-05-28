from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Atom1Feed
from django.utils import timezone
from .models import Deal


class LatestDealsFeed(Feed):
    feed_type   = Atom1Feed
    title       = "Barmha — Latest Deals"
    link        = "/api/v1/deals/"
    description = "Latest merchant deals on Barmha"

    def items(self):
        now = timezone.now()
        return Deal.objects.filter(
            is_active=True, start_date__lte=now, end_date__gte=now
        ).order_by("-created_at")[:50]

    def item_title(self, item):
        return item.safe_translation_getter("title", any_language=True) or ""

    def item_description(self, item):
        return item.safe_translation_getter("description", any_language=True) or ""

    def item_link(self, item):
        return f"/api/v1/deals/{item.pk}/"

    def item_pubdate(self, item):
        return item.created_at
