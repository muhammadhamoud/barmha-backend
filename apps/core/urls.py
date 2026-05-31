from django.urls import path
from . import views

urlpatterns = [
    path("choices/",                      views.choices_view),
    path("governorates/",                 views.GovernorateListView.as_view()),
    path("locations/",                    views.LocationListView.as_view()),
    path("prayer-times/",                 views.PrayerTimeView.as_view()),
    path("contact/",                      views.ContactMessageView.as_view()),
    path("health/",                       views.health_check),
    path("settings/",                     views.SiteSettingsView.as_view()),
    path("notifications/",                views.NotificationListView.as_view()),
    path("notifications/unread-count/",   views.unread_notif_count),
    path("notifications/mark-all-read/",  views.mark_all_read),
    path("notifications/<int:pk>/read/",  views.mark_one_read),
    path("devices/register/",             views.register_fcm_device),
    path("devices/unregister/",           views.unregister_fcm_device),
    path("search/",                       views.search),
    path("price-estimate/",               views.price_estimate),
    path("listing-shares/",              views.ListingShareCreateView.as_view()),
    path("listing-shares/received/",     views.ListingShareReceivedView.as_view()),
    path("chatbot/",                     views.chatbot),
    path("map-listings/",               views.map_listings),
    path("area-alerts/",                views.DrawnAreaAlertListCreateView.as_view()),
    path("area-alerts/<int:pk>/",       views.DrawnAreaAlertDetailView.as_view()),
    path("section-counts/",             views.section_counts),
    path("top-sellers/",                views.top_sellers),
    path("home/",                       views.home_page),
   
]
