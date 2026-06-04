from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import Transpose, ResizeToFit, ResizeToFill
from apps.core.validators import validate_image_size, validate_image_type


class ClassifiedCategory(TranslatableModel):
    SLUG_CHOICES = [
        ("furniture","Furniture"),("electronics","Electronics"),("fashion","Fashion"),
        ("kids","Kids"),("pets","Pets"),("sports","Sports"),("books","Books"),
        ("mobiles","Mobiles"),("others","Others"),
    ]
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug      = models.CharField(max_length=20, unique=True, choices=SLUG_CHOICES)
    icon      = models.CharField(max_length=50, blank=True)
    parent    = models.ForeignKey("self", null=True, blank=True, on_delete=models.SET_NULL, related_name="children")
    order     = models.PositiveSmallIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.slug


class Store(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=200),
        description=models.TextField(blank=True),
    )
    user    = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="store")
    logo    = ProcessedImageField(
        upload_to="classifieds/stores/logos/",
        processors=[Transpose(), ResizeToFill(300, 300)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    cover   = ProcessedImageField(
        upload_to="classifieds/stores/covers/",
        processors=[Transpose(), ResizeToFit(1200, 400)],
        format="WEBP", options={"quality": 85},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    location    = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    phone       = models.CharField(max_length=20, blank=True)
    whatsapp    = models.CharField(max_length=20, blank=True)
    instagram   = models.CharField(max_length=100, blank=True)
    is_verified = models.BooleanField(default=False)
    is_active   = models.BooleanField(default=True)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.safe_translation_getter("name", any_language=True) or str(self.pk)


class ClassifiedListing(TranslatableModel):
    LISTING_TYPE_CHOICES = [("sell","Sell"),("buy","Buy")]
    CONDITION_CHOICES    = [
        ("new","New"),("used_like_new","Used – Like New"),
        ("used_good","Used – Good"),("used_fair","Used – Fair"),
    ]
    translations = TranslatedFields(
        title=models.CharField(max_length=300),
        description=models.TextField(blank=True),
    )
    listing_type = models.CharField(max_length=10, choices=LISTING_TYPE_CHOICES, default="sell")
    condition    = models.CharField(max_length=20, choices=CONDITION_CHOICES, blank=True)
    price        = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    currency     = models.CharField(max_length=5, default="SYP")
    negotiable   = models.BooleanField(default=False)
    hide_price   = models.BooleanField(default=False, help_text="Show 'Contact for price' instead of the actual price.")

    seller       = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="classified_listings")
    store        = models.ForeignKey(Store, null=True, blank=True, on_delete=models.SET_NULL, related_name="listings")
    category     = models.ForeignKey(ClassifiedCategory, on_delete=models.SET_NULL, null=True, blank=True)
    location     = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)

    is_active    = models.BooleanField(default=True)
    is_featured  = models.BooleanField(default=False)
    is_promoted  = models.BooleanField(default=False)
    is_preloved  = models.BooleanField(default=False)
    views_count  = models.PositiveIntegerField(default=0)
    avg_rating   = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    ratings_count = models.PositiveIntegerField(default=0)
    expires_at   = models.DateTimeField(null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-is_featured", "-is_promoted", "-created_at"]
        indexes  = [models.Index(fields=["category", "is_active", "created_at"])]

    def __str__(self):
        return self.safe_translation_getter("title", any_language=True) or str(self.pk)


class ClassifiedImage(models.Model):
    listing    = models.ForeignKey(ClassifiedListing, on_delete=models.CASCADE, related_name="images")
    image      = ProcessedImageField(
        upload_to="classifieds/images/",
        processors=[Transpose(), ResizeToFit(1200, 900)],
        format="WEBP", options={"quality": 85},
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail  = ImageSpecField(source="image", spec="core:thumbnail")
    card       = ImageSpecField(source="image", spec="core:card")
    is_primary = models.BooleanField(default=False)
    order      = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]
