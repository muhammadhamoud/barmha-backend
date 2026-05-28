from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import ServiceCategory, ServiceProvider, ServiceListing


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(TranslatableAdmin):
    list_display = ["slug", "order"]


@admin.register(ServiceProvider)
class ServiceProviderAdmin(TranslatableAdmin):
    list_display  = ["user", "is_verified", "is_featured", "avg_rating", "review_count"]
    list_filter   = ["is_verified", "is_featured"]
    search_fields = ["user__email", "user__username"]
    filter_horizontal = ["categories"]


@admin.register(ServiceListing)
class ServiceListingAdmin(TranslatableAdmin):
    list_display   = ["__str__", "provider", "category", "price", "currency", "price_type", "is_active", "is_featured"]
    list_filter    = ["price_type", "is_active", "is_featured"]
    search_fields  = ["translations__title"]
    raw_id_fields  = ["provider", "category", "location"]
    readonly_fields = ["views_count", "created_at", "updated_at"]
