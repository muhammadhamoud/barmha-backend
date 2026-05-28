from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from imagekit.models import ProcessedImageField
from imagekit.processors import Transpose, ResizeToFill
from apps.core.validators import validate_image_size, validate_image_type


class JobCategory(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug  = models.CharField(max_length=50, unique=True)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.slug


class CompanyProfile(TranslatableModel):
    SIZE_CHOICES = [("1-10","1-10"),("11-50","11-50"),("51-200","51-200"),("200+","200+")]
    translations = TranslatedFields(
        name=models.CharField(max_length=200),
        description=models.TextField(blank=True),
    )
    user        = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="company_profile")
    logo        = ProcessedImageField(
        upload_to="jobs/companies/logos/",
        processors=[Transpose(), ResizeToFill(300, 300)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    industry    = models.CharField(max_length=100, blank=True)
    size        = models.CharField(max_length=10, choices=SIZE_CHOICES, blank=True)
    website     = models.URLField(blank=True)
    location    = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.safe_translation_getter("name", any_language=True) or str(self.user)


class JobListing(TranslatableModel):
    JOB_TYPE_CHOICES = [
        ("full_time","Full Time"),("part_time","Part Time"),
        ("contract","Contract"),("internship","Internship"),("freelance","Freelance"),
    ]
    EXPERIENCE_CHOICES = [("entry","Entry"),("mid","Mid"),("senior","Senior"),("manager","Manager")]
    GENDER_CHOICES     = [("any","Any"),("male","Male"),("female","Female")]
    translations = TranslatedFields(
        title=models.CharField(max_length=300),
        description=models.TextField(blank=True),
        requirements=models.TextField(blank=True),
    )
    job_type            = models.CharField(max_length=15, choices=JOB_TYPE_CHOICES)
    experience          = models.CharField(max_length=10, choices=EXPERIENCE_CHOICES, blank=True)
    gender              = models.CharField(max_length=10, choices=GENDER_CHOICES, default="any")
    nationality         = models.CharField(max_length=100, blank=True)
    min_salary          = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    max_salary          = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency            = models.CharField(max_length=5, default="SYP")
    salary_period       = models.CharField(max_length=10, default="month")
    hide_salary         = models.BooleanField(default=False)
    company             = models.ForeignKey(CompanyProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name="jobs")
    posted_by           = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="job_listings")
    category            = models.ForeignKey(JobCategory, on_delete=models.SET_NULL, null=True, blank=True)
    location            = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    is_remote           = models.BooleanField(default=False)
    is_active           = models.BooleanField(default=True)
    is_featured         = models.BooleanField(default=False)
    quick_apply         = models.BooleanField(default=False)
    views_count         = models.PositiveIntegerField(default=0)
    applications_count  = models.PositiveIntegerField(default=0)
    expires_at          = models.DateTimeField(null=True, blank=True)
    created_at          = models.DateTimeField(auto_now_add=True)
    updated_at          = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-is_featured", "-created_at"]

    def __str__(self):
        return self.safe_translation_getter("title", any_language=True) or str(self.pk)


class JobApplication(models.Model):
    STATUS_CHOICES = [
        ("pending","Pending"),("viewed","Viewed"),
        ("shortlisted","Shortlisted"),("rejected","Rejected"),
    ]
    job          = models.ForeignKey(JobListing, on_delete=models.CASCADE, related_name="applications")
    applicant    = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="job_applications")
    cover_letter = models.TextField(blank=True)
    cv           = models.FileField(upload_to="jobs/cvs/", blank=True, null=True)
    status       = models.CharField(max_length=15, choices=STATUS_CHOICES, default="pending")
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = [("job", "applicant")]
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.applicant} → {self.job}"


class FreelancerProfile(TranslatableModel):
    translations  = TranslatedFields(
        title=models.CharField(max_length=200),
        bio=models.TextField(blank=True),
    )
    user          = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="freelancer_profile")
    skills        = models.JSONField(default=list)
    hourly_rate   = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    currency      = models.CharField(max_length=5, default="SYP")
    portfolio_url = models.URLField(blank=True)
    categories    = models.ManyToManyField(JobCategory, blank=True)
    avg_rating    = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    is_available  = models.BooleanField(default=True)
    created_at    = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)


class JobseekerProfile(TranslatableModel):
    translations     = TranslatedFields(
        headline=models.CharField(max_length=200, blank=True),
    )
    user             = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="jobseeker_profile")
    cv               = models.FileField(upload_to="jobs/seeker_cvs/", blank=True, null=True)
    skills           = models.JSONField(default=list)
    experience_years = models.PositiveSmallIntegerField(default=0)
    education        = models.CharField(max_length=200, blank=True)
    desired_salary   = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency         = models.CharField(max_length=5, default="SYP")
    is_open          = models.BooleanField(default=True)
    saved_jobs       = models.ManyToManyField(JobListing, blank=True, related_name="saved_by")
    created_at       = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)
