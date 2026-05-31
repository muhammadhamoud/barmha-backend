from .base import *  # noqa

DEBUG = True
ALLOWED_HOSTS = ["*"]

# Allow Google / Facebook OAuth popups to communicate with the opener window.
# Django's SecurityMiddleware defaults to "same-origin" which blocks window.closed
# checks inside Google's GSI client and breaks the requestAccessToken() popup flow.
SECURE_CROSS_ORIGIN_OPENER_POLICY = "same-origin-allow-popups"

# Use console email backend in development
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Allow all CORS origins in development
CORS_ALLOW_ALL_ORIGINS = True

# Django Debug Toolbar (optional — install separately)
INTERNAL_IPS = ["127.0.0.1"]

# Disable throttling in development — hot reloads exhaust the 200/day anon limit quickly
REST_FRAMEWORK = {
    **REST_FRAMEWORK,
    "DEFAULT_THROTTLE_CLASSES": [],
    "DEFAULT_THROTTLE_RATES": {},
}


CORS_ALLOWED_ORIGINS = [
    "http://localhost:8000",

]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:8000",

]
