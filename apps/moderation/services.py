import re
from .models import SpamPattern, SpamLog


def check_spam(text, user=None, ip=None, content_type="", object_id=None):
    patterns = SpamPattern.objects.filter(is_active=True)
    for pattern in patterns:
        matched = False
        if pattern.pattern_type == "keyword":
            matched = pattern.pattern.lower() in text.lower()
        elif pattern.pattern_type == "regex":
            try:
                matched = bool(re.search(pattern.pattern, text, re.IGNORECASE))
            except re.error:
                continue
        elif pattern.pattern_type == "phone":
            matched = pattern.pattern in re.sub(r"\D", "", text)
        elif pattern.pattern_type == "url":
            matched = pattern.pattern.lower() in text.lower()

        if matched:
            SpamLog.objects.create(
                pattern=pattern,
                content_type=content_type,
                object_id=object_id,
                matched_text=text[:500],
                ip_address=ip,
                user=user if (user and getattr(user, "is_authenticated", False)) else None,
            )
            return pattern.action
    return "ok"
