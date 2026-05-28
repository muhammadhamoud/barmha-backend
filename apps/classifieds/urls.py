from django.urls import path
from . import views

urlpatterns = [
    path("", views.ClassifiedListCreateView.as_view(), name="classified-list"),
    path("<int:pk>/", views.ClassifiedDetailView.as_view(), name="classified-detail"),
    path("<int:pk>/images/", views.upload_classified_image, name="classified-image-upload"),
    path("<int:pk>/similar/", views.similar_classifieds, name="classified-similar"),

    path("categories/", views.ClassifiedCategoryListView.as_view(), name="classified-categories"),
    path("categories/<slug:slug>/", views.ClassifiedCategoryDetailView.as_view(), name="classified-category-detail"),

    path("stores/", views.StoreListView.as_view(), name="classified-stores"),
    path("stores/<int:pk>/", views.StoreDetailView.as_view(), name="classified-store-detail"),
    path("stores/<int:pk>/listings/", views.StoreListingsView.as_view(), name="classified-store-listings"),

    path("preloved/", views.PrelovedListView.as_view(), name="classified-preloved"),
    path("featured/", views.FeaturedListView.as_view(), name="classified-featured"),
]
