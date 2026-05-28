from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import NewsCategory, NewsTag, NewsArticle, NewsletterSubscriber


@admin.register(NewsCategory)
class NewsCategoryAdmin(TranslatableAdmin):
    list_display = ["slug", "order"]
    ordering     = ["order"]


@admin.register(NewsTag)
class NewsTagAdmin(TranslatableAdmin):
    list_display = ["slug"]


@admin.register(NewsArticle)
class NewsArticleAdmin(TranslatableAdmin):
    list_display      = ["safe_title", "category", "is_published", "is_featured", "is_breaking", "published_at"]
    list_filter       = ["is_published", "is_featured", "is_breaking", "category"]
    date_hierarchy    = "published_at"
    filter_horizontal = ["tags"]
    actions           = ["publish_articles", "unpublish_articles"]

    def safe_title(self, obj):
        return obj.safe_translation_getter("title", any_language=True)
    safe_title.short_description = "Title"

    def publish_articles(self, request, queryset):
        from django.utils import timezone
        queryset.filter(is_published=False).update(is_published=True, published_at=timezone.now())
    publish_articles.short_description = "Publish selected articles"

    def unpublish_articles(self, request, queryset):
        queryset.update(is_published=False)
    unpublish_articles.short_description = "Unpublish selected articles"


@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ["email", "is_active", "created_at"]
    list_filter  = ["is_active"]
