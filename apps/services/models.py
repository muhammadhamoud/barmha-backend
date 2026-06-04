from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from imagekit.models import ProcessedImageField
from imagekit.processors import Transpose, ResizeToFill
from apps.core.validators import validate_image_size, validate_image_type


class ServiceCategory(TranslatableModel):
    SLUG_CHOICES = [
        ("cleaning","Cleaning"),("maintenance","Maintenance"),("moving","Moving"),
        ("beauty","Beauty"),("tutoring","Tutoring"),("catering","Catering"),
        ("photography","Photography"),("design","Design"),("it_support","IT Support"),
        ("legal","Legal"),("medical","Medical"),("events_management","Events Management"),
        ("other","Other"),
    ]
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug      = models.CharField(max_length=20, unique=True, choices=SLUG_CHOICES)
    icon      = models.CharField(max_length=50, blank=True)
    order     = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.slug


class ServiceProvider(TranslatableModel):
    translations = TranslatedFields(
        bio=models.TextField(blank=True),
    )
    user         = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="service_provider")
    categories   = models.ManyToManyField(ServiceCategory, blank=True)
    location     = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    phone        = models.CharField(max_length=20, blank=True)
    whatsapp     = models.CharField(max_length=20, blank=True)
    portfolio    = models.JSONField(default=list)
    is_verified  = models.BooleanField(default=False)
    is_featured  = models.BooleanField(default=False)
    avg_rating   = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    review_count = models.PositiveIntegerField(default=0)
    created_at   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)


class ServiceListing(TranslatableModel):
    PRICE_TYPE_CHOICES = [
        ("fixed","Fixed"),("hourly","Hourly"),("daily","Daily"),("negotiable","Negotiable"),
    ]
    translations = TranslatedFields(
        title=models.CharField(max_length=300),
        description=models.TextField(blank=True),
    )
    provider     = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE, related_name="listings")
    category     = models.ForeignKey(ServiceCategory, on_delete=models.SET_NULL, null=True, blank=True)
    price        = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    min_price    = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    max_price    = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency     = models.CharField(max_length=5, default="SYP")
    price_type   = models.CharField(max_length=12, choices=PRICE_TYPE_CHOICES, default="negotiable")
    is_remote    = models.BooleanField(default=False)
    location     = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    is_active    = models.BooleanField(default=True)
    is_featured  = models.BooleanField(default=False)
    is_promoted  = models.BooleanField(default=False)
    views_count  = models.PositiveIntegerField(default=0)
    avg_rating   = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    ratings_count = models.PositiveIntegerField(default=0)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-is_featured", "-is_promoted", "-updated_at" ,"-created_at"]

    def __str__(self):
        return self.safe_translation_getter("title", any_language=True) or str(self.pk)
