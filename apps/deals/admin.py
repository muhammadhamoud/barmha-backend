from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import DealCategory, Merchant, Deal, DealRedemption


@admin.register(DealCategory)
class DealCategoryAdmin(TranslatableAdmin):
    list_display = ["slug", "order"]
    ordering     = ["order"]


class DealInline(admin.TabularInline):
    model           = Deal
    extra           = 0
    fields          = ["deal_type", "is_active", "is_deal_of_day"]


class DealRedemptionInline(admin.TabularInline):
    model           = DealRedemption
    extra           = 0
    readonly_fields = ["user", "code", "redeemed_at"]


@admin.register(Merchant)
class MerchantAdmin(TranslatableAdmin):
    list_display = ["safe_name", "category", "is_verified", "is_featured", "avg_rating"]
    list_filter  = ["is_verified", "is_featured", "category"]
    inlines      = [DealInline]

    def safe_name(self, obj):
        return obj.safe_translation_getter("name", any_language=True)
    safe_name.short_description = "Name"


@admin.register(Deal)
class DealAdmin(TranslatableAdmin):
    list_display = ["safe_title", "merchant", "deal_type", "is_active", "is_deal_of_day", "redemptions_count"]
    list_filter  = ["is_active", "is_deal_of_day", "is_featured", "deal_type"]
    inlines      = [DealRedemptionInline]

    def safe_title(self, obj):
        return obj.safe_translation_getter("title", any_language=True)
    safe_title.short_description = "Title"
