import uuid
from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import Transpose, ResizeToFit
from apps.core.validators import validate_image_size, validate_image_type


class DealCategory(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug  = models.CharField(max_length=50, unique=True)
    icon  = models.CharField(max_length=50, blank=True)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.slug


class Merchant(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=200),
        description=models.TextField(blank=True),
    )
    user        = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="merchant_profile")
    logo        = ProcessedImageField(
        upload_to="deals/merchants/logos/",
        processors=[Transpose(), ResizeToFit(300, 300)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    category    = models.ForeignKey(DealCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name="merchants")
    location    = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    phone       = models.CharField(max_length=20, blank=True)
    whatsapp    = models.CharField(max_length=20, blank=True)
    website     = models.URLField(blank=True)
    instagram   = models.CharField(max_length=100, blank=True)
    is_verified = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    avg_rating  = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.safe_translation_getter("name", any_language=True) or str(self.user)


class Deal(TranslatableModel):
    DEAL_TYPE_CHOICES = [
        ("buy1get1",  "Buy 1 Get 1"),
        ("discount",  "Discount"),
        ("bundle",    "Bundle"),
        ("free_trial","Free Trial"),
        ("cashback",  "Cashback"),
    ]
    translations = TranslatedFields(
        title=models.CharField(max_length=300),
        description=models.TextField(blank=True),
        terms=models.TextField(blank=True),
    )
    merchant          = models.ForeignKey(Merchant, on_delete=models.CASCADE, related_name="deals")
    category          = models.ForeignKey(DealCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name="deals")
    deal_type         = models.CharField(max_length=15, choices=DEAL_TYPE_CHOICES)
    discount_value    = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    original_price    = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    deal_price        = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency          = models.CharField(max_length=5, default="SYP")
    image             = ProcessedImageField(
        upload_to="deals/images/",
        processors=[Transpose(), ResizeToFit(1024, 768)],
        format="WEBP", options={"quality": 85},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail         = ImageSpecField(source="image", spec="core:thumbnail")
    card              = ImageSpecField(source="image", spec="core:card")
    start_date        = models.DateTimeField()
    end_date          = models.DateTimeField()
    is_active         = models.BooleanField(default=True)
    is_deal_of_day    = models.BooleanField(default=False)
    is_featured       = models.BooleanField(default=False)
    views_count       = models.PositiveIntegerField(default=0)
    redemptions_count = models.PositiveIntegerField(default=0)
    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-is_deal_of_day", "-is_featured", "-created_at"]

    def __str__(self):
        return self.safe_translation_getter("title", any_language=True) or str(self.pk)


class DealRedemption(models.Model):
    deal        = models.ForeignKey(Deal, on_delete=models.CASCADE, related_name="redemptions")
    user        = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="deal_redemptions")
    code        = models.CharField(max_length=20, unique=True)
    redeemed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = [("deal", "user")]
        ordering = ["-redeemed_at"]

    def __str__(self):
        return f"{self.user} — {self.code}"
