from django.contrib import admin
from .models import AdPlacement, AdBanner, AdImpression, AdClick


class AdBannerInline(admin.TabularInline):
    model           = AdBanner
    extra           = 0
    fields          = ["title", "status", "start_date", "end_date", "impressions", "clicks"]
    readonly_fields = ["impressions", "clicks"]


@admin.register(AdPlacement)
class AdPlacementAdmin(admin.ModelAdmin):
    list_display = ["key", "width", "height", "max_ads"]
    inlines      = [AdBannerInline]


@admin.register(AdBanner)
class AdBannerAdmin(admin.ModelAdmin):
    list_display    = ["title", "placement", "advertiser", "status", "start_date", "end_date", "impressions", "clicks", "ctr_display"]
    list_filter     = ["status", "placement"]
    date_hierarchy  = "start_date"
    readonly_fields = ["impressions", "clicks"]

    def ctr_display(self, obj):
        return f"{obj.ctr}%"
    ctr_display.short_description = "CTR"
