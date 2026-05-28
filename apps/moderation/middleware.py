import json
from django.http import HttpResponse


class IPBlockMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        ip = self._get_ip(request)
        if ip and self._is_blocked(ip):
            return HttpResponse(
                json.dumps({"error": "access_denied"}),
                content_type="application/json",
                status=403,
            )
        return self.get_response(request)

    def _get_ip(self, request):
        xff = request.META.get("HTTP_X_FORWARDED_FOR")
        return xff.split(",")[0].strip() if xff else request.META.get("REMOTE_ADDR", "")

    def _is_blocked(self, ip):
        try:
            from .models import BlockedIP
            record = BlockedIP.objects.get(ip_address=ip)
            return record.is_active()
        except Exception:
            return False
