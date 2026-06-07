from pathlib import Path
import environ

BASE_DIR = Path(__file__).resolve().parent.parent.parent

env = environ.Env(DEBUG=(bool, False))
environ.Env.read_env(BASE_DIR / ".env")

SECRET_KEY = env("SECRET_KEY", default="django-insecure-change-me-in-production")
DEBUG = env("DEBUG", default=True)
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=["*"])

DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sites",
    "django.contrib.sitemaps",
]

THIRD_PARTY_APPS = [
    "rest_framework",
    "rest_framework_simplejwt",
    "rest_framework_simplejwt.token_blacklist",
    "django_filters",
    "corsheaders",
    "storages",
    "drf_spectacular",
    "parler",
    "imagekit",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "allauth.socialaccount.providers.google",
    "allauth.socialaccount.providers.facebook",
    "allauth.socialaccount.providers.apple",
    "dj_rest_auth",
    "dj_rest_auth.registration",
    "channels",
    "django_cleanup.apps.CleanupConfig",
    # TODO: Uncomment for production — requires a running Elasticsearch instance.
    # "django_elasticsearch_dsl",
]

LOCAL_APPS = [
    "apps.core",
    "apps.accounts",
    "apps.properties",
    "apps.vehicles",
    "apps.classifieds",
    "apps.services",
    "apps.jobs",
    "apps.deals",
    "apps.news",
    "apps.events",
    "apps.advertisements",
    "apps.messaging",
    "apps.reviews",
    "apps.moderation",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

MIDDLEWARE = [
    "apps.moderation.middleware.IPBlockMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "allauth.account.middleware.AccountMiddleware",
]

ROOT_URLCONF = "config.urls"

# Angular build output — defined early so TEMPLATES and WHITENOISE_ROOT can use it.
FRONTEND_DIST_DIR = BASE_DIR / "frontend" / "dist"

_template_dirs = [BASE_DIR / "templates"]
# Include Angular dist so the SPA catch-all view can locate index.html.
if FRONTEND_DIST_DIR.exists():
    _template_dirs.append(FRONTEND_DIST_DIR)

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": _template_dirs,
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION  = "config.asgi.application"

DATABASES = {
    # "default": {
    #     "ENGINE": "django.db.backends.sqlite3",
    #     "NAME": BASE_DIR / "db.sqlite3",
    # }
    "default": env.db("DATABASE_URL", default="sqlite:///db.sqlite3")
}

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

LANGUAGE_CODE = "en"
LANGUAGES = [("en", "English"), ("ar", "Arabic")]
TIME_ZONE = "Asia/Damascus"
USE_I18N = True
USE_TZ = True

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIRS = [BASE_DIR / "static"]

# WhiteNoise serves every file in FRONTEND_DIST_DIR at its natural URL path
# (e.g. /main-abc123.js, /ngsw.json) without the /static/ prefix, keeping
# Angular assets separate from Django's own /static/ files.
if FRONTEND_DIST_DIR.exists():
    WHITENOISE_ROOT = FRONTEND_DIST_DIR

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
AUTH_USER_MODEL = "accounts.User"
SITE_ID = 1

# ── REST Framework ────────────────────────────────────────────────────────────
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticatedOrReadOnly",
    ],
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ],
    "DEFAULT_PAGINATION_CLASS": "apps.core.pagination.BarmhaPagination",
    "PAGE_SIZE": 30,
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_THROTTLE_CLASSES": [
        "rest_framework.throttling.AnonRateThrottle",
        "rest_framework.throttling.UserRateThrottle",
    ],
    "DEFAULT_THROTTLE_RATES": {
        "anon": "1000/minute",
        "user": "2000/day",
        "listing_create": "10/hour",
        "otp_request": "3/hour",
        "login": "5/minute",
        "register": "10/hour",
        "contact": "5/hour",
        "token_refresh": "60/minute",
        "reference_data": "120/minute",
    },
}

# ── JWT ───────────────────────────────────────────────────────────────────────
from datetime import timedelta

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=100),
    # Rotation is OFF so multiple tabs or a startup race between AuthService
    # and the interceptor never produce a blacklisted-token 401 that silently
    # logs the user out.  Explicit logout still blacklists the token manually
    # via LogoutView.post() → token.blacklist().
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": False,
}



# ── Parler ────────────────────────────────────────────────────────────────────
PARLER_LANGUAGES = {
    None: ({"code": "en"}, {"code": "ar"}),
    "default": {"fallback": "ar", "hide_untranslated": False},
}

# ── CORS ──────────────────────────────────────────────────────────────────────
CORS_ALLOWED_ORIGINS = env.list(
    "CORS_ALLOWED_ORIGINS",
    default=["http://localhost:4200", "http://127.0.0.1:4200"],
)
CORS_ALLOW_CREDENTIALS = True

# ── Spectacular (OpenAPI) ─────────────────────────────────────────────────────
SPECTACULAR_SETTINGS = {
    "TITLE": "barmha.com API",
    "DESCRIPTION": "Syria's leading classifieds platform API",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
}

# ── Cache ─────────────────────────────────────────────────────────────────────
# Development default: in-process memory cache.
# Production overrides this with django-redis in production.py.
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
        "LOCATION": "barmha-cache",
    }
}

# ── Channels ──────────────────────────────────────────────────────────────────
# Development default: in-memory channel layer (single process).
# Production overrides this with channels_redis in production.py.
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer",
    }
}

# TODO: Uncomment for production — requires a running Elasticsearch instance.
#       Search falls back to ORM icontains automatically when ES is unavailable
#       (see apps/core/views.py search endpoint), so the app works without it.
# ELASTICSEARCH_DSL = {
#     "default": {"hosts": env("ELASTICSEARCH_URL", default="http://localhost:9200")}
# }

# -- Allauth / Social Auth --
# API-only backend — all allauth HTML views are disabled; the frontend uses
# our own JWT endpoints (/accounts/login/, /accounts/register/, social views).
HEADLESS_ONLY = True

# Email is the login identifier; username is never shown to end-users.
ACCOUNT_LOGIN_METHODS      = {"email"}
ACCOUNT_SIGNUP_FIELDS      = ["email*", "password1*", "password2*"]   # email required, no username
ACCOUNT_UNIQUE_EMAIL       = True
ACCOUNT_EMAIL_VERIFICATION = "optional"

SOCIALACCOUNT_ADAPTER      = "apps.accounts.adapter.BarmhaSocialAccountAdapter"

REST_AUTH = {
    "USE_JWT": True,
    "JWT_AUTH_COOKIE": "barmha-access",
    "JWT_AUTH_REFRESH_COOKIE": "barmha-refresh",
    "JWT_AUTH_HTTPONLY": True,
    "TOKEN_MODEL": None,
}

SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "APP": {
            "client_id": env("GOOGLE_CLIENT_ID", default=""),
            "secret": env("GOOGLE_CLIENT_SECRET", default=""),
            "key": "",
        },
        "SCOPE": ["profile", "email"],
        "AUTH_PARAMS": {"access_type": "online"},
        "FETCH_USERINFO": True,
    },
    "facebook": {
        "APP": {
            "client_id": env("FACEBOOK_APP_ID", default=""),
            "secret": env("FACEBOOK_APP_SECRET", default=""),
            "key": "",
        },
        "METHOD": "oauth2",
        "SCOPE": ["email", "public_profile"],
        "FIELDS": ["id", "email", "name", "first_name", "last_name", "picture"],
        "EXCHANGE_TOKEN": True,
        "VERIFIED_EMAIL": False,
        "VERSION": "v19.0",
    },
    "apple": {
        "APP": {
            "client_id": env("APPLE_CLIENT_ID", default=""),
            "secret": env("APPLE_PRIVATE_KEY", default=""),
            "key": env("APPLE_KEY_ID", default=""),
            "settings": {"TEAM_ID": env("APPLE_TEAM_ID", default="")},
        },
    },
}

# ── Stripe ────────────────────────────────────────────────────────────────────
STRIPE_SECRET_KEY = env("STRIPE_SECRET_KEY", default="")
STRIPE_PUBLISHABLE_KEY = env("STRIPE_PUBLISHABLE_KEY", default="")
STRIPE_WEBHOOK_SECRET = env("STRIPE_WEBHOOK_SECRET", default="")

# ── FCM ───────────────────────────────────────────────────────────────────────
FCM_PROJECT_ID = env("FCM_PROJECT_ID", default="")
FCM_SERVER_KEY = env("FCM_SERVER_KEY", default="")

# ── Imagekit ──────────────────────────────────────────────────────────────────
IMAGEKIT_CACHEFILE_DIR = "CACHE/images"
IMAGEKIT_DEFAULT_CACHEFILE_BACKEND = "imagekit.cachefiles.backends.Simple"

# ── Logging ───────────────────────────────────────────────────────────────────
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "json": {
            "()": "pythonjsonlogger.jsonlogger.JsonFormatter",
            "format": "%(asctime)s %(levelname)s %(name)s %(message)s",
        }
    },
    "handlers": {
        "console": {"class": "logging.StreamHandler", "formatter": "json"}
    },
    "root": {"handlers": ["console"], "level": "INFO"},
    "loggers": {
        "django": {"handlers": ["console"], "level": "WARNING", "propagate": False},
        "apps": {"handlers": ["console"], "level": "INFO", "propagate": False},
    },
}


# ── S3 / CloudFront media storage ────────────────────────────────────────────
AWS_ACCESS_KEY_ID       = env("AWS_ACCESS_KEY_ID", default="")
AWS_SECRET_ACCESS_KEY   = env("AWS_SECRET_ACCESS_KEY", default="")
AWS_STORAGE_BUCKET_NAME = env("AWS_STORAGE_BUCKET_NAME", default="")
AWS_S3_REGION_NAME      = env("AWS_S3_REGION_NAME", default="eu-north-1")
AWS_S3_CUSTOM_DOMAIN    = env("CLOUDFRONT_DOMAIN", default="")
AWS_S3_OBJECT_PARAMETERS = {"CacheControl": "max-age=86400"}
AWS_DEFAULT_ACL         = None
AWS_QUERYSTRING_AUTH    = False
AWS_S3_FILE_OVERWRITE   = False

# # Use S3 for uploaded media when credentials are configured; fall back to
# # local filesystem when they are not (e.g. shared hosting without S3).
# if AWS_ACCESS_KEY_ID and AWS_STORAGE_BUCKET_NAME:
#     STORAGES = {
#         "default": {
#             "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
#             "OPTIONS": {
#                 "bucket_name": AWS_STORAGE_BUCKET_NAME,
#                 "region_name": AWS_S3_REGION_NAME,
#                 "location": "media",
#                 "default_acl": None,
#                 "querystring_auth": False,
#                 "file_overwrite": False,
#                 "object_parameters": AWS_S3_OBJECT_PARAMETERS,
#             },
#         },
#         "staticfiles": {
#             "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
#         },
#     }
#     _cdn = AWS_S3_CUSTOM_DOMAIN or f"{AWS_STORAGE_BUCKET_NAME}.s3.{AWS_S3_REGION_NAME}.amazonaws.com"
#     MEDIA_URL = f"https://{_cdn}/media/"
#     IMAGEKIT_DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
# else:
#     # Shared hosting fallback — store uploads on the local filesystem.
#     MEDIA_URL  = "/media/"
#     MEDIA_ROOT = BASE_DIR / "media"

# Use S3 for uploaded media when credentials are configured; fall back to
# local filesystem when they are not.

if AWS_ACCESS_KEY_ID and AWS_STORAGE_BUCKET_NAME:
    default_storage = {
        "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
        "OPTIONS": {
            "bucket_name": AWS_STORAGE_BUCKET_NAME,
            "region_name": AWS_S3_REGION_NAME,
            "location": "media",
            "default_acl": None,
            "querystring_auth": False,
            "file_overwrite": False,
            "object_parameters": AWS_S3_OBJECT_PARAMETERS,
        },
    }

    _cdn = AWS_S3_CUSTOM_DOMAIN or f"{AWS_STORAGE_BUCKET_NAME}.s3.{AWS_S3_REGION_NAME}.amazonaws.com"
    MEDIA_URL = f"https://{_cdn}/media/"
    IMAGEKIT_DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"

else:
    default_storage = {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    }

    MEDIA_URL = "/media/"
    MEDIA_ROOT = BASE_DIR / "media"
    IMAGEKIT_DEFAULT_FILE_STORAGE = "django.core.files.storage.FileSystemStorage"


# Static files
if DEBUG:
    staticfiles_storage = {
        "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
    }
else:
    staticfiles_storage = {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    }


STORAGES = {
    "default": default_storage,
    "staticfiles": staticfiles_storage,
}

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"



EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_DOMAIN = 'barmha.com'
SITE_DOMAIN  = env("SITE_DOMAIN", default="barmha.com")
EMAIL_HOST=f'mail.{EMAIL_DOMAIN}'
EMAIL_PORT=465
EMAIL_USE_SSL=True
EMAIL_HOST_USER=f'noreply@{EMAIL_DOMAIN}'
DEFAULT_FROM_EMAIL=f'noreply@{EMAIL_DOMAIN}'
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD", default="") 

