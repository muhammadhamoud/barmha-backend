from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.core.signing import TimestampSigner, BadSignature, SignatureExpired
from django.conf import settings

FRONTEND_URL = getattr(settings, "FRONTEND_URL", "https://barmha.com")
_signer = TimestampSigner(salt="email-activation")


def _render_email(template_name: str, context: dict) -> str:
    return render_to_string(template_name, context)


def _send(subject: str, template: str, context: dict, to_email: str) -> None:
    html_body = _render_email(template, context)
    msg = EmailMultiAlternatives(
        subject=subject,
        body=subject,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[to_email],
    )
    msg.attach_alternative(html_body, "text/html")
    try:
        msg.send(fail_silently=False)
    except Exception:
        pass


def send_welcome_email(user, language: str = "ar") -> None:
    lang    = language if language in ("ar", "en") else "ar"
    subject = "أهلاً بك في برمها! 🎉" if lang == "ar" else "Welcome to Barmha! 🎉"
    context = {
        "username":     user.username,
        "first_name":   user.first_name or "",
        "lang":         lang,
        "dir":          "rtl" if lang == "ar" else "ltr",
        "frontend_url": FRONTEND_URL,
    }
    _send(subject, f"emails/welcome_{lang}.html", context, user.email)


def make_activation_token(user) -> str:
    return _signer.sign(str(user.pk))


def verify_activation_token(token: str, max_age_seconds: int = 172800):
    """Return user pk (str) or raise BadSignature / SignatureExpired."""
    return _signer.unsign(token, max_age=max_age_seconds)


def send_activation_email(user, language: str = "ar") -> None:
    lang    = language if language in ("ar", "en") else "ar"
    token   = make_activation_token(user)
    url     = f"{FRONTEND_URL}/auth/activate?token={token}"
    subject = "تأكيد بريدك الإلكتروني على برمها" if lang == "ar" else "Verify your email on Barmha"
    context = {
        "username":       user.username,
        "first_name":     user.first_name or "",
        "lang":           lang,
        "dir":            "rtl" if lang == "ar" else "ltr",
        "activation_url": url,
    }
    _send(subject, f"emails/activation_{lang}.html", context, user.email)


def send_password_reset_email(user, token: str, language: str = "ar") -> None:
    lang    = language if language in ("ar", "en") else "ar"
    url     = f"{FRONTEND_URL}/auth/reset-password?token={token}"
    subject = "إعادة تعيين كلمة المرور" if lang == "ar" else "Reset your Barmha password"
    context = {
        "username":   user.username,
        "first_name": user.first_name or "",
        "lang":       lang,
        "dir":        "rtl" if lang == "ar" else "ltr",
        "reset_url":  url,
    }
    _send(subject, f"emails/password_reset_{lang}.html", context, user.email)
