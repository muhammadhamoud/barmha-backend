from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, RealEstateAgency, RealEstateAgent, Subscription, PhoneVerification


class SubscriptionInline(admin.TabularInline):
    model = Subscription
    extra = 0


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    # Email is the primary identifier — show it first
    list_display   = ["email", "username", "user_type", "is_verified", "phone", "is_active"]
    list_filter    = ["user_type", "is_verified", "is_active"]
    search_fields  = ["email", "username", "phone", "first_name", "last_name"]
    ordering       = ["email"]

    # fieldsets: replace username-centric layout with email-centric one
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal info", {"fields": ("first_name", "last_name", "username")}),
        ("barmha", {"fields": ("user_type", "phone", "whatsapp", "avatar", "bio", "is_verified", "language")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )
    # For the "Add user" form: ask only for email + password
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "password1", "password2"),
        }),
    )
    # username is internal — keep it in the form but not required
    readonly_fields = ("username",)

    inlines = [SubscriptionInline]

    # ── Fix: 'builtin_function_or_method' has no attribute 'upper' ─────────────
    # allauth's AccountMiddleware (HEADLESS_ONLY=True) patches the request with
    # a headless context object that causes validate_password() to receive a
    # callable instead of a plain string during the admin POST.  Strip that
    # context for the duration of this view so the standard Django form pipeline
    # runs unobstructed.
    def change_password_view(self, request, id, form_url=""):
        _sentinel = object()
        # allauth ≥ 0.64 uses request.allauth; older headless builds use request._headless
        for attr in ("_headless", "allauth"):
            saved = getattr(request, attr, _sentinel)
            if saved is not _sentinel:
                try:
                    delattr(request, attr)
                except AttributeError:
                    pass
                try:
                    response = super().change_password_view(request, id, form_url)
                finally:
                    setattr(request, attr, saved)
                return response
        # No allauth attribute present — proceed normally
        return super().change_password_view(request, id, form_url)


@admin.register(RealEstateAgency)
class AgencyAdmin(admin.ModelAdmin):
    list_display  = ["name", "verified", "phone", "created_at"]
    list_filter   = ["verified"]
    search_fields = ["name"]


@admin.register(RealEstateAgent)
class AgentAdmin(admin.ModelAdmin):
    list_display  = ["user", "agency", "verified", "listings_count"]
    list_filter   = ["verified"]


@admin.register(PhoneVerification)
class PhoneVerificationAdmin(admin.ModelAdmin):
    list_display = ["user", "phone", "is_used", "attempts", "expires_at", "created_at"]
    list_filter  = ["is_used"]
