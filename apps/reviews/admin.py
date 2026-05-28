from django.contrib import admin
from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display  = ["reviewer", "subject_type", "subject_id", "rating", "is_approved", "is_verified", "created_at"]
    list_filter   = ["subject_type", "is_approved", "is_verified", "rating"]
    actions       = ["approve_reviews"]

    def approve_reviews(self, request, queryset):
        queryset.update(is_approved=True)
    approve_reviews.short_description = "Approve selected reviews"
