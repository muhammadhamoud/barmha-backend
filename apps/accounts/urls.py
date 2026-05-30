from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # ── Auth ──────────────────────────────────────────────────────────────────
    path("register/",                    views.RegisterView.as_view()),
    path("login/",                       views.LoginView.as_view()),   # flexible: email OR phone
    path("logout/",                      views.LogoutView.as_view()),
    path("token/refresh/",               TokenRefreshView.as_view()),  # JWT refresh (unchanged)

    # ── Profile ───────────────────────────────────────────────────────────────
    path("profile/",                     views.ProfileView.as_view()),
    path("password/change/",             views.ChangePasswordView.as_view()),
    path("password/reset/",              views.request_password_reset),
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

    path("api/v1/auth/", include("dj_rest_auth.urls")),
    path("api/v1/auth/registration/", include("dj_rest_auth.registration.urls")),

    # ── Payments ──────────────────────────────────────────────────────────────
    path("payments/create-intent/",      views.CreatePaymentIntentView.as_view()),
    path("payments/webhook/",            views.StripeWebhookView.as_view()),
    path("payments/history/",            views.PaymentHistoryView.as_view()),

    # ── User search (for listing sharing recipient picker) ────────────────────
    path("search/",                      views.UserSearchView.as_view()),
]
