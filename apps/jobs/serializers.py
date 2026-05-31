from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField
from .models import JobCategory, CompanyProfile, JobListing, JobApplication, FreelancerProfile, JobseekerProfile

# Mapping frontend job_type values → model choices
_JOB_TYPE_MAP = {
    "fulltime":  "full_time",
    "parttime":  "part_time",
    "full_time": "full_time",
    "part_time": "part_time",
    "freelance": "freelance",
    "contract":  "contract",
    "internship":"internship",
}


class JobCreateSerializer(TranslatableModelSerializer):
    """
    Write serializer for POST /jobs/ and PATCH /jobs/<id>/.
    Normalises job_type values (fulltime→full_time, parttime→part_time).
    """
    translations = TranslatedFieldsField(shared_model=JobListing)

    class Meta:
        model  = JobListing
        fields = [
            "id",
            "translations",
            "job_type", "experience", "gender", "nationality",
            "min_salary", "max_salary", "currency", "salary_period", "hide_salary",
            "is_remote", "quick_apply",
            "category", "location",
            "is_active",
        ]
        extra_kwargs = {
            "job_type":     {"required": False},
            "experience":   {"required": False, "allow_blank": True},
            "gender":       {"required": False, "allow_blank": True},
            "nationality":  {"required": False, "allow_blank": True},
            "min_salary":   {"required": False, "allow_null": True},
            "max_salary":   {"required": False, "allow_null": True},
            "currency":     {"required": False},
            "salary_period":{"required": False, "allow_blank": True},
            "category":     {"required": False, "allow_null": True},
            "location":     {"required": False, "allow_null": True},
            "is_active":    {"required": False},
        }

    def validate_job_type(self, value):
        return _JOB_TYPE_MAP.get(value, value or "full_time")

    def validate(self, attrs):
        # Resolve governorate → location when no specific area was chosen
        from apps.core.utils import resolve_governorate_to_location
        attrs = resolve_governorate_to_location(attrs, self.initial_data)
        return attrs


class JobCategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=JobCategory)

    class Meta:
        model  = JobCategory
        fields = ["id", "translations", "slug", "order"]


class CompanyProfileSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=CompanyProfile)
    area_name    = serializers.SerializerMethodField()

    class Meta:
        model  = CompanyProfile
        fields = ["id", "translations", "logo", "industry", "size", "website",
                  "location", "area_name", "is_verified", "created_at"]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None


class JobListSerializer(TranslatableModelSerializer):
    translations     = TranslatedFieldsField(shared_model=JobListing)
    company_name     = serializers.SerializerMethodField()
    company_logo     = serializers.SerializerMethodField()
    area_name        = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()
    governorate_id   = serializers.SerializerMethodField()
    ai_summary       = serializers.SerializerMethodField()
    seller_phone     = serializers.SerializerMethodField()
    seller_whatsapp  = serializers.SerializerMethodField()

    class Meta:
        model  = JobListing
        fields = [
            "id", "translations", "job_type", "experience", "gender",
            "min_salary", "max_salary", "currency", "salary_period", "hide_salary",
            "is_remote", "is_active", "is_featured", "quick_apply", "location",
            "company_name", "company_logo", "area_name",
            "governorate_name", "governorate_id",
            "ai_summary", "seller_phone", "seller_whatsapp",
            "views_count", "applications_count", "expires_at", "created_at",
        ]

    def get_company_name(self, obj):
        if obj.company:
            return obj.company.safe_translation_getter("name", any_language=True)
        return obj.posted_by.get_full_name() or obj.posted_by.username

    def get_company_logo(self, obj):
        if obj.company and obj.company.logo:
            request = self.context.get("request")
            return request.build_absolute_uri(obj.company.logo.url) if request else obj.company.logo.url
        return None

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None

    def get_governorate_id(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.pk
        return None

    def get_governorate_name(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.safe_translation_getter("name", any_language=True)
        return None

    def get_ai_summary(self, obj):
        title   = obj.safe_translation_getter("title", any_language=True) or ""
        jtype   = (obj.job_type or "").replace("_", " ").title()
        company = self.get_company_name(obj) or ""
        area    = self.get_area_name(obj) or ""
        at_co   = f" at {company}" if company else ""
        loc     = f", {area}" if area else ""
        return f"{jtype} {title}{at_co}{loc}".strip()

    def get_seller_phone(self, obj):
        return obj.posted_by.phone or None

    def get_seller_whatsapp(self, obj):
        return obj.posted_by.whatsapp or obj.posted_by.phone or None


class JobDetailSerializer(JobListSerializer):
    company = CompanyProfileSerializer(read_only=True)

    class Meta(JobListSerializer.Meta):
        fields = JobListSerializer.Meta.fields + [
            "nationality", "company", "updated_at",
        ]


class JobApplicationSerializer(serializers.ModelSerializer):
    applicant_name = serializers.SerializerMethodField()

    class Meta:
        model  = JobApplication
        fields = ["id", "job", "applicant", "applicant_name", "cover_letter", "cv", "status", "created_at"]
        read_only_fields = ["applicant", "status"]

    def get_applicant_name(self, obj):
        return obj.applicant.get_full_name() or obj.applicant.username


class FreelancerProfileSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=FreelancerProfile)
    user_name    = serializers.SerializerMethodField()

    class Meta:
        model  = FreelancerProfile
        fields = [
            "id", "translations", "user", "user_name", "skills", "hourly_rate",
            "currency", "portfolio_url", "categories", "avg_rating", "is_available", "created_at",
        ]

    def get_user_name(self, obj):
        return obj.user.get_full_name() or obj.user.username


class JobseekerProfileSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=JobseekerProfile)
    user_name    = serializers.SerializerMethodField()

    class Meta:
        model  = JobseekerProfile
        fields = [
            "id", "translations", "user", "user_name", "skills",
            "experience_years", "education", "desired_salary", "currency", "is_open", "created_at",
        ]

    def get_user_name(self, obj):
        return obj.user.get_full_name() or obj.user.username
