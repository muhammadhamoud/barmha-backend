from django.contrib import admin
from .models import Governorate, Location, PrayerTime, SiteSettings, ContactMessage, Notification, FCMDevice


@admin.register(Governorate)
class GovernorateAdmin(admin.ModelAdmin):
    list_display = ["slug", "is_active", "order"]
    list_editable = ["order", "is_active"]


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ["__str__", "governorate", "is_popular"]
    list_filter  = ["governorate", "is_popular"]
    search_fields = ["translations__city", "translations__area"]


@admin.register(PrayerTime)
class PrayerTimeAdmin(admin.ModelAdmin):
    list_display = ["governorate", "date", "fajr", "dhuhr", "maghrib"]
    list_filter  = ["governorate"]


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ["key", "updated_at"]


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "subject", "is_read", "created_at"]
    list_filter  = ["is_read"]
    readonly_fields = ["created_at"]


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ["recipient", "notif_type", "is_read", "created_at"]
    list_filter  = ["notif_type", "is_read"]


@admin.register(FCMDevice)
class FCMDeviceAdmin(admin.ModelAdmin):
    list_display = ["user", "platform", "is_active", "created_at"]
    list_filter  = ["platform", "is_active"]
