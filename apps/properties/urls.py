from django.urls import path
from . import views

urlpatterns = [
    path("", views.PropertyListCreateView.as_view(), name="property-list"),
    path("<int:pk>/", views.PropertyDetailView.as_view(), name="property-detail"),
    path("<int:pk>/images/", views.upload_property_image, name="property-image-upload"),
    path("<int:pk>/contact/", views.contact_listing, name="property-contact"),
    path("<int:pk>/request-callback/", views.request_callback, name="property-callback"),
    path("<int:pk>/similar/", views.similar_listings, name="property-similar"),

    path("residential/", views.CategoryListingsView.as_view(), kwargs={"category": "residential"}, name="property-residential"),
    path("commercial/",   views.CategoryListingsView.as_view(), kwargs={"category": "commercial"},  name="property-commercial"),
    path("international/",views.CategoryListingsView.as_view(), kwargs={"category": "international"},name="property-international"),

    path("agents/",                views.AgentListView.as_view(),    name="property-agents"),
    path("agents/<int:pk>/",       views.AgentDetailView.as_view(),  name="property-agent-detail"),
    path("agents/<int:pk>/listings/", views.AgentListingsView.as_view(), name="property-agent-listings"),

    path("agencies/",                  views.AgencyListView.as_view(),   name="property-agencies"),
    path("agencies/<int:pk>/",         views.AgencyDetailView.as_view(), name="property-agency-detail"),
    path("agencies/<int:pk>/listings/",views.AgencyListingsView.as_view(),name="property-agency-listings"),

    path("nurseries/",   views.EducationListView.as_view(), kwargs={"inst_type": "nursery"},    name="property-nurseries"),
    path("schools/",     views.EducationListView.as_view(), kwargs={"inst_type": "school"},     name="property-schools"),
    path("universities/",views.EducationListView.as_view(), kwargs={"inst_type": "university"}, name="property-universities"),
    path("training/",    views.EducationListView.as_view(), kwargs={"inst_type": "training"},   name="property-training"),

    path("locations/",        views.popular_locations, name="property-locations"),
    path("popular-locations/",views.popular_locations, name="property-popular-locations"),
    path("popular-searches/", views.popular_searches,  name="property-popular-searches"),
]
