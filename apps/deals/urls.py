from django.urls import path
from . import views

urlpatterns = [
    path("",                           views.DealListView.as_view(),         name="deal-list"),
    path("<int:pk>/",                  views.DealDetailView.as_view(),       name="deal-detail"),
    path("<int:pk>/redeem/",           views.redeem_deal,                    name="deal-redeem"),
    path("categories/",               views.DealCategoryListView.as_view(),  name="deal-categories"),
    path("deal-of-day/",              views.DealOfDayView.as_view(),         name="deal-of-day"),
    path("nearby/",                   views.nearby_deals,                    name="deal-nearby"),
    path("merchants/",                views.MerchantListView.as_view(),      name="merchant-list"),
    path("merchants/<int:pk>/",       views.MerchantDetailView.as_view(),    name="merchant-detail"),
    path("merchants/<int:pk>/deals/", views.MerchantDealsView.as_view(),     name="merchant-deals"),
]
