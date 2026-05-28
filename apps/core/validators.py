from django.core.exceptions import ValidationError


def validate_image_size(image):
    max_mb = 10
    if image.size > max_mb * 1024 * 1024:
        raise ValidationError(f"Image must be smaller than {max_mb} MB.")


def validate_image_type(image):
    allowed = ["image/jpeg", "image/png", "image/webp", "image/heic"]
    if hasattr(image, "content_type") and image.content_type not in allowed:
        raise ValidationError("Unsupported format. Upload JPEG, PNG, WebP, or HEIC.")
