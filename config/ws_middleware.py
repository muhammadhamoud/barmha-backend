"""
JWT authentication middleware for Django Channels WebSocket connections.

The browser WebSocket API cannot send custom headers, so the frontend passes
the JWT access token as a query parameter: ws://host/ws/chat/1/?token=<jwt>

This middleware reads that token, validates it with SimpleJWT, and injects
the resolved user into scope["user"] so the consumer can rely on it.
"""
from urllib.parse import parse_qs

from channels.db import database_sync_to_async
from django.contrib.auth.models import AnonymousUser


@database_sync_to_async
def _get_user_from_token(token_str: str):
    try:
        from rest_framework_simplejwt.tokens import UntypedToken
        from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
        from django.contrib.auth import get_user_model

        UntypedToken(token_str)  # validates signature + expiry
        from rest_framework_simplejwt.backends import TokenBackend
        from django.conf import settings

        data = TokenBackend(
            algorithm=settings.SIMPLE_JWT.get("ALGORITHM", "HS256"),
            signing_key=settings.SECRET_KEY,
        ).decode(token_str, verify=True)

        User = get_user_model()
        return User.objects.get(pk=data["user_id"])
    except Exception:
        return AnonymousUser()


class JWTAuthMiddleware:
    """Wrap an ASGI application, injecting the JWT-authenticated user into scope."""

    def __init__(self, inner):
        self.inner = inner

    async def __call__(self, scope, receive, send):
        if scope["type"] == "websocket":
            qs = parse_qs(scope.get("query_string", b"").decode())
            token_list = qs.get("token", [])
            if token_list:
                scope["user"] = await _get_user_from_token(token_list[0])
            else:
                scope["user"] = AnonymousUser()
        await self.inner(scope, receive, send)


def JWTAuthMiddlewareStack(inner):
    """Drop-in replacement for AuthMiddlewareStack that reads JWT from ?token= param."""
    return JWTAuthMiddleware(inner)
