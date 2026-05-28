from django.contrib import admin
from .models import VehicleMake, VehicleModel, VehicleListing, VehicleImage, Showroom, RentalCompany, Garage, CarPart


class VehicleModelInline(admin.TabularInline):
    model  = VehicleModel
    extra  = 1
    fields = ["name"]


@admin.register(VehicleMake)
class VehicleMakeAdmin(admin.ModelAdmin):
    list_display = ["name", "popular"]
    list_filter  = ["popular"]
    search_fields = ["name"]
    inlines      = [VehicleModelInline]


@admin.register(VehicleModel)
class VehicleModelAdmin(admin.ModelAdmin):
    list_display  = ["name", "make"]
    list_filter   = ["make"]
    search_fields = ["name", "make__name"]


class VehicleImageInline(admin.TabularInline):
    model  = VehicleImage
    extra  = 1
    fields = ["image", "is_primary", "order"]


@admin.register(VehicleListing)
class VehicleListingAdmin(admin.ModelAdmin):
    list_display    = ["title", "listing_type", "category", "make", "model", "year",
                       "price", "currency", "condition", "is_active", "is_featured", "created_at"]
    list_filter     = ["listing_type", "category", "condition", "is_active", "is_featured", "currency"]
    search_fields   = ["title", "description"]
    raw_id_fields   = ["posted_by", "location", "make", "model", "showroom"]
    inlines         = [VehicleImageInline]
    readonly_fields = ["views_count", "created_at", "updated_at"]
    actions         = ["mark_featured", "unmark_featured"]

    def mark_featured(self, request, queryset):
        queryset.update(is_featured=True)
    mark_featured.short_description = "Mark as featured"

    def unmark_featured(self, request, queryset):
        queryset.update(is_featured=False)
    unmark_featured.short_description = "Remove from featured"


@admin.register(Showroom)
class ShowroomAdmin(admin.ModelAdmin):
    list_display  = ["name", "location", "is_verified", "is_featured"]
    list_filter   = ["is_verified", "is_featured"]
    search_fields = ["name"]


@admin.register(RentalCompany)
class RentalCompanyAdmin(admin.ModelAdmin):
    list_display  = ["name", "location", "is_featured"]
    search_fields = ["name"]


@admin.register(Garage)
class GarageAdmin(admin.ModelAdmin):
    list_display  = ["name", "location", "is_featured"]
    search_fields = ["name"]


@admin.register(CarPart)
class CarPartAdmin(admin.ModelAdmin):
    list_display  = ["title", "compatible_make", "price", "currency", "condition", "is_active"]
    list_filter   = ["condition", "is_active"]
    search_fields = ["title"]
