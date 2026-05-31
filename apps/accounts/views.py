import logging
import requests as http_requests
from django.utils import timezone
from datetime import timedelta
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from apps.core.throttles import LoginThrottle, RegisterThrottle
from apps.core.email_utils import send_welcome_email, send_activation_email, verify_activation_token
from django.core.signing import BadSignature, SignatureExpired
from .models import (
    User, RealEstateAgent, RealEstateAgency,
    Subscription, SavedSearch, Favourite, PhoneVerification, PaymentIntent,
)
from .serializers import (
    SimpleRegisterSerializer, UserProfileSerializer, UserPublicSerializer,
    AgentSerializer, AgencySerializer,
    SubscriptionSerializer, SavedSearchSerializer, FavouriteSerializer, PaymentIntentSerializer,
)
# LEGACY import kept for future use:
# from .tasks import send_otp_sms

logger = logging.getLogger("apps.accounts")


# ─────────────────────────────────────────────────────────────────────────────
# LEGACY RegisterView — kept for future use (returned username + OTP flow)
# ─────────────────────────────────────────────────────────────────────────────
# class RegisterView(generics.CreateAPIView):
#     permission_classes = [AllowAny]
#     serializer_class   = RegisterSerializer
#
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         refresh = RefreshToken.for_user(user)
#         return Response({
#             "user":    UserProfileSerializer(user).data,
#             "access":  str(refresh.access_token),
#             "refresh": str(refresh),
#         }, status=status.HTTP_201_CREATED)


class RegisterView(generics.CreateAPIView):
    """
    Simplified registration — no username field, phone optional, no OTP step.
    Returns JWT tokens immediately so the frontend can log the user in right away.
    """
    permission_classes = [AllowAny]
    serializer_class   = SimpleRegisterSerializer
    throttle_classes   = [RegisterThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user    = serializer.save()
        refresh = RefreshToken.for_user(user)
        lang = request.headers.get("Accept-Language", "ar")[:2]
        if user.email:
            send_welcome_email(user, language=lang)
            send_activation_email(user, language=lang)
        return Response({
            "user":    UserProfileSerializer(user).data,
            "access":  str(refresh.access_token),
            "refresh": str(refresh),
        }, status=status.HTTP_201_CREATED)


# ─────────────────────────────────────────────────────────────────────────────
# LEGACY LoginView — simplejwt TokenObtainPairView (accepts username + password)
# Kept for future use / token refresh compatibility.
# ─────────────────────────────────────────────────────────────────────────────
# class LoginView(TokenObtainPairView):
#     pass


class LoginView(APIView):
    """
    Flexible login — accepts email OR phone number as the identifier field.
    Request body: { "username": "<email or phone>", "password": "..." }
    Also accepts "email" key for backward compatibility.
    Response: { "user": {...}, "access": "...", "refresh": "..." }
    """
    permission_classes = [AllowAny]
    throttle_classes   = [LoginThrottle]

    def post(self, request):
        # Accept "username", "email", or "phone" as the identifier
        identifier = (
            request.data.get("username")
            or request.data.get("email")
            or request.data.get("phone")
            or ""
        ).strip()
        password = request.data.get("password", "")

        if not identifier or not password:
            return Response(
                {"detail": "يرجى إدخال البريد الإلكتروني أو رقم الهاتف وكلمة المرور."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Detect whether the identifier looks like an email or a phone number
        user = None
        if "@" in identifier:
            user = User.objects.filter(email__iexact=identifier).first()
        else:
            # Phone lookup — strip spaces/dashes for a loose match
            user = User.objects.filter(phone=identifier).first()

        if user is None or not user.check_password(password):
            return Response(
                {"detail": "بيانات الدخول غير صحيحة."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if not user.is_active:
            return Response(
                {"detail": "هذا الحساب موقوف."},
                status=status.HTTP_403_FORBIDDEN,
            )

        refresh = RefreshToken.for_user(user)
        return Response({
            "user":    UserProfileSerializer(user).data,
            "access":  str(refresh.access_token),
            "refresh": str(refresh),
        })


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            token = RefreshToken(request.data.get("refresh"))
            token.blacklist()
        except Exception:
            pass
        return Response({"status": "logged_out"})


class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = UserProfileSerializer

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        """
        Override to catch image-processing errors (Pillow / imagekit) so they
        return a friendly 400 instead of a raw 500 Internal Server Error.

        IMPORTANT: DRF ValidationError is NOT caught here — it propagates
        normally so the frontend receives the real field-level error messages.
        Only low-level I/O / image-codec errors are intercepted.
        """
        from rest_framework.exceptions import ValidationError as DRFValidationError

        kwargs["partial"] = request.method == "PATCH"
        try:
            return super().update(request, *args, **kwargs)
        except DRFValidationError:
            # Let DRF handle its own validation errors — they produce the
            # correct 400 response with per-field details automatically.
            raise
        except (OSError, IOError) as exc:
            # Pillow / imagekit codec / file-system errors during avatar save.
            logger.exception("ProfileView image processing error: %s", exc)
            return Response(
                {"error": "avatar_processing_failed",
                 "detail": "Could not process the image. Try a different format (JPEG or PNG)."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as exc:
            # Unexpected server-side error — log it and return a generic 500
            # rather than exposing internal details.
            logger.exception("ProfileView update unexpected error: %s", exc)
            return Response(
                {"error": "server_error",
                 "detail": "An unexpected error occurred. Please try again."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class ChangePasswordView(APIView):
    """
    POST /accounts/password/change/
    Body: { old_password, new_password1, new_password2 }

    Validates the current password, checks the new pair match, sets the new
    password, then returns fresh JWT tokens so the user stays logged in.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user         = request.user
        old_password = request.data.get("old_password", "")
        new_pw1      = request.data.get("new_password1", "")
        new_pw2      = request.data.get("new_password2", "")

        if not user.check_password(old_password):
            return Response({"error": "wrong_password"}, status=status.HTTP_400_BAD_REQUEST)

        if not new_pw1:
            return Response({"error": "new_password_required"}, status=status.HTTP_400_BAD_REQUEST)

        if len(new_pw1) < 8:
            return Response({"error": "password_too_short"}, status=status.HTTP_400_BAD_REQUEST)

        if new_pw1 != new_pw2:
            return Response({"error": "passwords_do_not_match"}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_pw1)
        user.save(update_fields=["password"])

        # Return fresh tokens so the session survives the password change
        refresh = RefreshToken.for_user(user)
        return Response({
            "status":  "password_changed",
            "access":  str(refresh.access_token),
            "refresh": str(refresh),
        })


class SavedSearchListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = SavedSearchSerializer

    def get_queryset(self):
        return SavedSearch.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SavedSearchDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = SavedSearchSerializer

    def get_queryset(self):
        return SavedSearch.objects.filter(user=self.request.user)


class FavouriteListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = FavouriteSerializer

    def get_queryset(self):
        return Favourite.objects.filter(user=self.request.user)


class FavouriteToggleView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        content_type = request.data.get("content_type")
        object_id    = request.data.get("object_id")
        if not content_type or not object_id:
            return Response({"error": "content_type and object_id required"}, status=400)
        fav, created = Favourite.objects.get_or_create(
            user=request.user, content_type=content_type, object_id=object_id
        )
        if not created:
            fav.delete()
            return Response({"status": "removed"})
        return Response({"status": "added", "favourite": FavouriteSerializer(fav).data})


class AgentListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class   = AgentSerializer
    queryset           = RealEstateAgent.objects.select_related("user", "agency")


class AgentDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class   = AgentSerializer
    queryset           = RealEstateAgent.objects.select_related("user", "agency")


class AgencyListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class   = AgencySerializer
    queryset           = RealEstateAgency.objects.all()


class AgencyDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class   = AgencySerializer
    queryset           = RealEstateAgency.objects.all()


class AgencyListingsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        from apps.properties.models import PropertyListing
        from apps.properties.serializers import PropertyListSerializer
        listings = PropertyListing.objects.filter(agency_id=pk, is_active=True)
        serializer = PropertyListSerializer(listings, many=True, context={"request": request})
        return Response(serializer.data)


class SubscriptionListView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = SubscriptionSerializer
    pagination_class   = None   # subscriptions are per-user and small — return plain array

    def get_queryset(self):
        return Subscription.objects.filter(user=self.request.user).order_by("-start_date")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SubscriptionDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = SubscriptionSerializer

    def get_queryset(self):
        return Subscription.objects.filter(user=self.request.user)


# ─────────────────────────────────────────────────────────────────────────────
# LEGACY OTP views — phone verification flow (commented out, kept for future use)
# ─────────────────────────────────────────────────────────────────────────────
# class RequestOTPView(APIView):
#     permission_classes = [IsAuthenticated]
#
#     def post(self, request):
#         phone = request.data.get("phone")
#         if not phone:
#             return Response({"error": "phone_required"}, status=400)
#         recent_count = PhoneVerification.objects.filter(
#             phone=phone,
#             created_at__gte=timezone.now() - timedelta(hours=1),
#         ).count()
#         if recent_count >= 3:
#             return Response({"error": "rate_limited"}, status=429)
#         otp = PhoneVerification.create_for_user(request.user, phone)
#         send_otp_sms.delay(phone, otp.code)
#         return Response({"message": "otp_sent"})
#
#
# class VerifyOTPView(APIView):
#     permission_classes = [IsAuthenticated]
#
#     def post(self, request):
#         phone = request.data.get("phone")
#         code  = request.data.get("code")
#         otp   = PhoneVerification.objects.filter(
#             user=request.user, phone=phone, is_used=False
#         ).order_by("-created_at").first()
#         if not otp:
#             return Response({"error": "no_pending_otp"}, status=400)
#         valid, reason = otp.is_valid(code)
#         if not valid:
#             return Response({"error": reason}, status=400)
#         request.user.phone      = phone
#         request.user.is_verified = True
#         request.user.save(update_fields=["phone", "is_verified"])
#         return Response({"message": "verified"})


# ─────────────────────────────────────────────────────────────────────────────
# Social login — direct token exchange (bypasses allauth 0.63+ pipeline which
# is incompatible with the plain access_token flow used by the frontend).
# Each view verifies the token against the provider's userinfo endpoint,
# finds-or-creates the local User, and returns our standard JWT response.
# ─────────────────────────────────────────────────────────────────────────────

def _jwt_response(user):
    """Mint JWT tokens for user and return the standard { user, access, refresh } dict."""
    refresh = RefreshToken.for_user(user)
    return {
        "user":    UserProfileSerializer(user).data,
        "access":  str(refresh.access_token),
        "refresh": str(refresh),
    }


def _find_or_create_user(email, first_name="", last_name="", avatar_url="", verified=False):
    """
    Find existing user by email or create a new individual account.
    Username is auto-generated by User.save() — no need to set it here.
    """
    user, created = User.objects.get_or_create(
        email=email,
        defaults={
            "first_name":    first_name[:50],
            "last_name":     last_name[:50],
            "user_type":     "individual",
            "is_verified":   verified,
            "email_verified": verified,
        },
    )
    update_fields = []
    if avatar_url and not user.social_avatar_url:
        user.social_avatar_url = avatar_url
        update_fields.append("social_avatar_url")
    # Ensure returning social-auth users also get email_verified set
    if verified and not user.email_verified:
        user.email_verified = True
        update_fields.append("email_verified")
    if update_fields:
        user.save(update_fields=update_fields)
    return user


class GoogleLogin(APIView):
    """
    POST /accounts/social/google/
    Body: { "access_token": "<Google OAuth2 access token>" }

    Verifies the token against Google's userinfo endpoint, creates/finds the
    local user, and returns { user, access, refresh }.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        access_token = request.data.get("access_token") or request.data.get("id_token")
        if not access_token:
            return Response({"error": "access_token is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Verify with Google and fetch user profile
        try:
            resp = http_requests.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                headers={"Authorization": f"Bearer {access_token}"},
                timeout=10,
            )
        except Exception:
            return Response({"error": "Could not reach Google servers"}, status=status.HTTP_502_BAD_GATEWAY)

        if resp.status_code != 200:
            return Response({"error": "Invalid or expired Google token"}, status=status.HTTP_400_BAD_REQUEST)

        info  = resp.json()
        email = info.get("email")
        if not email:
            return Response({"error": "Google account has no email address"}, status=status.HTTP_400_BAD_REQUEST)

        user = _find_or_create_user(
            email      = email,
            first_name = info.get("given_name", ""),
            last_name  = info.get("family_name", ""),
            avatar_url = info.get("picture", ""),
            verified   = info.get("email_verified", False),
        )
        return Response(_jwt_response(user))


class FacebookLogin(APIView):
    """
    POST /accounts/social/facebook/
    Body: { "access_token": "<Facebook user access token>" }
    """
    permission_classes = [AllowAny]

    def post(self, request):
        access_token = request.data.get("access_token")
        if not access_token:
            return Response({"error": "access_token is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            resp = http_requests.get(
                "https://graph.facebook.com/me",
                params={
                    "fields":       "id,email,first_name,last_name,picture.width(200)",
                    "access_token": access_token,
                },
                timeout=10,
            )
        except Exception:
            return Response({"error": "Could not reach Facebook servers"}, status=status.HTTP_502_BAD_GATEWAY)

        if resp.status_code != 200:
            return Response({"error": "Invalid or expired Facebook token"}, status=status.HTTP_400_BAD_REQUEST)

        info  = resp.json()
        email = info.get("email")
        if not email:
            return Response(
                {"error": "Facebook account has no email. Please grant email permission."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        avatar_url = info.get("picture", {}).get("data", {}).get("url", "")
        user = _find_or_create_user(
            email      = email,
            first_name = info.get("first_name", ""),
            last_name  = info.get("last_name", ""),
            avatar_url = avatar_url,
            verified   = True,   # FB already verifies email
        )
        return Response(_jwt_response(user))


class AppleLogin(APIView):
    """POST /accounts/social/apple/ — stub, implement when Apple sign-in is needed."""
    permission_classes = [AllowAny]

    def post(self, request):
        return Response({"error": "Apple login not yet implemented"}, status=status.HTTP_501_NOT_IMPLEMENTED)


class CreatePaymentIntentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        import stripe
        from django.conf import settings
        stripe.api_key = settings.STRIPE_SECRET_KEY
        amount   = request.data.get("amount")
        currency = request.data.get("currency", "usd").lower()
        try:
            intent = stripe.PaymentIntent.create(
                amount=int(float(amount) * 100),
                currency=currency,
                metadata={"user_id": request.user.id},
            )
            PaymentIntent.objects.create(
                user=request.user,
                amount=amount,
                currency=currency.upper(),
                stripe_pi_id=intent["id"],
            )
            return Response({"client_secret": intent["client_secret"]})
        except Exception as e:
            return Response({"error": str(e)}, status=400)


class StripeWebhookView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        import stripe
        from django.conf import settings
        payload = request.body
        sig_header = request.META.get("HTTP_STRIPE_SIGNATURE", "")
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
            )
        except Exception:
            return Response({"error": "invalid_signature"}, status=400)
        if event["type"] == "payment_intent.succeeded":
            pi_id = event["data"]["object"]["id"]
            PaymentIntent.objects.filter(stripe_pi_id=pi_id).update(status="succeeded")
        return Response({"status": "ok"})


class PaymentHistoryView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class   = PaymentIntentSerializer

    def get_queryset(self):
        return PaymentIntent.objects.filter(user=self.request.user).order_by("-created_at")


class UserSearchView(generics.ListAPIView):
    """
    GET /accounts/search/?q=<query>
    Returns up to 20 users whose name, username, or email starts with the query.
    Excludes the requesting user themselves.
    Requires authentication so only logged-in users can search for others.
    """
    permission_classes = [IsAuthenticated]
    serializer_class   = UserPublicSerializer

    def get_queryset(self):
        q = self.request.query_params.get("q", "").strip()
        if len(q) < 2:
            return User.objects.none()
        from django.db.models import Q
        return (
            User.objects
            .filter(
                Q(first_name__icontains=q) | Q(last_name__icontains=q) |
                Q(username__icontains=q)   | Q(email__icontains=q)
            )
            .exclude(pk=self.request.user.pk)
            .order_by("first_name", "last_name")[:20]
        )


class UserPublicListingsView(APIView):
    """
    GET /accounts/users/<pk>/listings/
    Returns the seller's public profile + all their active listings across sections.
    """
    permission_classes = [AllowAny]

    def get(self, request, pk):
        from django.shortcuts import get_object_or_404
        from apps.properties.models import PropertyListing
        from apps.properties.serializers import PropertyListSerializer
        from apps.vehicles.models import VehicleListing
        from apps.vehicles.serializers import VehicleListSerializer
        from apps.classifieds.models import ClassifiedListing
        from apps.classifieds.serializers import ClassifiedListSerializer
        from apps.jobs.models import JobListing
        from apps.jobs.serializers import JobListSerializer

        user = get_object_or_404(User, pk=pk)
        ctx  = {"request": request}

        sections = [
            ("properties",  PropertyListing.objects.filter(posted_by=user, is_active=True).order_by("-created_at"),  PropertyListSerializer),
            ("vehicles",    VehicleListing.objects.filter(posted_by=user, is_active=True).order_by("-created_at"),   VehicleListSerializer),
            ("classifieds", ClassifiedListing.objects.filter(posted_by=user, is_active=True).order_by("-created_at"), ClassifiedListSerializer),
            ("jobs",        JobListing.objects.filter(posted_by=user, is_active=True).order_by("-created_at"),        JobListSerializer),
        ]

        listings = []
        for section, qs, SerializerClass in sections:
            for item in SerializerClass(qs, many=True, context=ctx).data:
                listings.append({"section": section, "item": item})

        listings.sort(key=lambda x: x["item"].get("created_at", ""), reverse=True)

        try:
            avatar_url = user.avatar_thumbnail.url if user.avatar_thumbnail else None
        except Exception:
            avatar_url = None
        if not avatar_url:
            avatar_url = user.social_avatar_url or None
        name = user.get_full_name() or user.username or user.email.split("@")[0]

        return Response({
            "seller": {
                "id":            user.id,
                "name":          name,
                "avatar_url":    avatar_url,
                "listing_count": len(listings),
                "type":          "user",
            },
            "listings": listings,
        })


class ActivateEmailView(APIView):
    """GET /accounts/activate/?token=<signed-token> — verifies token, sets email_verified=True."""
    permission_classes = [AllowAny]

    def get(self, request):
        token = request.query_params.get("token", "")
        if not token:
            return Response({"detail": "Missing token."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            pk = verify_activation_token(token)
            user = User.objects.get(pk=pk)
        except SignatureExpired:
            return Response({"detail": "Link expired."}, status=status.HTTP_400_BAD_REQUEST)
        except (BadSignature, User.DoesNotExist, Exception):
            return Response({"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)
        # if not user.email_verified:
        #     user.email_verified = True
        #     user.save(update_fields=["email_verified"])
        
        update_fields = []

        if not user.email_verified:
            user.email_verified = True
            update_fields.append("email_verified")

        if not user.is_verified:
            user.is_verified = True
            update_fields.append("is_verified")

        if update_fields:
            user.save(update_fields=update_fields)
        
        return Response({"detail": "Email verified successfully."})


@api_view(["POST"])
@permission_classes([AllowAny])
def request_password_reset(request):
    """POST /accounts/password/reset/ — sends branded reset email."""
    from apps.core.email_utils import send_password_reset_email, make_activation_token
    email = request.data.get("email", "").strip().lower()
    if not email:
        return Response({"detail": "Email required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        user = User.objects.get(email__iexact=email)
    except User.DoesNotExist:
        # Don't reveal whether the email exists
        return Response({"detail": "If that email is registered you will receive a reset link shortly."})
    lang  = request.headers.get("Accept-Language", "ar")[:2]
    token = make_activation_token(user)
    send_password_reset_email(user, token=token, language=lang)
    return Response({"detail": "If that email is registered you will receive a reset link shortly."})


@api_view(["POST"])
@permission_classes([AllowAny])
def confirm_password_reset(request):
    """POST /accounts/password/reset/confirm/ — verifies token, sets new password."""
    token    = request.data.get("token", "")
    password = request.data.get("password", "")
    if not token or not password:
        return Response({"detail": "token and password are required."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        pk   = verify_activation_token(token, max_age_seconds=3600)
        user = User.objects.get(pk=pk)
    except SignatureExpired:
        return Response({"detail": "Reset link has expired."}, status=status.HTTP_400_BAD_REQUEST)
    except (BadSignature, User.DoesNotExist, Exception):
        return Response({"detail": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)
    user.set_password(password)
    user.save(update_fields=["password"])
    return Response({"detail": "Password reset successfully."})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def resend_activation_email(request):
    """POST /accounts/activate/resend/ — resends the activation email to the current user."""
    from apps.core.email_utils import send_activation_email
    user = request.user
    if user.email_verified:
        return Response({"detail": "Email already verified."})
    if user.email:
        lang = request.headers.get("Accept-Language", "ar")[:2]
        send_activation_email(user, language=lang)
    return Response({"detail": "Activation email sent."})
