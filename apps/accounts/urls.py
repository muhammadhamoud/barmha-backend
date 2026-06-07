from django.contrib.auth import get_user_model
from django.urls import path
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.views import TokenRefreshView
from apps.core.throttles import TokenRefreshThrottle
from . import views


class SafeTokenRefreshView(TokenRefreshView):
    throttle_classes = [TokenRefreshThrottle]

    def post(self, request, *args, **kwargs):
        try:
            return super().post(request, *args, **kwargs)
        except get_user_model().DoesNotExist:
            raise InvalidToken("User no longer exists")

urlpatterns = [
    # ── Auth ──────────────────────────────────────────────────────────────────
    path("register/",                    views.RegisterView.as_view()),
    path("login/",                       views.LoginView.as_view()),   # flexible: email OR phone
    path("logout/",                      views.LogoutView.as_view()),
    path("token/refresh/",               SafeTokenRefreshView.as_view()),

    # ── Profile ───────────────────────────────────────────────────────────────
    path("profile/",                     views.ProfileView.as_view()),
    path("password/change/",             views.ChangePasswordView.as_view()),
    path("password/reset/",              views.request_password_reset),
    path("password/reset/verify/",       views.verify_reset_code),
    path("password/reset/confirm/",      views.confirm_password_reset),
    path("activate/",                    views.ActivateEmailView.as_view()),
    path("activate/resend/",             views.resend_activation_email),

    # ── Saved searches ────────────────────────────────────────────────────────
    path("saved-searches/",              views.SavedSearchListCreateView.as_view()),
    path("saved-searches/<int:pk>/",     views.SavedSearchDetailView.as_view()),

    # ── Favourites ────────────────────────────────────────────────────────────
    path("favourites/",                  views.FavouriteListView.as_view()),
    path("favourites/toggle/",           views.FavouriteToggleView.as_view()),

    # ── Agents / Agencies ─────────────────────────────────────────────────────
    path("agents/",                      views.AgentListView.as_view()),
    path("agents/<int:pk>/",             views.AgentDetailView.as_view()),
    path("agencies/",                    views.AgencyListView.as_view()),
    path("agencies/<int:pk>/",           views.AgencyDetailView.as_view()),
    path("agencies/<int:pk>/listings/",  views.AgencyListingsView.as_view()),

    # ── Subscriptions ─────────────────────────────────────────────────────────
    path("subscriptions/",               views.SubscriptionListView.as_view()),
    path("subscriptions/<int:pk>/",      views.SubscriptionDetailView.as_view()),

    # ── OTP — COMMENTED OUT (phone verification disabled for now) ─────────────
    # path("otp/request/",               views.RequestOTPView.as_view()),
    # path("otp/verify/",                views.VerifyOTPView.as_view()),

    # ── Social login ──────────────────────────────────────────────────────────
    path("social/google/",               views.GoogleLogin.as_view()),
    path("social/facebook/",             views.FacebookLogin.as_view()),
    path("social/apple/",                views.AppleLogin.as_view()),

    # ── Payments ──────────────────────────────────────────────────────────────
    path("payments/create-intent/",      views.CreatePaymentIntentView.as_view()),
    path("payments/webhook/",            views.StripeWebhookView.as_view()),
    path("payments/history/",            views.PaymentHistoryView.as_view()),

    # ── User search (for listing sharing recipient picker) ────────────────────
    path("search/",                      views.UserSearchView.as_view()),

    # ── Public seller profile ─────────────────────────────────────────────────
    path("users/<int:pk>/listings/",     views.UserPublicListingsView.as_view()),
]
