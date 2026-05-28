from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import Transpose, ResizeToFit
from apps.core.validators import validate_image_size, validate_image_type


class NewsCategory(TranslatableModel):
    SLUG_CHOICES = [
        ("syria","Syria"),("world","World"),("middle_east","Middle East"),
        ("health_education","Health & Education"),("law","Law"),
        ("community","Community"),("sports","Sports"),
        ("business","Business"),("lifestyle","Lifestyle"),
    ]
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug  = models.CharField(max_length=20, unique=True, choices=SLUG_CHOICES)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering        = ["order"]
        verbose_name_plural = "news categories"

    def __str__(self):
        return self.slug


class NewsTag(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=100),
    )
    slug = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.slug


class NewsArticle(TranslatableModel):
    translations = TranslatedFields(
        title=models.CharField(max_length=500),
        slug=models.SlugField(max_length=500),
        summary=models.TextField(blank=True),
        content=models.TextField(blank=True),
        meta_title=models.CharField(max_length=200, blank=True),
        meta_description=models.CharField(max_length=300, blank=True),
    )
    category     = models.ForeignKey(NewsCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name="articles")
    tags         = models.ManyToManyField(NewsTag, blank=True, related_name="articles")
    author       = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="news_articles")
    cover_image  = ProcessedImageField(
        upload_to="news/covers/",
        processors=[Transpose(), ResizeToFit(1600, 1200)],
        format="WEBP", options={"quality": 85},
        blank=True, null=True,
        validators=[validate_image_size, validate_image_type],
    )
    thumbnail    = ImageSpecField(source="cover_image", spec="core:thumbnail")
    card         = ImageSpecField(source="cover_image", spec="core:card")
    og           = ImageSpecField(source="cover_image", spec="core:og")
    source       = models.CharField(max_length=200, blank=True)
    source_url   = models.URLField(blank=True)
    is_published = models.BooleanField(default=False)
    is_featured  = models.BooleanField(default=False)
    is_breaking  = models.BooleanField(default=False)
    views_count  = models.PositiveIntegerField(default=0)
    published_at = models.DateTimeField(null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]
        indexes  = [
            models.Index(fields=["category", "is_published", "published_at"]),
        ]

    def __str__(self):
        return self.safe_translation_getter("title", any_language=True) or str(self.pk)


class NewsletterSubscriber(models.Model):
    email      = models.EmailField(unique=True)
    is_active  = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
