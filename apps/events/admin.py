from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import EventCategory, Event, EventImage


@admin.register(EventCategory)
class EventCategoryAdmin(TranslatableAdmin):
    list_display = ["slug"]


class EventImageInline(admin.TabularInline):
    model  = EventImage
    extra  = 0
    fields = ["image", "order"]


@admin.register(Event)
class EventAdmin(TranslatableAdmin):
    list_display  = ["safe_title", "category", "start_date", "end_date", "is_active", "is_featured"]
    list_filter   = ["is_active", "is_featured", "price_type", "category"]
    date_hierarchy = "start_date"
    inlines       = [EventImageInline]

    def safe_title(self, obj):
        return obj.safe_translation_getter("title", any_language=True)
    safe_title.short_description = "Title"
