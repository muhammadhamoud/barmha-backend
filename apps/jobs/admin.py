from django.contrib import admin
from parler.admin import TranslatableAdmin
from .models import JobCategory, CompanyProfile, JobListing, JobApplication, FreelancerProfile, JobseekerProfile


@admin.register(JobCategory)
class JobCategoryAdmin(TranslatableAdmin):
    list_display = ["slug", "order"]


@admin.register(CompanyProfile)
class CompanyProfileAdmin(TranslatableAdmin):
    list_display  = ["__str__", "industry", "size", "is_verified"]
    list_filter   = ["is_verified", "size"]
    search_fields = ["translations__name", "user__email"]


class JobApplicationInline(admin.TabularInline):
    model         = JobApplication
    extra         = 0
    fields        = ["applicant", "status", "created_at"]
    readonly_fields = ["applicant", "created_at"]


@admin.register(JobListing)
class JobListingAdmin(TranslatableAdmin):
    list_display    = ["__str__", "job_type", "experience", "company", "is_active", "is_featured", "applications_count", "created_at"]
    list_filter     = ["job_type", "experience", "gender", "is_active", "is_featured", "is_remote"]
    search_fields   = ["translations__title"]
    raw_id_fields   = ["posted_by", "company", "category", "location"]
    readonly_fields = ["views_count", "applications_count", "created_at", "updated_at"]
    inlines         = [JobApplicationInline]


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display  = ["applicant", "job", "status", "created_at"]
    list_filter   = ["status"]
    search_fields = ["applicant__email"]


@admin.register(FreelancerProfile)
class FreelancerProfileAdmin(TranslatableAdmin):
    list_display = ["user", "hourly_rate", "currency", "is_available", "avg_rating"]
    list_filter  = ["is_available", "currency"]


@admin.register(JobseekerProfile)
class JobseekerProfileAdmin(TranslatableAdmin):
    list_display = ["user", "experience_years", "is_open"]
    list_filter  = ["is_open"]
