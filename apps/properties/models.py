from django.db import models
from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import Transpose, ResizeToFit, ResizeToFill
from apps.core.mixins import SeoMixin
from apps.core.validators import validate_image_size, validate_image_type


class PropertyListing(SeoMixin):
    PURPOSE_CHOICES = [("for_rent","For Rent"),("for_sale","For Sale")]
    INTENT_CHOICES  = [("offer","Offering"),("wanted","Wanted / Looking to buy")]
    CATEGORY_CHOICES = [("residential","Residential"),("commercial","Commercial"),("international","International")]
    FURNISHING_CHOICES = [
        ("fully_furnished","Fully Furnished"),("semi_furnished","Semi-Furnished"),
        ("unfurnished","Unfurnished"),("fitted","Fitted"),("unfitted","Unfitted"),
    ]
    CONTRACT_CHOICES = [
        ("annual","Annual Contract"),("less_1yr","Less than 1 Year"),
        ("more_1yr","More than 1 Year"),("monthly","Monthly"),
    ]
    DEPOSIT_CHOICES = [("1_month","1 Month"),("half_month","1/2 Month"),("2_months","2 Months"),("none","None")]

    listing_intent = models.CharField(max_length=10, choices=INTENT_CHOICES, default="offer")
    title          = models.CharField(max_length=300)
    description    = models.TextField()
    purpose        = models.CharField(max_length=10, choices=PURPOSE_CHOICES)
    category       = models.CharField(max_length=15, choices=CATEGORY_CHOICES)
    property_type  = models.CharField(max_length=30)
    location       = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    address_detail = models.CharField(max_length=300, blank=True)
    latitude       = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitude      = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)

    price          = models.DecimalField(max_digits=12, decimal_places=2)
    price_per_sqm  = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency       = models.CharField(max_length=5, default="SYP")
    price_period   = models.CharField(max_length=10, default="month")
    negotiable     = models.BooleanField(default=False)
    hide_price     = models.BooleanField(default=False, help_text="When True, price is hidden and 'Contact for price' is shown.")

    bedrooms       = models.CharField(max_length=20, blank=True)
    bathrooms      = models.PositiveSmallIntegerField(null=True, blank=True)
    area_sqm       = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    floor_number   = models.PositiveSmallIntegerField(null=True, blank=True)
    total_floors   = models.PositiveSmallIntegerField(null=True, blank=True)
    office_capacity = models.CharField(max_length=20, blank=True, null=True, default=1)

    furnishing     = models.CharField(max_length=20, choices=FURNISHING_CHOICES, blank=True)
    contract_type  = models.CharField(max_length=10, choices=CONTRACT_CHOICES, blank=True)
    deposit        = models.CharField(max_length=10, choices=DEPOSIT_CHOICES, blank=True)
    no_commission  = models.BooleanField(default=False)

    kahramaa_included = models.BooleanField(default=False)
    internet_included = models.BooleanField(default=False)
    amenities      = models.JSONField(default=list)

    posted_by      = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="property_listings")
    agency         = models.ForeignKey("accounts.RealEstateAgency", null=True, blank=True, on_delete=models.SET_NULL)
    agent          = models.ForeignKey("accounts.RealEstateAgent", null=True, blank=True, on_delete=models.SET_NULL)
    reference_code = models.CharField(max_length=50, blank=True)

    is_active      = models.BooleanField(default=True)
    is_featured    = models.BooleanField(default=False)
    is_promoted    = models.BooleanField(default=False)
    is_sold_rented = models.BooleanField(default=False)
    views_count    = models.PositiveIntegerField(default=0)
    expires_at     = models.DateTimeField(null=True, blank=True)

    created_at     = models.DateTimeField(auto_now_add=True)
    updated_at     = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "property_listings"
        ordering = ["-is_featured", "-is_promoted", "-updated_at" ,"-created_at"]
        indexes  = [
            models.Index(fields=["purpose", "category", "is_active"]),
            models.Index(fields=["price"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return self.title


class PropertyImage(models.Model):
    listing    = models.ForeignKey(PropertyListing, on_delete=models.CASCADE, related_name="images")
    image      = ProcessedImageField(
        upload_to="properties/images/",
        processors=[Transpose(), ResizeToFit(1600, 1200)],
        format="WEBP", options={"quality": 85},
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail  = ImageSpecField(source="image", spec="core:thumbnail")
    card       = ImageSpecField(source="image", spec="core:card")
    detail     = ImageSpecField(source="image", spec="core:detail")
    og         = ImageSpecField(source="image", spec="core:og")
    is_primary = models.BooleanField(default=False)
    order      = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]


class NearbyAmenity(models.Model):
    TYPE_CHOICES = [
        ("metro","Metro Station"),("bus","Bus Stop"),("school","School"),
        ("hospital","Hospital / Clinic"),("mall","Mall / Supermarket"),("mosque","Mosque"),
    ]
    listing      = models.ForeignKey(PropertyListing, on_delete=models.CASCADE, related_name="nearby")
    amenity_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    name         = models.CharField(max_length=200)
    distance_m   = models.PositiveIntegerField(null=True, blank=True)


class EducationInstitution(models.Model):
    TYPE_CHOICES = [
        ("nursery","Nursery"),("school","School"),
        ("university","University"),("training","Training"),
    ]
    name        = models.CharField(max_length=200)
    inst_type   = models.CharField(max_length=15, choices=TYPE_CHOICES)
    description = models.TextField(blank=True)
    logo        = ProcessedImageField(
        upload_to="education/logos/",
        processors=[Transpose(), ResizeToFill(300, 300)],
        format="WEBP", options={"quality": 80},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    logo_thumbnail = ImageSpecField(source="logo", spec="core:logo")
    location    = models.ForeignKey("core.Location", null=True, blank=True, on_delete=models.SET_NULL)
    phone       = models.CharField(max_length=20, blank=True)
    email       = models.EmailField(blank=True)
    website     = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    created_at  = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
