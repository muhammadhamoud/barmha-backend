from django.contrib import admin
from .models import PropertyListing, PropertyImage, NearbyAmenity, EducationInstitution


class PropertyImageInline(admin.TabularInline):
    model  = PropertyImage
    extra  = 1
    fields = ["image", "is_primary", "order"]


class NearbyAmenityInline(admin.TabularInline):
    model  = NearbyAmenity
    extra  = 0
    fields = ["amenity_type", "name", "distance_m"]


@admin.register(PropertyListing)
class PropertyListingAdmin(admin.ModelAdmin):
    list_display    = ["title", "listing_intent", "purpose", "category", "property_type", "price", "currency",
                       "location", "is_active", "is_featured", "is_promoted", "created_at"]
    list_filter     = ["listing_intent", "purpose", "category", "is_active", "is_featured", "is_promoted", "currency"]
    search_fields   = ["title", "description", "reference_code"]
    raw_id_fields   = ["posted_by", "agency", "agent", "location"]
    inlines         = [PropertyImageInline, NearbyAmenityInline]
    readonly_fields = ["views_count", "created_at", "updated_at"]
    actions         = ["mark_featured", "unmark_featured"]

    def mark_featured(self, request, queryset):
        queryset.update(is_featured=True)
    mark_featured.short_description = "Mark as featured"

    def unmark_featured(self, request, queryset):
        queryset.update(is_featured=False)
    unmark_featured.short_description = "Remove from featured"


@admin.register(EducationInstitution)
class EducationInstitutionAdmin(admin.ModelAdmin):
    list_display  = ["name", "inst_type", "location", "is_featured", "created_at"]
    list_filter   = ["inst_type", "is_featured"]
    search_fields = ["name"]
