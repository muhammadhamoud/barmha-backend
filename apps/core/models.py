from django.conf import settings
from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from django.utils.text import slugify

class Governorate(TranslatableModel):
    GOVERNORATE_CHOICES = [
        ("damascus",    "Damascus"),
        ("rif_dimashq", "Rural Damascus"),
        ("aleppo",      "Aleppo"),
        ("homs",        "Homs"),
        ("hama",        "Hama"),
        ("latakia",     "Latakia"),
        ("tartus",      "Tartus"),
        ("idlib",       "Idlib"),
        ("deir_ezzor",  "Deir ez-Zor"),
        ("hasakah",     "Al-Hasakah"),
        ("raqqa",       "Raqqa"),
        ("daraa",       "Daraa"),
        ("suwayda",     "As-Suwayda"),
        ("quneitra",    "Quneitra"),
    ]
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug      = models.CharField(max_length=20, unique=True, choices=GOVERNORATE_CHOICES)
    is_active = models.BooleanField(default=True)
    order     = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.safe_translation_getter("name", any_language=True) or self.slug

    def save(self, *args, **kwargs):
        if not self.slug:
            name = self.safe_translation_getter("name", any_language=True) or ""
            generated_slug = slugify(name, allow_unicode=False)

            self.slug = self.GOVERNORATE_SLUG_ALIASES.get(generated_slug, "")

            if not self.slug:
                raise ValueError(
                    f"Cannot auto-generate governorate slug from name '{name}'. "
                    "Please set slug manually using one of GOVERNORATE_CHOICES."
                )

        super().save(*args, **kwargs)


class Location(TranslatableModel):
    translations = TranslatedFields(
        city=models.CharField(max_length=100),
        name=models.CharField(max_length=100, blank=True),
    )
    governorate = models.ForeignKey(Governorate, on_delete=models.CASCADE, related_name="locations")
    latitude    = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    longitude   = models.DecimalField(max_digits=10, decimal_places=7, null=True, blank=True)
    slug = models.SlugField(max_length=140)
    location_type = models.CharField(
        max_length=20,
        choices=[
            ("city", "City"),
            ("town", "Town"),
            ("village", "Village"),
            ("area", "Area"),
            ("district", "District"),
            ("subdistrict", "Subdistrict"),
        ],
        default="area",
    )
    is_popular  = models.BooleanField(default=False)

    class Meta:
        ordering = ["governorate__order"]
        constraints = [
            models.UniqueConstraint(
                fields=["governorate", "slug"],
                name="unique_location_slug_per_governorate",
            )
        ]

    def __str__(self):
        city = self.safe_translation_getter("city", any_language=True) or ""
        name = self.safe_translation_getter("name", any_language=True) or ""

        if name and name != city:
            return f"{name}, {city}, {self.governorate}"

        return f"{city}, {self.governorate}"
    
    # def __str__(self):
    #     city = self.safe_translation_getter("city", any_language=True) or ""
    #     return f"{city}, {self.governorate}"

    def save(self, *args, **kwargs):
        if not self.slug:
            city = self.safe_translation_getter("city", any_language=True) or ""
            name = self.safe_translation_getter("name", any_language=True) or ""

            base = name or city or f"location-{self.pk or ''}"
            base_slug = slugify(base, allow_unicode=True)[:120]

            if not base_slug:
                base_slug = f"location-{self.pk or ''}".strip("-")

            slug = base_slug
            counter = 2

            while Location.objects.filter(
                governorate=self.governorate,
                slug=slug,
            ).exclude(pk=self.pk).exists():
                suffix = f"-{counter}"
                slug = f"{base_slug[:140 - len(suffix)]}{suffix}"
                counter += 1

            self.slug = slug

        super().save(*args, **kwargs)

class PrayerTime(models.Model):
    governorate = models.ForeignKey(Governorate, on_delete=models.CASCADE, related_name="prayer_times")
    date        = models.DateField()
    fajr        = models.TimeField()
    sunrise     = models.TimeField()
    dhuhr       = models.TimeField()
    asr         = models.TimeField()
    maghrib     = models.TimeField()
    isha        = models.TimeField()

    class Meta:
        unique_together = ("governorate", "date")

    def __str__(self):
        return f"{self.governorate} - {self.date}"


class SiteSettings(models.Model):
    key         = models.CharField(max_length=100, unique=True)
    value       = models.TextField()
    description = models.CharField(max_length=200, blank=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return self.key


class ContactMessage(models.Model):
    name       = models.CharField(max_length=200)
    email      = models.EmailField()
    phone      = models.CharField(max_length=20, blank=True)
    subject    = models.CharField(max_length=300)
    message    = models.TextField()
    is_read    = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"


class Notification(TranslatableModel):
    TYPE_CHOICES = [
        ("new_message",        "New Message"),
        ("listing_approved",   "Listing Approved"),
        ("listing_expired",    "Listing Expired"),
        ("deal_nearby",        "Deal Nearby"),
        ("application_update", "Application Update"),
        ("review_received",    "Review Received"),
        ("price_change",       "Price Change"),
        ("listing_shared",     "Listing Shared"),
        ("new_listing_area",   "New Listing In Area"),
        ("system",             "System Announcement"),
    ]
    translations = TranslatedFields(
        title=models.CharField(max_length=200),
        body=models.TextField(),
    )
    recipient  = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="notifications")
    notif_type = models.CharField(max_length=25, choices=TYPE_CHOICES)
    action_url = models.CharField(max_length=300, blank=True)
    is_read    = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.recipient} - {self.notif_type}"


class ListingShare(models.Model):
    """Record of a listing shared from one user to another inside the app."""
    SECTION_CHOICES = [
        ("properties",  "Properties"),
        ("vehicles",    "Vehicles"),
        ("classifieds", "Classifieds"),
        ("jobs",        "Jobs"),
        ("services",    "Services"),
        ("deals",       "Deals"),
        ("events",      "Events"),
    ]
    sender     = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="shared_listings")
    recipient  = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="received_shares")
    section    = models.CharField(max_length=20, choices=SECTION_CHOICES)
    listing_id = models.PositiveIntegerField()
    note       = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.sender} → {self.recipient} [{self.section}/{self.listing_id}]"


class FCMDevice(models.Model):
    PLATFORMS = [("android", "Android"), ("ios", "iOS"), ("web", "Web")]
    user       = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="fcm_devices")
    token      = models.TextField(unique=True)
    platform   = models.CharField(max_length=10, choices=PLATFORMS)
    is_active  = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} [{self.platform}]"


class DrawnAreaAlert(models.Model):
    """A polygon area saved by a user from the map page; triggers notifications when new listings appear inside."""
    user       = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="drawn_area_alerts")
    name       = models.CharField(max_length=200, blank=True)
    polygon_wkt = models.TextField(help_text="WKT POLYGON string, coords are (lng lat)")
    section    = models.CharField(max_length=20, blank=True, help_text="Restrict to one section, or blank for all")
    is_active  = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.user} – {self.name or self.polygon_wkt[:40]}"
