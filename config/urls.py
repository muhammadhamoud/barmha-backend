from django.contrib import admin
from django.urls import path, include

admin.site.site_header = "barmha.com Admin"
admin.site.site_title  = "barmha Admin"
admin.site.index_title = "Site Administration"
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from apps.properties.sitemaps import PropertySitemap
from apps.vehicles.sitemaps import VehicleSitemap
from apps.classifieds.sitemaps import ClassifiedSitemap
from apps.jobs.sitemaps import JobSitemap
from apps.news.sitemaps import NewsSitemap
from apps.news.feeds import LatestNewsFeed
from apps.deals.feeds import LatestDealsFeed

SITEMAPS = {
    "properties": PropertySitemap,
    "vehicles":   VehicleSitemap,
    "classifieds":ClassifiedSitemap,
    "jobs":       JobSitemap,
    "news":       NewsSitemap,
}

urlpatterns = [
    path("admin/",                       admin.site.urls),

    # API v1
    path("api/v1/accounts/",             include("apps.accounts.urls")),
    path("api/v1/properties/",           include("apps.properties.urls")),
    path("api/v1/vehicles/",             include("apps.vehicles.urls")),
    path("api/v1/classifieds/",          include("apps.classifieds.urls")),
    path("api/v1/services/",             include("apps.services.urls")),
    path("api/v1/jobs/",                 include("apps.jobs.urls")),
    path("api/v1/deals/",                include("apps.deals.urls")),
    path("api/v1/news/",                 include("apps.news.urls")),
    path("api/v1/events/",               include("apps.events.urls")),
    path("api/v1/ads/",                  include("apps.advertisements.urls")),
    path("api/v1/core/",                 include("apps.core.urls")),
    path("api/v1/messaging/",            include("apps.messaging.urls")),
    path("api/v1/reviews/",              include("apps.reviews.urls")),
    path("api/v1/moderation/",           include("apps.moderation.urls")),

    # Sitemaps
    path("sitemap.xml",      sitemap, {"sitemaps": SITEMAPS}, name="django.contrib.sitemaps.views.sitemap"),
    path("sitemap-news.xml", sitemap, {"sitemaps": {"news": NewsSitemap}}, name="news-sitemap"),

    # Atom feeds
    path("feeds/deals/", LatestDealsFeed(), name="feed-deals"),
    path("feeds/news/",  LatestNewsFeed(),  name="feed-news"),

    # OpenAPI / Swagger
    path("api/schema/",                  SpectacularAPIView.as_view(), name="schema"),
    path("api/schema/swagger-ui/",       SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
    path("api/schema/redoc/",            SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
