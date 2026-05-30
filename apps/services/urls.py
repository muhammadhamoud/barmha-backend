from django.urls import path
from . import views

urlpatterns = [
    path("", views.ServiceListCreateView.as_view(), name="service-list"),
    path("<int:pk>/", views.ServiceDetailView.as_view(), name="service-detail"),
    path("<int:pk>/view/", views.track_view, name="service-view-track"),

    path("categories/", views.ServiceCategoryListView.as_view(), name="service-categories"),

    path("providers/", views.ServiceProviderListView.as_view(), name="service-providers"),
    path("providers/<int:pk>/", views.ServiceProviderDetailView.as_view(), name="service-provider-detail"),
    path("providers/<int:pk>/listings/", views.ServiceProviderListingsView.as_view(), name="service-provider-listings"),
    path("providers/<int:pk>/reviews/", views.provider_reviews, name="service-provider-reviews"),

    path("featured/", views.FeaturedServicesView.as_view(), name="service-featured"),
]
