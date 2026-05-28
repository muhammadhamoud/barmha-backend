from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import Transpose, ResizeToFill
from apps.core.validators import validate_image_size, validate_image_type


class SeoMixin(models.Model):
    meta_title       = models.CharField(max_length=70, blank=True)
    meta_description = models.CharField(max_length=160, blank=True)
    og_image = ProcessedImageField(
        upload_to="seo/og/",
        processors=[Transpose(), ResizeToFill(1200, 630)],
        format="WEBP",
        options={"quality": 88},
        blank=True,
        null=True,
        validators=[validate_image_size, validate_image_type],
    )

    class Meta:
        abstract = True
