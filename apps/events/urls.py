from django.urls import path
from . import views

urlpatterns = [
    path("",                          views.EventListCreateView.as_view(),    name="event-list"),
    path("<int:pk>/",                 views.EventDetailView.as_view(),        name="event-detail"),
    path("categories/",              views.EventCategoryListView.as_view(),   name="event-category-list"),
    path("categories/<slug:slug>/",  views.EventCategoryDetailView.as_view(), name="event-category-detail"),
    path("free/",                    views.FreeEventsView.as_view(),          name="event-free"),
    path("featured/",                views.FeaturedEventsView.as_view(),      name="event-featured"),
    path("upcoming/",                views.UpcomingEventsView.as_view(),      name="event-upcoming"),
]
