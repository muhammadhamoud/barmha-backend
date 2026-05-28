from django.db import models
from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import Transpose, ResizeToFit, ResizeToFill
from apps.core.mixins import SeoMixin
from apps.core.validators import validate_image_size, validate_image_type


class VehicleMake(models.Model):
    name    = models.CharField(max_length=100, unique=True)
    logo    = ProcessedImageField(
        upload_to="vehicles/makes/",
        processors=[Transpose(), ResizeToFill(200, 200)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    popular = models.BooleanField(default=False)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class VehicleModel(models.Model):
    make = models.ForeignKey(VehicleMake, on_delete=models.CASCADE, related_name="models")
    name = models.CharField(max_length=100)

    class Meta:
        unique_together = [("make", "name")]
        ordering = ["name"]

    def __str__(self):
        return f"{self.make.name} {self.name}"


class VehicleListing(SeoMixin):
    LISTING_TYPE_CHOICES = [("sale", "For Sale"), ("rent", "For Rent")]
    CATEGORY_CHOICES     = [("car", "Car"), ("commercial", "Commercial"), ("motorbike", "Motorbike"), ("boat", "Boat")]
    CONDITION_CHOICES    = [("brand_new", "Brand New"), ("used", "Used")]

    listing_type    = models.CharField(max_length=10, choices=LISTING_TYPE_CHOICES)
    category        = models.CharField(max_length=15, choices=CATEGORY_CHOICES)
    make            = models.ForeignKey(VehicleMake, on_delete=models.SET_NULL, null=True, blank=True)
    model           = models.ForeignKey(VehicleModel, on_delete=models.SET_NULL, null=True, blank=True)
    trim            = models.CharField(max_length=100, blank=True)
    year            = models.PositiveSmallIntegerField(null=True, blank=True)
    title           = models.CharField(max_length=300)
    description     = models.TextField(blank=True)

    price           = models.DecimalField(max_digits=12, decimal_places=2)
    currency        = models.CharField(max_length=5, default="SYP")
    negotiable      = models.BooleanField(default=False)
    hide_price      = models.BooleanField(default=False, help_text="Show 'Contact for price' instead of the actual price.")

    mileage         = models.PositiveIntegerField(null=True, blank=True)
    fuel_type       = models.CharField(max_length=20, blank=True)
    gear_type       = models.CharField(max_length=20, blank=True)
    engine_size     = models.CharField(max_length=20, blank=True)
    cylinders       = models.PositiveSmallIntegerField(null=True, blank=True)
    wheel_drive     = models.CharField(max_length=10, blank=True)
    body_style      = models.CharField(max_length=30, blank=True)
    color_exterior  = models.CharField(max_length=50, blank=True)
    color_interior  = models.CharField(max_length=50, blank=True)
    doors           = models.PositiveSmallIntegerField(null=True, blank=True)
    seats           = models.PositiveSmallIntegerField(null=True, blank=True)

    condition       = models.CharField(max_length=15, choices=CONDITION_CHOICES, blank=True)
    import_source   = models.CharField(max_length=100, blank=True)
    insurance_type  = models.CharField(max_length=50, blank=True)
    features        = models.JSONField(default=list)
    under_warranty  = models.BooleanField(default=False)
    computer_check  = models.BooleanField(default=False)

    location        = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    posted_by       = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="vehicle_listings")
    showroom        = models.ForeignKey("Showroom", on_delete=models.SET_NULL, null=True, blank=True, related_name="listings")

    is_active       = models.BooleanField(default=True)
    is_featured     = models.BooleanField(default=False)
    is_promoted     = models.BooleanField(default=False)
    is_sold         = models.BooleanField(default=False)
    views_count     = models.PositiveIntegerField(default=0)
    expires_at      = models.DateTimeField(null=True, blank=True)

    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "vehicle_listings"
        ordering = ["-is_featured", "-is_promoted", "-updated_at" ,"-created_at"]
        indexes  = [
            models.Index(fields=["listing_type", "category", "is_active"]),
            models.Index(fields=["price"]),
            models.Index(fields=["year"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return self.title


class VehicleImage(models.Model):
    listing    = models.ForeignKey(VehicleListing, on_delete=models.CASCADE, related_name="images")
    image      = ProcessedImageField(
        upload_to="vehicles/images/",
        processors=[Transpose(), ResizeToFit(1600, 1200)],
        format="WEBP", options={"quality": 85},
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail  = ImageSpecField(source="image", spec="core:thumbnail")
    card       = ImageSpecField(source="image", spec="core:card")
    detail     = ImageSpecField(source="image", spec="core:detail")
    is_primary = models.BooleanField(default=False)
    order      = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]


class Showroom(models.Model):
    name        = models.CharField(max_length=200)
    logo        = ProcessedImageField(
        upload_to="vehicles/showrooms/logos/",
        processors=[Transpose(), ResizeToFill(300, 300)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    cover       = ProcessedImageField(
        upload_to="vehicles/showrooms/covers/",
        processors=[Transpose(), ResizeToFit(1200, 400)],
        format="WEBP", options={"quality": 85},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    location    = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    phone       = models.CharField(max_length=20, blank=True)
    whatsapp    = models.CharField(max_length=20, blank=True)
    description = models.TextField(blank=True)
    is_verified = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class RentalCompany(models.Model):
    name        = models.CharField(max_length=200)
    logo        = ProcessedImageField(
        upload_to="vehicles/rental/logos/",
        processors=[Transpose(), ResizeToFill(300, 300)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    location    = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    phone       = models.CharField(max_length=20, blank=True)
    website     = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Garage(models.Model):
    name            = models.CharField(max_length=200)
    location        = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    phone           = models.CharField(max_length=20, blank=True)
    specializations = models.JSONField(default=list)
    is_featured     = models.BooleanField(default=False)
    created_at      = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class CarPart(models.Model):
    CONDITION_CHOICES = [("new", "New"), ("used", "Used"), ("refurbished", "Refurbished")]

    title           = models.CharField(max_length=300)
    description     = models.TextField(blank=True)
    price           = models.DecimalField(max_digits=10, decimal_places=2)
    currency        = models.CharField(max_length=5, default="SYP")
    condition       = models.CharField(max_length=15, choices=CONDITION_CHOICES, default="used")
    compatible_make = models.ForeignKey(VehicleMake, on_delete=models.SET_NULL, null=True, blank=True)
    image           = ProcessedImageField(
        upload_to="vehicles/parts/",
        processors=[Transpose(), ResizeToFit(800, 600)],
        format="WEBP", options={"quality": 82},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail       = ImageSpecField(source="image", spec="core:card")
    posted_by       = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="car_parts")
    is_active       = models.BooleanField(default=True)
    created_at      = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
