import mimetypes
from django.contrib import admin
from django.urls import path, include, re_path
from django.http import FileResponse, HttpResponse, Http404

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
from apps.services.sitemaps import ServiceSitemap
from apps.news.sitemaps import NewsSitemap
from apps.news.feeds import LatestNewsFeed
from apps.deals.feeds import LatestDealsFeed


def serve_angular_spa(request, path=""):
    """
    Serve Angular dist files with correct MIME types, falling back to index.html
    for HTML5 pushState routes that don't correspond to real files.
    """
    dist = settings.FRONTEND_DIST_DIR

    if path:
        file_path = dist / path
        if file_path.exists() and file_path.is_file():
            content_type, _ = mimetypes.guess_type(str(file_path))
            return FileResponse(
                open(file_path, "rb"),
                content_type=content_type or "application/octet-stream",
            )

    index = dist / "index.html"
    if not index.exists():
        raise Http404("Angular frontend not built. Run: cd frontend && ng build")
    response = HttpResponse(index.read_bytes(), content_type="text/html; charset=utf-8")
    response["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response["Pragma"] = "no-cache"
    response["Expires"] = "0"
    return response


from django.http import HttpResponse


def data_deletion(request):
    html = """
    <h1>User Data Deletion Instructions</h1>

    <p>
        If you signed in using Facebook and want your data deleted from our application,
        please send a deletion request to:
    </p>

    <p>
        <strong>support@barmha.com</strong>
    </p>

    <p>Please include the following information:</p>

    <ul>
        <li>Your registered email address</li>
        <li>Your Facebook account name or user ID, if available</li>
        <li>A clear request to delete your account/data</li>
    </ul>

    <p>
        Once we receive your request, we will delete your account data from our system
        within 30 days, unless we are required to retain certain information for legal,
        security, or fraud-prevention reasons.
    </p>
    """

    return HttpResponse(html)



SITEMAPS = {
    "properties": PropertySitemap,
    "vehicles":   VehicleSitemap,
    "classifieds":ClassifiedSitemap,
    "jobs":       JobSitemap,
    "services":   ServiceSitemap,
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
    
    
    path("data-deletion/",              data_deletion, name="data_deletion"),
    # Angular SPA catch-all — must be LAST.
    # Matches every path that isn't already handled above (not /api/, /admin/,
    # /static/, /media/, /sitemap*, /feeds/).
    # WhiteNoise serves hashed JS/CSS/media chunks before Django URL routing
    # even runs, so those assets are never caught here.
    re_path(r"^(?!api/|admin/|static/|media/|sitemap|feeds/)(?P<path>.*)$", serve_angular_spa, name="spa"),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
