from .base import *  # noqa

DEBUG = True
ALLOWED_HOSTS = ["*"]

# Enable Django Channels for WebSocket support in development
INSTALLED_APPS += ["channels"]  # type: ignore[name-defined]
ASGI_APPLICATION = "config.asgi.application"
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer",
    }
}

# Allow Google / Facebook OAuth popups to communicate with the opener window.
# Django's SecurityMiddleware defaults to "same-origin" which blocks window.closed
# checks inside Google's GSI client and breaks the requestAccessToken() popup flow.
SECURE_CROSS_ORIGIN_OPENER_POLICY = "same-origin-allow-popups"

# Use real SMTP in development so emails are actually delivered.
# EMAIL_HOST / EMAIL_HOST_PASSWORD / etc. are inherited from base.py.

# Allow all CORS origins in development
CORS_ALLOW_ALL_ORIGINS = True

# Django Debug Toolbar (optional — install separately)
INTERNAL_IPS = ["127.0.0.1"]

# Disable global throttling in development — hot reloads exhaust the 200/day anon limit quickly.
# Keep DEFAULT_THROTTLE_RATES so view-level throttles (RegisterThrottle, LoginThrottle) don't
# raise ImproperlyConfigured when they look up their scope.
REST_FRAMEWORK = {
    **REST_FRAMEWORK,
    "DEFAULT_THROTTLE_CLASSES": [],
}


CORS_ALLOWED_ORIGINS = [
    "http://localhost:8000",

]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:8000",

]
