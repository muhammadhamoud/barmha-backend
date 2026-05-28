from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import ClassifiedCategory, Store, ClassifiedListing, ClassifiedImage


@admin.register(ClassifiedCategory)
class ClassifiedCategoryAdmin(TranslatableAdmin):
    list_display  = ["slug", "parent", "order", "is_active"]
    list_filter   = ["is_active", "parent"]


@admin.register(Store)
class StoreAdmin(TranslatableAdmin):
    list_display  = ["__str__", "user", "is_verified", "is_active"]
    list_filter   = ["is_verified", "is_active"]
    search_fields = ["translations__name"]


class ClassifiedImageInline(admin.TabularInline):
    model  = ClassifiedImage
    extra  = 1
    fields = ["image", "is_primary", "order"]


@admin.register(ClassifiedListing)
class ClassifiedListingAdmin(TranslatableAdmin):
    list_display   = ["__str__", "listing_type", "condition", "price", "currency",
                      "seller", "is_active", "is_featured", "is_preloved", "created_at"]
    list_filter    = ["listing_type", "condition", "is_active", "is_featured", "is_preloved"]
    search_fields  = ["translations__title"]
    raw_id_fields  = ["seller", "store", "category", "location"]
    inlines        = [ClassifiedImageInline]
    readonly_fields = ["views_count", "created_at", "updated_at"]
