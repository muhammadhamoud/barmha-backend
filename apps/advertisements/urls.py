from django.urls import path
from . import views

urlpatterns = [
    # ── Public / display ─────────────────────────────────────────────────────
    path("placements/",                           views.AdPlacementListView.as_view(),          name="ad-placement-list"),
    path("placements/<str:key>/active/",          views.ActiveBannersView.as_view(),            name="ad-active-banners"),

    # ── Tracking ─────────────────────────────────────────────────────────────
    path("banners/<int:pk>/impression/",          views.record_impression,                      name="ad-impression"),
    path("banners/<int:pk>/click/",               views.record_click,                           name="ad-click"),

    # ── Admin management (staff only) ────────────────────────────────────────
    path("admin/placements/",                     views.AdminAdPlacementListCreateView.as_view(), name="ad-admin-placement-list"),
    path("admin/placements/<int:pk>/",            views.AdminAdPlacementDetailView.as_view(),     name="ad-admin-placement-detail"),
    path("admin/banners/",                        views.AdminAdBannerListCreateView.as_view(),    name="ad-admin-banner-list"),
    path("admin/banners/<int:pk>/",               views.AdminAdBannerDetailView.as_view(),        name="ad-admin-banner-detail"),
]
