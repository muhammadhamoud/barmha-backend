from django.contrib import admin
from django.utils import timezone
from .models import Report, SpamPattern, SpamLog, BlockedIP, BlockedUser, UserBlock


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display  = ["pk", "content_type", "object_id", "reason", "status", "reporter", "created_at"]
    list_filter   = ["status", "content_type", "reason"]
    actions       = ["mark_reviewed"]

    def mark_reviewed(self, request, queryset):
        queryset.update(status="reviewed", reviewed_by=request.user, reviewed_at=timezone.now())
    mark_reviewed.short_description = "Mark as reviewed"


@admin.register(SpamPattern)
class SpamPatternAdmin(admin.ModelAdmin):
    list_display = ["pattern", "pattern_type", "action", "is_active", "created_at"]
    list_filter  = ["pattern_type", "action", "is_active"]


@admin.register(SpamLog)
class SpamLogAdmin(admin.ModelAdmin):
    list_display    = ["pattern", "content_type", "object_id", "matched_text", "ip_address", "created_at"]
    readonly_fields = ["pattern", "content_type", "object_id", "matched_text", "ip_address", "user", "created_at"]


@admin.register(BlockedIP)
class BlockedIPAdmin(admin.ModelAdmin):
    list_display = ["ip_address", "reason", "is_permanent", "expires_at", "blocked_by", "created_at"]
    actions      = ["unblock"]

    def unblock(self, request, queryset):
        queryset.delete()
    unblock.short_description = "Unblock selected IPs"


@admin.register(BlockedUser)
class BlockedUserAdmin(admin.ModelAdmin):
    list_display = ["user", "reason", "is_permanent", "expires_at", "blocked_by", "created_at"]
    actions      = ["unblock"]

    def unblock(self, request, queryset):
        queryset.delete()
    unblock.short_description = "Unblock selected users"
