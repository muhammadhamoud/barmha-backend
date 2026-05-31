from .base import *  # noqa
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration
from sentry_sdk.integrations.celery import CeleryIntegration

DEBUG = False
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")

# ── S3 / CloudFront ───────────────────────────────────────────────────────────
DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
AWS_ACCESS_KEY_ID = env("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = env("AWS_STORAGE_BUCKET_NAME")
AWS_S3_REGION_NAME = "eu-central-1"
AWS_S3_CUSTOM_DOMAIN = env("CLOUDFRONT_DOMAIN", default="")
AWS_S3_OBJECT_PARAMETERS = {"CacheControl": "max-age=86400"}
AWS_DEFAULT_ACL = "public-read"
AWS_QUERYSTRING_AUTH = False
IMAGEKIT_DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"

# ── Security ──────────────────────────────────────────────────────────────────
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = "DENY"
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# ── Sentry ────────────────────────────────────────────────────────────────────
sentry_sdk.init(
    dsn=env("SENTRY_DSN", default=""),
    integrations=[DjangoIntegration(), CeleryIntegration()],
    traces_sample_rate=0.1,
    send_default_pii=False,
)


CORS_ALLOWED_ORIGINS = [
    "http://barmha.com",
    "https://barmha.com",
    "http://www.barmha.com",
    "https://www.barmha.com",
]

CSRF_TRUSTED_ORIGINS = [
    "http://barmha.com",
    "https://barmha.com",
    "http://www.barmha.com",
    "https://www.barmha.com",
    "https://api.barmha.com",
]

ALLOWED_HOSTS += [
    "barmha.com",
    "www.barmha.com",
]

# ── Cache ─────────────────────────────────────────────────────────────────────
# DatabaseCache is shared across all Gunicorn workers — required for OTP codes.
# LocMemCache (base.py default) is per-process, so worker A saves the code but
# worker B can't read it, causing false "invalid code" errors.
# After deploying run once: python manage.py createcachetable
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.db.DatabaseCache",
        "LOCATION": "django_cache",
    }
}