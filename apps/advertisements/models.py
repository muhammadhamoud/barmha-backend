from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import Transpose, ResizeToFit
from apps.core.validators import validate_image_size, validate_image_type


class AdPlacement(models.Model):
    SLOT_CHOICES = [
        ("home_top","Home Top"),("home_middle","Home Middle"),
        ("properties_list","Properties List"),("properties_detail","Properties Detail"),
        ("vehicles_list","Vehicles List"),("vehicles_detail","Vehicles Detail"),
        ("classifieds_list","Classifieds List"),("jobs_list","Jobs List"),
        ("news_sidebar","News Sidebar"),("deals_page","Deals Page"),
    ]
    key         = models.CharField(max_length=30, unique=True, choices=SLOT_CHOICES)
    description = models.CharField(max_length=200, blank=True)
    width       = models.PositiveIntegerField(help_text="px")
    height      = models.PositiveIntegerField(help_text="px")
    max_ads     = models.PositiveSmallIntegerField(default=3)

    def __str__(self):
        return self.key


class AdBanner(models.Model):
    STATUS_CHOICES = [
        ("pending","Pending"),("active","Active"),
        ("paused","Paused"),("expired","Expired"),
    ]
    advertiser  = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="ad_banners")
    placement   = models.ForeignKey(AdPlacement, on_delete=models.CASCADE, related_name="banners")
    title       = models.CharField(max_length=200)
    image       = ProcessedImageField(
        upload_to="ads/banners/",
        processors=[Transpose(), ResizeToFit(1200, 400)],
        format="WEBP", options={"quality": 85},
        validators=[validate_image_size, validate_image_type],
    )
    url         = models.URLField()
    status      = models.CharField(max_length=10, choices=STATUS_CHOICES, default="pending")
    start_date  = models.DateField()
    end_date    = models.DateField()
    impressions = models.PositiveIntegerField(default=0)
    clicks      = models.PositiveIntegerField(default=0)
    budget      = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency    = models.CharField(max_length=5, default="SYP")
    created_at  = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.title} ({self.placement.key})"

    @property
    def ctr(self):
        if self.impressions == 0:
            return 0.0
        return round(self.clicks / self.impressions * 100, 2)


class AdImpression(models.Model):
    banner      = models.ForeignKey(AdBanner, on_delete=models.CASCADE, related_name="impression_records")
    ip_address  = models.GenericIPAddressField()
    user        = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True)
    recorded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-recorded_at"]


class AdClick(models.Model):
    banner     = models.ForeignKey(AdBanner, on_delete=models.CASCADE, related_name="click_records")
    ip_address = models.GenericIPAddressField()
    user       = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True)
    clicked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-clicked_at"]
