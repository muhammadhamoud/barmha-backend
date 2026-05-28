from django.urls import path
from . import views

urlpatterns = [
    path("", views.VehicleListCreateView.as_view(), name="vehicle-list"),
    path("<int:pk>/", views.VehicleDetailView.as_view(), name="vehicle-detail"),
    path("<int:pk>/images/", views.upload_vehicle_image, name="vehicle-image-upload"),
    path("<int:pk>/similar/", views.similar_vehicles, name="vehicle-similar"),
    path("<int:pk>/contact/", views.contact_vehicle, name="vehicle-contact"),

    path("cars/",         views.CategoryVehiclesView.as_view(), kwargs={"category": "car"},        name="vehicle-cars"),
    path("cars-for-rent/",views.CategoryVehiclesView.as_view(), kwargs={"category": "car", "listing_type": "rent"}, name="vehicle-cars-rent"),
    path("commercial/",   views.CategoryVehiclesView.as_view(), kwargs={"category": "commercial"}, name="vehicle-commercial"),
    path("motorbikes/",   views.CategoryVehiclesView.as_view(), kwargs={"category": "motorbike"},  name="vehicle-motorbikes"),
    path("boats/",        views.CategoryVehiclesView.as_view(), kwargs={"category": "boat"},       name="vehicle-boats"),

    path("makes/",              views.VehicleMakeListView.as_view(),  name="vehicle-makes"),
    path("makes/<int:pk>/models/", views.VehicleModelListView.as_view(), name="vehicle-models"),

    path("showrooms/",                  views.ShowroomListView.as_view(),    name="vehicle-showrooms"),
    path("showrooms/<int:pk>/",         views.ShowroomDetailView.as_view(),  name="vehicle-showroom-detail"),
    path("showrooms/<int:pk>/listings/",views.ShowroomListingsView.as_view(),name="vehicle-showroom-listings"),

    path("rental-companies/", views.RentalCompanyListView.as_view(), name="vehicle-rental"),
    path("garages/",          views.GarageListView.as_view(),        name="vehicle-garages"),

    path("parts/",         views.CarPartListCreateView.as_view(), name="vehicle-parts"),
    path("parts/<int:pk>/",views.CarPartDetailView.as_view(),     name="vehicle-part-detail"),
]
