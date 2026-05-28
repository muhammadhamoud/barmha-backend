from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import Transpose, ResizeToFit
from apps.core.validators import validate_image_size, validate_image_type


class EventCategory(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.slug


class Event(TranslatableModel):
    PRICE_TYPE_CHOICES = [
        ("free","Free"),("paid","Paid"),("donation","Donation"),
    ]
    translations = TranslatedFields(
        title=models.CharField(max_length=300),
        description=models.TextField(blank=True),
    )
    organizer   = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="events")
    category    = models.ForeignKey(EventCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name="events")
    location    = models.ForeignKey("core.Location", on_delete=models.SET_NULL, null=True, blank=True)
    cover_image = ProcessedImageField(
        upload_to="events/covers/",
        processors=[Transpose(), ResizeToFit(1600, 1200)],
        format="WEBP", options={"quality": 85},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail   = ImageSpecField(source="cover_image", spec="core:thumbnail")
    card        = ImageSpecField(source="cover_image", spec="core:card")
    venue_name  = models.CharField(max_length=300, blank=True)
    latitude    = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude   = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    start_date  = models.DateTimeField()
    end_date    = models.DateTimeField()
    price_type  = models.CharField(max_length=10, choices=PRICE_TYPE_CHOICES, default="free")
    price       = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency    = models.CharField(max_length=5, default="SYP")
    ticket_url  = models.URLField(blank=True)
    capacity    = models.PositiveIntegerField(null=True, blank=True)
    is_online   = models.BooleanField(default=False)
    online_url  = models.URLField(blank=True)
    is_active   = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    views_count = models.PositiveIntegerField(default=0)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["start_date"]
        indexes  = [
            models.Index(fields=["category", "start_date", "is_active"]),
        ]

    def __str__(self):
        return self.safe_translation_getter("title", any_language=True) or str(self.pk)


class EventImage(models.Model):
    event     = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="images")
    image     = ProcessedImageField(
        upload_to="events/gallery/",
        processors=[Transpose(), ResizeToFit(1600, 1200)],
        format="WEBP", options={"quality": 85},
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail = ImageSpecField(source="image", spec="core:thumbnail")
    card      = ImageSpecField(source="image", spec="core:card")
    order     = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order"]
