from .base import *  # noqa
from celery.schedules import crontab
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration
from sentry_sdk.integrations.celery import CeleryIntegration

DEBUG = False
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=["barmha.com", "www.barmha.com"])

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

# ── Redis connection ──────────────────────────────────────────────────────────
# .env only needs one line:
#   REDIS_URL=redis://localhost:6379/0
REDIS_URL = env("REDIS_URL", default="redis://localhost:6379/0")

# ── Cache (django-redis) ──────────────────────────────────────────────────────
# Shared across all Gunicorn workers → OTP codes, DRF throttle counters, and
# session data are consistent regardless of which worker handles the request.
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": REDIS_URL,
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "SOCKET_CONNECT_TIMEOUT": 5,
            "SOCKET_TIMEOUT": 5,
            "IGNORE_EXCEPTIONS": True,   # degrade gracefully if Redis is down
        },
        "KEY_PREFIX": "barmha",
    }
}

# ── Django Channels (WebSocket) ───────────────────────────────────────────────
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {"hosts": [REDIS_URL]},
    }
}

# ── Celery ────────────────────────────────────────────────────────────────────
CELERY_BROKER_URL    = REDIS_URL
CELERY_RESULT_BACKEND = REDIS_URL
CELERY_ACCEPT_CONTENT   = ["json"]
CELERY_TASK_SERIALIZER  = "json"
CELERY_RESULT_SERIALIZER = "json"
CELERY_TIMEZONE = TIME_ZONE

CELERY_BEAT_SCHEDULE = {
    "expire-listings-daily": {
        "task": "apps.core.tasks.expire_old_listings",
        "schedule": crontab(hour=0, minute=0),
    },
    "send-saved-search-alerts": {
        "task": "apps.accounts.tasks.notify_saved_search_users",
        "schedule": crontab(hour=8, minute=0),
    },
    "ping-search-engines-daily": {
        "task": "apps.core.tasks.ping_search_engines",
        "schedule": crontab(hour=6, minute=0),
    },
}