import json
from django.db import models
from django.http import HttpResponse, JsonResponse
from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from .models import Governorate, Location, PrayerTime, SiteSettings, ContactMessage, Notification, FCMDevice, ListingShare, DrawnAreaAlert
from .serializers import (
    GovernorateSerializer, LocationSerializer, PrayerTimeSerializer,
    SiteSettingsSerializer, ContactMessageSerializer, NotificationSerializer, FCMDeviceSerializer,
    ListingShareSerializer, DrawnAreaAlertSerializer,
)
from .choices import CHOICES_REGISTRY
from .throttles import ContactThrottle


@api_view(["GET"])
@permission_classes([AllowAny])
def choices_view(request):
    cached = cache.get("choices_registry")
    if cached:
        return Response(cached)
    cache.set("choices_registry", CHOICES_REGISTRY, 3600)
    return Response(CHOICES_REGISTRY)


@method_decorator(cache_page(86400), name="list")
class GovernorateListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = GovernorateSerializer
    queryset = Governorate.objects.filter(is_active=True)
    pagination_class = None



class LocationListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class   = LocationSerializer
    pagination_class   = None           # return full list — reference data used by dropdowns

    def get_queryset(self):
        qs = Location.objects.select_related("governorate")
        gov = self.request.query_params.get("governorate")
        if gov:
            # Accept both numeric ID (sent by Angular frontend) and string slug
            if gov.isdigit():
                qs = qs.filter(governorate_id=int(gov))
            else:
                qs = qs.filter(governorate__slug=gov)
        popular = self.request.query_params.get("popular")
        if popular:
            qs = qs.filter(is_popular=True)
        return qs


class PrayerTimeView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = PrayerTimeSerializer

    def get_queryset(self):
        qs = PrayerTime.objects.select_related("governorate")
        gov = self.request.query_params.get("governorate")
        date = self.request.query_params.get("date")
        if gov:
            qs = qs.filter(governorate__slug=gov)
        if date:
            qs = qs.filter(date=date)
        return qs


class ContactMessageView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class   = ContactMessageSerializer
    throttle_classes   = [ContactThrottle]

    def perform_create(self, serializer):
        from apps.moderation.services import check_spam
        from rest_framework.exceptions import PermissionDenied
        data   = serializer.validated_data
        text   = f"{data.get('subject', '')} {data.get('message', '')}"
        ip     = self._get_ip()
        action = check_spam(text, user=self.request.user, ip=ip, content_type="contact")
        if action == "block":
            raise PermissionDenied("Submission rejected.")
        serializer.save()

    def _get_ip(self):
        xff = self.request.META.get("HTTP_X_FORWARDED_FOR")
        return xff.split(",")[0].strip() if xff else self.request.META.get("REMOTE_ADDR", "")


class SiteSettingsView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = SiteSettingsSerializer
    queryset = SiteSettings.objects.all()


@api_view(["GET"])
@permission_classes([AllowAny])
def health_check(request):
    checks = {"status": "ok", "db": "ok", "redis": "ok"}
    try:
        from django.db import connection
        connection.ensure_connection()
    except Exception:
        checks["db"] = "error"
        checks["status"] = "degraded"
    try:
        cache.set("health_check", "1", 5)
    except Exception:
        checks["redis"] = "error"
        checks["status"] = "degraded"
    code = 200 if checks["status"] == "ok" else 503
    return Response(checks, status=code)


class NotificationListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.filter(recipient=self.request.user)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def unread_notif_count(request):
    count = Notification.objects.filter(recipient=request.user, is_read=False).count()
    return Response({"count": count})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def mark_all_read(request):
    Notification.objects.filter(recipient=request.user, is_read=False).update(is_read=True)
    return Response({"status": "ok"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def mark_one_read(request, pk):
    try:
        notif = Notification.objects.get(pk=pk, recipient=request.user)
        notif.is_read = True
        notif.save(update_fields=["is_read"])
        return Response({"status": "ok"})
    except Notification.DoesNotExist:
        return Response({"error": "not_found"}, status=404)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def register_fcm_device(request):
    token    = request.data.get("token")
    platform = request.data.get("platform", "web")
    if not token:
        return Response({"error": "token_required"}, status=400)
    device, _ = FCMDevice.objects.update_or_create(
        token=token,
        defaults={"user": request.user, "platform": platform, "is_active": True},
    )
    return Response(FCMDeviceSerializer(device).data, status=201)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def unregister_fcm_device(request):
    token = request.data.get("token")
    FCMDevice.objects.filter(user=request.user, token=token).update(is_active=False)
    return Response({"status": "ok"})


@api_view(["GET"])
@permission_classes([AllowAny])
def llms_txt(request):
    content = """# barmha.com

> Syria's leading community classifieds platform — real estate, vehicles, jobs, deals, news, and events.

## What barmha.com offers

- **Properties**: Thousands of residential and commercial listings for rent and sale across Syria.
- **Vehicles**: Cars for sale and rent, motorbikes, boats, commercial vehicles.
- **Classifieds**: Buy and sell furniture, electronics, fashion, kids items, pets, sports equipment.
- **Jobs**: Job listings, freelancer profiles, company profiles, quick apply.
- **Deals**: Merchant deals, Buy1Get1, discounts, bundles across Syria.
- **News**: Syria, Middle East, world news, sports, lifestyle, business.
- **Events**: Community events in Syria with date, location, category filters.
- **Services**: Service providers across 13 categories.

## API — Machine-Readable Data

All listings are available via a public REST API. No authentication required for read-only access.

- Properties list: /api/v1/properties/
- Vehicles list:   /api/v1/vehicles/
- Jobs list:       /api/v1/jobs/
- News list:       /api/v1/news/
- Events list:     /api/v1/events/
- Deals list:      /api/v1/deals/
- Full OpenAPI spec: /api/schema/swagger-ui/

## Languages

All content available in English and Arabic.

## Location

Syria (SY). Primary currency: SYP (Syrian Pound) / USD.
"""
    return HttpResponse(content, content_type="text/plain; charset=utf-8")


@api_view(["GET"])
@permission_classes([AllowAny])
def ai_plugin_manifest(request):
    return JsonResponse({
        "schema_version": "v1",
        "name_for_human": "barmha.com",
        "name_for_model": "barmha",
        "description_for_human": "Search Syria's leading classifieds — properties, vehicles, jobs, deals, news, and events.",
        "description_for_model": (
            "Use barmha to search real estate listings, vehicles, jobs, classifieds, "
            "deals, news, and events in Syria. Prices are in SYP or USD."
        ),
        "auth": {"type": "none"},
        "api": {"type": "openapi", "url": "/api/schema/"},
        "logo_url": "/static/logo.png",
        "contact_email": "api@barmha.com",
        "legal_info_url": "/en/terms/",
    })


@api_view(["GET"])
@permission_classes([AllowAny])
def search(request):
    """
    Cross-section search.
    GET /api/v1/core/search/?q=<query>[&section=<key>][&page_size=<n>]

    Returns rich, card-ready items grouped by section.
    Each item includes: id, section, title, price, currency, hide_price,
    primary_image_url, location_name, created_at, url.

    Autocomplete mode (?suggest=1): returns flat list of top-N suggestions
    with {id, section, title, icon, url} — fast, no images.
    """
    from apps.properties.models import PropertyListing
    from apps.properties.serializers import PropertyListSerializer
    from apps.vehicles.models import VehicleListing
    from apps.vehicles.serializers import VehicleListSerializer
    from apps.classifieds.models import ClassifiedListing
    from apps.classifieds.serializers import ClassifiedListSerializer
    from apps.jobs.models import JobListing
    from apps.jobs.serializers import JobListSerializer
    from apps.services.models import ServiceListing
    from apps.services.serializers import ServiceListingSerializer
    from apps.deals.models import Deal
    from apps.events.models import Event
    from apps.news.models import NewsArticle

    query     = request.query_params.get("q", "").strip()
    section   = request.query_params.get("section", "all")
    page_size = min(int(request.query_params.get("page_size", 8)), 30)
    suggest   = request.query_params.get("suggest", "0") == "1"

    if not query or len(query) < 2:
        return Response({"query": query, "results": {}})

    ctx = {"request": request}

    def _serialize_properties():
        qs = (PropertyListing.objects
              .filter(is_active=True, title__icontains=query)
              .select_related("location__governorate", "agency", "agent__user")
              .prefetch_related("images")[:page_size])
        return PropertyListSerializer(qs, many=True, context=ctx).data

    def _serialize_vehicles():
        qs = (VehicleListing.objects
              .filter(is_active=True, title__icontains=query)
              .select_related("make", "model", "location", "showroom")
              .prefetch_related("images")[:page_size])
        return VehicleListSerializer(qs, many=True, context=ctx).data

    def _serialize_classifieds():
        qs = (ClassifiedListing.objects
              .filter(is_active=True)
              .filter(translations__title__icontains=query)
              .select_related("location", "store", "seller")
              .prefetch_related("images")[:page_size])
        return ClassifiedListSerializer(qs, many=True, context=ctx).data

    def _serialize_jobs():
        from apps.jobs.models import JobListing
        qs = (JobListing.objects
              .filter(is_active=True)
              .filter(translations__title__icontains=query)[:page_size])
        return JobListSerializer(qs, many=True, context=ctx).data

    def _serialize_services():
        qs = (ServiceListing.objects
              .filter(is_active=True)
              .filter(translations__title__icontains=query)
              .select_related("provider__user", "location")
              .prefetch_related("images")[:page_size])
        return ServiceListingSerializer(qs, many=True, context=ctx).data

    def _serialize_news():
        qs = (NewsArticle.objects
              .filter(is_published=True)
              .filter(translations__title__icontains=query)
              .prefetch_related("images")[:page_size])
        # Lightweight news result — just what the frontend needs for a card
        results = []
        for obj in qs:
            title = obj.safe_translation_getter("title", any_language=True) or ""
            img = obj.images.first()
            results.append({
                "id":               obj.pk,
                "section":          "news",
                "title":            title,
                "price":            None,
                "currency":         "SYP",
                "hide_price":       False,
                "primary_image_url": img.image.url if img and img.image else None,
                "location_name":    None,
                "created_at":       obj.published_at.isoformat() if getattr(obj, "published_at", None) else "",
                "url":              f"/news/{obj.pk}",
            })
        return results

    def _serialize_deals():
        qs = (Deal.objects
              .filter(is_active=True)
              .filter(translations__title__icontains=query)[:page_size])
        results = []
        for obj in qs:
            title = obj.safe_translation_getter("title", any_language=True) or ""
            results.append({
                "id":               obj.pk,
                "section":          "deals",
                "title":            title,
                "price":            float(obj.deal_price) if getattr(obj, "deal_price", None) else None,
                "currency":         getattr(obj, "currency", "SYP"),
                "hide_price":       False,
                "primary_image_url": obj.image.url if getattr(obj, "image", None) and obj.image else None,
                "location_name":    None,
                "created_at":       obj.created_at.isoformat() if getattr(obj, "created_at", None) else "",
                "url":              f"/deals/{obj.pk}",
            })
        return results

    def _serialize_events():
        qs = (Event.objects
              .filter(is_active=True)
              .filter(translations__title__icontains=query)[:page_size])
        results = []
        for obj in qs:
            title = obj.safe_translation_getter("title", any_language=True) or ""
            img   = obj.images.first() if hasattr(obj, "images") else None
            results.append({
                "id":               obj.pk,
                "section":          "events",
                "title":            title,
                "price":            None,
                "currency":         "SYP",
                "hide_price":       False,
                "primary_image_url": img.image.url if img and img.image else None,
                "location_name":    obj.venue_name or None,
                "created_at":       obj.start_date.isoformat() if getattr(obj, "start_date", None) else "",
                "url":              f"/events/{obj.pk}",
            })
        return results

    SECTION_LOADERS = {
        "properties":  _serialize_properties,
        "vehicles":    _serialize_vehicles,
        "classifieds": _serialize_classifieds,
        "jobs":        _serialize_jobs,
        "services":    _serialize_services,
        "news":        _serialize_news,
        "deals":       _serialize_deals,
        "events":      _serialize_events,
    }

    targets = {section: SECTION_LOADERS[section]} if section in SECTION_LOADERS else SECTION_LOADERS

    results = {}
    for key, loader in targets.items():
        try:
            raw = loader()
            # Normalise list-serializer output — add section + url if missing
            items = []
            for item in raw:
                if isinstance(item, dict):
                    d = dict(item)
                else:
                    d = dict(item)
                d.setdefault("section", key)
                d.setdefault("url", f"/{key}/{d.get('id', '')}")
                # Flatten primary_image to primary_image_url if needed
                if "primary_image" in d and "primary_image_url" not in d:
                    pi = d.get("primary_image")
                    d["primary_image_url"] = (pi.get("card") or pi.get("thumbnail")) if pi else None
                items.append(d)
            results[key] = items
        except Exception:
            results[key] = []

    # Suggest mode: return flat top-6 list ordered by section relevance
    if suggest:
        SECTION_PRIORITY = ["properties", "vehicles", "classifieds", "jobs", "services", "deals", "events", "news"]
        flat = []
        for sec in SECTION_PRIORITY:
            for item in results.get(sec, [])[:2]:
                title = item.get("title") or ""
                if not title:
                    # parler translated items may have translations dict
                    tr = item.get("translations", {})
                    title = (tr.get("ar", {}).get("title") or tr.get("en", {}).get("title") or "")
                flat.append({
                    "id":      item.get("id"),
                    "section": sec,
                    "title":   title,
                    "url":     item.get("url") or f"/{sec}/{item.get('id', '')}",
                })
        return Response(flat[:8])

    return Response({"query": query, "section": section, "results": results})


@api_view(["GET"])
@permission_classes([AllowAny])
def robots_txt(request):
    content = """User-agent: *
Allow: /

User-agent: GPTBot
Allow: /en/
Allow: /ar/
Allow: /api/v1/properties/
Allow: /api/v1/vehicles/
Allow: /api/v1/classifieds/
Allow: /api/v1/jobs/
Allow: /api/v1/news/
Allow: /api/v1/events/
Allow: /api/v1/deals/
Disallow: /api/v1/auth/
Disallow: /admin/

User-agent: ClaudeBot
Allow: /
Disallow: /admin/
Disallow: /api/v1/auth/

User-agent: PerplexityBot
Allow: /
Disallow: /admin/
Disallow: /api/v1/auth/

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: /sitemap.xml
Sitemap: /sitemap-news.xml
"""
    return HttpResponse(content, content_type="text/plain")


# ── Price Estimation ──────────────────────────────────────────────────────────

@api_view(["GET"])
@permission_classes([AllowAny])
def price_estimate(request):
    """
    GET /core/price-estimate/?section=properties&category=apartment&governorate_id=1
    Returns {min, max, avg, count} based on similar active listings.
    Supported sections: properties, vehicles, classifieds.
    """
    from django.db.models import Min, Max, Avg, Count

    section       = request.query_params.get("section", "").strip()
    category      = request.query_params.get("category", "").strip()
    governorate_id = request.query_params.get("governorate_id")

    def _stats(qs):
        agg = qs.filter(price__isnull=False, price__gt=0).aggregate(
            min_price   = Min("price"),
            max_price   = Max("price"),
            avg_price   = Avg("price"),
            sample_count = Count("id"),
        )
        if not agg["sample_count"]:
            return None
        return {
            "min":   float(agg["min_price"]   or 0),
            "max":   float(agg["max_price"]   or 0),
            "avg":   round(float(agg["avg_price"] or 0)),
            "count": agg["sample_count"],
        }

    try:
        if section == "properties":
            from apps.properties.models import PropertyListing
            qs = PropertyListing.objects.filter(is_active=True, hide_price=False)
            if category:
                qs = qs.filter(category=category)
            if governorate_id:
                qs = qs.filter(location__governorate_id=governorate_id)
            result = _stats(qs)

        elif section == "vehicles":
            from apps.vehicles.models import VehicleListing
            qs = VehicleListing.objects.filter(is_active=True, hide_price=False)
            if category:
                qs = qs.filter(vehicle_type=category)
            if governorate_id:
                qs = qs.filter(location__governorate_id=governorate_id)
            result = _stats(qs)

        elif section == "classifieds":
            from apps.classifieds.models import ClassifiedListing
            qs = ClassifiedListing.objects.filter(is_active=True, hide_price=False)
            if category:
                qs = qs.filter(category__slug=category)
            if governorate_id:
                qs = qs.filter(location__governorate_id=governorate_id)
            result = _stats(qs)

        else:
            return Response({"detail": "section must be one of: properties, vehicles, classifieds"},
                            status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    if result is None:
        return Response({"count": 0}, status=status.HTTP_200_OK)

    return Response(result)


# ─────────────────────────────────────────────────────────────────────────────
# Listing Sharing
# ─────────────────────────────────────────────────────────────────────────────

def _get_listing_title(section: str, listing_id: int) -> str:
    """Attempt to retrieve the listing title for the notification body."""
    try:
        if section == "properties":
            from apps.properties.models import PropertyListing
            obj = PropertyListing.objects.filter(pk=listing_id).first()
        elif section == "vehicles":
            from apps.vehicles.models import VehicleListing
            obj = VehicleListing.objects.filter(pk=listing_id).first()
        elif section == "classifieds":
            from apps.classifieds.models import ClassifiedListing
            obj = ClassifiedListing.objects.filter(pk=listing_id).first()
        elif section == "jobs":
            from apps.jobs.models import JobListing
            obj = JobListing.objects.filter(pk=listing_id).first()
        elif section == "services":
            from apps.services.models import ServiceListing
            obj = ServiceListing.objects.filter(pk=listing_id).first()
        else:
            obj = None
        if obj is None:
            return ""
        return obj.safe_translation_getter("title", any_language=True) or ""
    except Exception:
        return ""


class ListingShareCreateView(generics.CreateAPIView):
    """
    POST /core/listing-shares/
    Body: { recipient: <id>, section: "properties"|..., listing_id: <id>, note: "" }
    Creates the share record and sends a bilingual notification to the recipient.
    """
    permission_classes = [IsAuthenticated]
    serializer_class   = ListingShareSerializer

    def perform_create(self, serializer):
        share = serializer.save(sender=self.request.user)
        self._notify_recipient(share)

    @staticmethod
    def _notify_recipient(share):
        sender_name = share.sender.get_full_name() or share.sender.username or share.sender.email.split("@")[0]
        listing_title = _get_listing_title(share.section, share.listing_id)
        # Determine a nice section name for the notification
        section_ar = {
            "properties": "عقار", "vehicles": "مركبة", "classifieds": "إعلان",
            "jobs": "وظيفة", "services": "خدمة", "deals": "عرض", "events": "حدث",
        }.get(share.section, "إعلان")
        section_en = {
            "properties": "property", "vehicles": "vehicle", "classifieds": "classified",
            "jobs": "job", "services": "service", "deals": "deal", "events": "event",
        }.get(share.section, "listing")

        action_url = f"/{share.section}/{share.listing_id}"

        title_ar = f"أرسل إليك {sender_name} {section_ar}"
        body_ar   = listing_title or f"اضغط لعرض الإعلان"
        title_en  = f"{sender_name} shared a {section_en} with you"
        body_en   = listing_title or "Tap to view the listing"

        n = Notification(
            recipient=share.recipient,
            notif_type="listing_shared",
            action_url=action_url,
        )
        n.save()
        n.set_current_language("ar")
        n.title = title_ar
        n.body  = body_ar
        n.save()
        n.set_current_language("en")
        n.title = title_en
        n.body  = body_en
        n.save()


class ListingShareReceivedView(generics.ListAPIView):
    """
    GET /core/listing-shares/received/
    Returns all listing shares received by the current user (newest first).
    """
    permission_classes = [IsAuthenticated]
    serializer_class   = ListingShareSerializer

    def get_queryset(self):
        return ListingShare.objects.filter(recipient=self.request.user).select_related("sender")


# ─────────────────────────────────────────────────────────────────────────────
# In-App Chatbot
# ─────────────────────────────────────────────────────────────────────────────

_CHATBOT_SYSTEM_AR = """
أنت مساعد ذكي لموقع "بَرمها" (barmha.com) — منصة إعلانات مبوبة سورية تدعم القسمات التالية:
• العقارات (بيع وإيجار شقق، فلل، مكاتب، أراضي)
• السيارات والمركبات (جديدة ومستعملة، قطع غيار، معارض)
• الإعلانات المبوبة (إلكترونيات، ملابس، أثاث، حيوانات أليفة)
• الوظائف (بحث عن عمل، نشر وظائف)
• الخدمات (سباكة، كهرباء، دروس خصوصية، تصميم…)
• العروض والخصومات
• الفعاليات والأحداث
• الأخبار

يمكنك مساعدة المستخدمين في:
- كيفية نشر إعلان (الخطوات الخمس)
- البحث والتصفية والتنقل
- إضافة إعلان للمفضلة والمراسلة ومشاركة الإعلان
- الإجابة على أسئلة المستخدمين باختصار ووضوح
- التنقل بين الأقسام

قوانين:
1. أجب فقط عن الموقع وخدماته والإعلانات. لا تتحدث عن مواضيع خارجة عن النطاق.
2. لا تشارك معلومات شخصية أو بيانات مستخدمين آخرين.
3. كن ودوداً وموجزاً. لا تتجاوز 3 جمل في معظم الردود.
4. إذا لم تعرف إجابةً، قل ذلك ببساطة واقترح التواصل مع الدعم.
""".strip()

_CHATBOT_SYSTEM_EN = """
You are a smart assistant for "barmha.com" — a Syrian classifieds platform with sections:
• Properties (apartments, villas, offices, land — sale & rent)
• Vehicles (new/used cars, spare parts, showrooms)
• Classifieds (electronics, clothing, furniture, pets)
• Jobs (job search, post jobs)
• Services (plumbing, electrical, tutoring, design…)
• Deals & discounts
• Events
• News

You can help users with:
- How to post a listing (5 steps: category → details → images → location → preview)
- Searching, filtering, and browsing
- Favourites, in-app messaging, and listing sharing
- General navigation questions

Rules:
1. Only answer questions about this platform and its listings. Do not discuss unrelated topics.
2. Never share personal info or other users' data.
3. Be friendly and concise — 1–3 sentences per reply is ideal.
4. If you don't know, say so and suggest contacting support.
""".strip()

_CHATBOT_FALLBACK_AR = (
    "عذراً، خدمة الذكاء الاصطناعي غير متاحة حالياً. "
    "يمكنك تصفح الأقسام أو التواصل مع الدعم من خلال صفحة 'اتصل بنا'."
)
_CHATBOT_FALLBACK_EN = (
    "Sorry, the AI service is temporarily unavailable. "
    "You can browse sections or contact support via the 'Contact Us' page."
)


@api_view(["POST"])
@permission_classes([AllowAny])
def chatbot(request):
    """
    POST /core/chatbot/
    Body: { message: str, history: [{role:"user"|"assistant", content:str}, …], language: "ar"|"en" }
    Returns: { reply: str }

    Uses the Anthropic Claude API when ANTHROPIC_API_KEY is set in env.
    Falls back to a polite 'service unavailable' message when the key is absent.
    """
    message  = (request.data.get("message") or "").strip()
    history  = request.data.get("history") or []
    language = (request.data.get("language") or "ar").strip()

    if not message:
        return Response({"detail": "message is required"}, status=status.HTTP_400_BAD_REQUEST)

    from django.conf import settings
    api_key = getattr(settings, "ANTHROPIC_API_KEY", None) or __import__("os").environ.get("ANTHROPIC_API_KEY", "")

    if not api_key:
        fallback = _CHATBOT_FALLBACK_AR if language == "ar" else _CHATBOT_FALLBACK_EN
        return Response({"reply": fallback})

    try:
        import anthropic as _anthropic_sdk
        client = _anthropic_sdk.Anthropic(api_key=api_key)

        system_prompt = _CHATBOT_SYSTEM_AR if language == "ar" else _CHATBOT_SYSTEM_EN

        # Build message list: history + new user message (max last 10 turns)
        messages = []
        for h in history[-10:]:
            role = h.get("role", "user")
            content = h.get("content", "")
            if role in ("user", "assistant") and content:
                messages.append({"role": role, "content": content})
        messages.append({"role": "user", "content": message})

        response = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=400,
            system=system_prompt,
            messages=messages,
        )
        reply = response.content[0].text if response.content else ""
        return Response({"reply": reply})

    except Exception as exc:
        fallback = _CHATBOT_FALLBACK_AR if language == "ar" else _CHATBOT_FALLBACK_EN
        return Response({"reply": fallback})


# ─────────────────────────────────────────────────────────────────────────────
# Map Listings
# ─────────────────────────────────────────────────────────────────────────────

def _wkt_polygon_to_points(wkt: str):
    """Parse a POLYGON WKT and return list of (lng, lat) float tuples, or None."""
    import re
    m = re.search(r'POLYGON\s*\(\s*\((.+?)\)\s*\)', wkt, re.IGNORECASE)
    if not m:
        return None
    coords_str = m.group(1)
    points = []
    for pair in coords_str.split(','):
        parts = pair.strip().split()
        if len(parts) >= 2:
            try:
                points.append((float(parts[0]), float(parts[1])))
            except ValueError:
                pass
    return points if len(points) >= 3 else None


def _point_in_polygon(lng: float, lat: float, polygon) -> bool:
    """Ray-casting point-in-polygon. polygon = list of (lng, lat) tuples."""
    n = len(polygon)
    inside = False
    j = n - 1
    for i in range(n):
        xi, yi = polygon[i]
        xj, yj = polygon[j]
        if ((yi > lat) != (yj > lat)) and (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi):
            inside = not inside
        j = i
    return inside


def _loc_display(loc):
    """Return the best human-readable name for a Location object (or None)."""
    if not loc:
        return None
    city = loc.safe_translation_getter("city", any_language=True) or ""
    name = loc.safe_translation_getter("name", any_language=True) or ""
    return (name or city) or None


def _safe_thumb(request, img):
    """Return an absolute thumbnail URL, falling back gracefully."""
    try:
        url = img.card.url
    except Exception:
        try:
            url = img.image.url
        except Exception:
            return None
    return request.build_absolute_uri(url) if url else None


_GOV_CENTERS = {
    "damascus":    (33.5102, 36.2919),
    "rif_dimashq": (33.5000, 36.5000),
    "aleppo":      (36.2021, 37.1343),
    "homs":        (34.7324, 36.7137),
    "hama":        (35.1318, 36.7520),
    "latakia":     (35.5317, 35.7911),
    "tartus":      (34.8956, 35.8866),
    "idlib":       (35.9300, 36.6341),
    "deir_ezzor":  (35.3336, 40.1408),
    "hasakah":     (36.5118, 40.7421),
    "raqqa":       (35.9497, 39.0094),
    "daraa":       (32.6189, 36.1021),
    "suwayda":     (32.7086, 36.5673),
    "quneitra":    (33.1261, 35.8243),
}


def _resolve_lat_lng(lat, lng, location=None, governorate=None):
    """Return (lat, lng) falling back to location coords then governorate centre."""
    if lat is not None and lng is not None:
        return float(lat), float(lng)
    if location is not None:
        if location.latitude is not None and location.longitude is not None:
            return float(location.latitude), float(location.longitude)
        gov = getattr(location, "governorate", None) or governorate
        if gov:
            center = _GOV_CENTERS.get(gov.slug)
            if center:
                return center
    if governorate is not None:
        center = _GOV_CENTERS.get(governorate.slug)
        if center:
            return center
    return None, None


@api_view(["GET"])
@permission_classes([AllowAny])
def map_listings(request):
    """
    GET /core/map-listings/
    Returns a flat list of active listings with valid lat/lng within the given bounding box.

    Query params:
      lat_min, lat_max, lng_min, lng_max  — viewport bounding box
      section    — one of: properties, vehicles, classifieds, jobs, services, events
      price_min  — minimum price (inclusive)
      price_max  — maximum price (inclusive)
      governorate — governorate id
      polygon    — WKT polygon string (drawn area filter)
      page_size  — default 100, max 200
    """
    p = request.query_params

    try:
        lat_min = float(p["lat_min"])
        lat_max = float(p["lat_max"])
        lng_min = float(p["lng_min"])
        lng_max = float(p["lng_max"])
    except (KeyError, ValueError, TypeError):
        lat_min = lat_max = lng_min = lng_max = None

    section_filter = p.get("section", "").strip()
    price_min      = p.get("price_min")
    price_max      = p.get("price_max")
    gov_id         = p.get("governorate")
    wkt            = p.get("polygon", "").strip()
    page_size      = min(int(p.get("page_size", 100)), 200)

    polygon_pts = _wkt_polygon_to_points(wkt) if wkt else None

    results = []

    def _to_map_item(obj, section, lat, lng, title, price, currency, thumbnail, location_name, created_at):
        """Build a MapListing dict and optionally apply polygon filter."""
        if lat is None or lng is None:
            return None
        lat_f, lng_f = lat, lng  # already floats from _resolve_lat_lng
        if polygon_pts and not _point_in_polygon(lng_f, lat_f, polygon_pts):
            return None
        return {
            "id":            obj.pk,
            "section":       section,
            "title":         title or "",
            "price":         float(price) if price is not None else None,
            "currency":      currency or "SYP",
            "thumbnail":     thumbnail,
            "latitude":      lat_f,
            "longitude":     lng_f,
            "location_name": location_name,
            "created_at":    created_at.isoformat() if hasattr(created_at, "isoformat") else str(created_at),
        }

    # ── PROPERTIES ───────────────────────────────────────────────────────────
    if not section_filter or section_filter == "properties":
        from apps.properties.models import PropertyListing
        from django.db.models import Q as DQ
        qs = (PropertyListing.objects
              .filter(is_active=True)
              .filter(
                  DQ(latitude__isnull=False) |
                  DQ(location__latitude__isnull=False)
              )
              .select_related("location__governorate")
              .prefetch_related("images"))
        if lat_min is not None:
            qs = qs.filter(
                DQ(latitude__gte=lat_min, latitude__lte=lat_max,
                   longitude__gte=lng_min, longitude__lte=lng_max) |
                DQ(location__latitude__gte=lat_min, location__latitude__lte=lat_max,
                   location__longitude__gte=lng_min, location__longitude__lte=lng_max)
            )
        if price_min:
            try:
                qs = qs.filter(price__gte=float(price_min))
            except ValueError:
                pass
        if price_max:
            try:
                qs = qs.filter(price__lte=float(price_max))
            except ValueError:
                pass
        if gov_id:
            qs = qs.filter(location__governorate_id=gov_id)
        for obj in qs[:page_size]:
            lat, lng = _resolve_lat_lng(obj.latitude, obj.longitude, obj.location)
            img = (obj.images.filter(is_primary=True).first() or obj.images.first())
            thumb = _safe_thumb(request, img) if img else None
            loc_name = _loc_display(obj.location)
            item = _to_map_item(
                obj, "properties", lat, lng,
                obj.title, obj.price if not obj.hide_price else None,
                obj.currency, thumb, loc_name, obj.created_at,
            )
            if item:
                results.append(item)

    # ── VEHICLES ─────────────────────────────────────────────────────────────
    if not section_filter or section_filter == "vehicles":
        from apps.vehicles.models import VehicleListing
        qs = (VehicleListing.objects
              .filter(is_active=True, location__isnull=False)
              .select_related("location__governorate")
              .prefetch_related("images"))
        if lat_min is not None:
            qs = qs.filter(
                location__latitude__gte=lat_min,  location__latitude__lte=lat_max,
                location__longitude__gte=lng_min, location__longitude__lte=lng_max,
            )
        if price_min:
            try:
                qs = qs.filter(price__gte=float(price_min))
            except ValueError:
                pass
        if price_max:
            try:
                qs = qs.filter(price__lte=float(price_max))
            except ValueError:
                pass
        if gov_id:
            qs = qs.filter(location__governorate_id=gov_id)
        for obj in qs[:page_size]:
            lat, lng = _resolve_lat_lng(None, None, obj.location)
            img = (obj.images.filter(is_primary=True).first() or obj.images.first())
            thumb = _safe_thumb(request, img) if img else None
            loc_name = _loc_display(obj.location)
            item = _to_map_item(
                obj, "vehicles", lat, lng,
                obj.title, obj.price if not obj.hide_price else None,
                obj.currency, thumb, loc_name, obj.created_at,
            )
            if item:
                results.append(item)

    # ── CLASSIFIEDS ───────────────────────────────────────────────────────────
    if not section_filter or section_filter == "classifieds":
        from apps.classifieds.models import ClassifiedListing
        qs = (ClassifiedListing.objects
              .filter(is_active=True, location__isnull=False)
              .select_related("location__governorate")
              .prefetch_related("images"))
        if lat_min is not None:
            qs = qs.filter(
                location__latitude__gte=lat_min,  location__latitude__lte=lat_max,
                location__longitude__gte=lng_min, location__longitude__lte=lng_max,
            )
        if price_min:
            try:
                qs = qs.filter(price__gte=float(price_min))
            except ValueError:
                pass
        if price_max:
            try:
                qs = qs.filter(price__lte=float(price_max))
            except ValueError:
                pass
        if gov_id:
            qs = qs.filter(location__governorate_id=gov_id)
        for obj in qs[:page_size]:
            lat, lng = _resolve_lat_lng(None, None, obj.location)
            img = (obj.images.filter(is_primary=True).first() or obj.images.first())
            thumb = _safe_thumb(request, img) if img else None
            title = obj.safe_translation_getter("title", any_language=True) or ""
            loc_name = _loc_display(obj.location)
            item = _to_map_item(
                obj, "classifieds", lat, lng,
                title, obj.price if not obj.hide_price else None,
                obj.currency, thumb, loc_name, obj.created_at,
            )
            if item:
                results.append(item)

    # ── JOBS ──────────────────────────────────────────────────────────────────
    if not section_filter or section_filter == "jobs":
        from apps.jobs.models import JobListing
        qs = (JobListing.objects
              .filter(is_active=True, location__isnull=False)
              .select_related("location__governorate"))
        if lat_min is not None:
            qs = qs.filter(
                location__latitude__gte=lat_min,  location__latitude__lte=lat_max,
                location__longitude__gte=lng_min, location__longitude__lte=lng_max,
            )
        if gov_id:
            qs = qs.filter(location__governorate_id=gov_id)
        for obj in qs[:page_size]:
            lat, lng = _resolve_lat_lng(None, None, obj.location)
            title = obj.safe_translation_getter("title", any_language=True) or ""
            salary = obj.min_salary if (not getattr(obj, "hide_salary", False) and obj.min_salary) else None
            loc_name = _loc_display(obj.location)
            item = _to_map_item(
                obj, "jobs", lat, lng,
                title, salary, obj.currency, None, loc_name, obj.created_at,
            )
            if item:
                results.append(item)

    # ── SERVICES ──────────────────────────────────────────────────────────────
    if not section_filter or section_filter == "services":
        from apps.services.models import ServiceListing
        qs = (ServiceListing.objects
              .filter(is_active=True, location__isnull=False)
              .select_related("location__governorate"))
        if lat_min is not None:
            qs = qs.filter(
                location__latitude__gte=lat_min,  location__latitude__lte=lat_max,
                location__longitude__gte=lng_min, location__longitude__lte=lng_max,
            )
        if price_min:
            try:
                qs = qs.filter(price__gte=float(price_min))
            except ValueError:
                pass
        if price_max:
            try:
                qs = qs.filter(price__lte=float(price_max))
            except ValueError:
                pass
        if gov_id:
            qs = qs.filter(location__governorate_id=gov_id)
        for obj in qs[:page_size]:
            lat, lng = _resolve_lat_lng(None, None, obj.location)
            title = obj.safe_translation_getter("title", any_language=True) or ""
            loc_name = _loc_display(obj.location)
            item = _to_map_item(
                obj, "services", lat, lng,
                title, obj.price, obj.currency, None, loc_name, obj.created_at,
            )
            if item:
                results.append(item)

    # ── EVENTS ────────────────────────────────────────────────────────────────
    if not section_filter or section_filter == "events":
        from apps.events.models import Event
        qs = (Event.objects
              .filter(is_active=True, latitude__isnull=False, longitude__isnull=False)
              .prefetch_related("images"))
        if lat_min is not None:
            qs = qs.filter(
                latitude__gte=lat_min,  latitude__lte=lat_max,
                longitude__gte=lng_min, longitude__lte=lng_max,
            )
        for obj in qs[:page_size]:
            img = obj.images.first() if hasattr(obj, "images") else None
            thumb = _safe_thumb(request, img) if img else None
            title = obj.safe_translation_getter("title", any_language=True) or ""
            item = _to_map_item(
                obj, "events", obj.latitude, obj.longitude,
                title, None, "SYP", thumb, obj.venue_name or None, obj.start_date,
            )
            if item:
                results.append(item)

    return Response(results[:page_size])


# ─────────────────────────────────────────────────────────────────────────────
# Drawn Area Alerts
# ─────────────────────────────────────────────────────────────────────────────

class DrawnAreaAlertListCreateView(generics.ListCreateAPIView):
    """GET /core/area-alerts/  •  POST /core/area-alerts/"""
    permission_classes = [IsAuthenticated]
    serializer_class   = DrawnAreaAlertSerializer

    def get_queryset(self):
        return DrawnAreaAlert.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class DrawnAreaAlertDetailView(generics.RetrieveUpdateDestroyAPIView):
    """GET/PATCH/DELETE /core/area-alerts/<pk>/"""
    permission_classes = [IsAuthenticated]
    serializer_class   = DrawnAreaAlertSerializer

    def get_queryset(self):
        return DrawnAreaAlert.objects.filter(user=self.request.user)


@api_view(["GET"])
@permission_classes([AllowAny])
def section_counts(request):
    """GET /core/section-counts/?governorate=<id> — active listing counts per section (cached 5 min)."""
    gov = request.query_params.get("governorate")
    cache_key = f"section_counts_{gov or 'all'}"
    cached = cache.get(cache_key)
    if cached:
        return Response(cached)

    from apps.properties.models import PropertyListing
    from apps.vehicles.models import VehicleListing
    from apps.classifieds.models import ClassifiedListing
    from apps.jobs.models import JobListing
    from apps.services.models import ServiceListing
    from apps.deals.models import Deal
    from apps.events.models import Event

    def _f(qs, gov):
        return qs if not gov else qs.filter(location__governorate=gov)

    counts = {
        "properties":  _f(PropertyListing.objects.filter(is_active=True), gov).count(),
        "vehicles":    _f(VehicleListing.objects.filter(is_active=True), gov).count(),
        "classifieds": _f(ClassifiedListing.objects.filter(is_active=True), gov).count(),
        "jobs":        _f(JobListing.objects.filter(is_active=True), gov).count(),
        "services":    _f(ServiceListing.objects.filter(is_active=True), gov).count(),
        "deals":       Deal.objects.filter(is_active=True).count() if not gov else
                       Deal.objects.filter(is_active=True, merchant__location__governorate=gov).count(),
        "events":      _f(Event.objects.filter(is_active=True), gov).count(),
    }
    cache.set(cache_key, counts, 300)
    return Response(counts)


@api_view(["GET"])
@permission_classes([AllowAny])
def top_sellers(request):
    """GET /core/top-sellers/ — top 10 sellers ranked by active listing count."""
    from django.db.models import Q, Count, Value, CharField
    from django.db.models.functions import Coalesce
    from apps.accounts.models import User
    from apps.properties.models import PropertyListing
    from apps.vehicles.models import VehicleListing
    from apps.classifieds.models import ClassifiedListing
    from apps.jobs.models import JobListing
    from apps.services.models import ServiceListing

    # Aggregate active listing counts per user across direct-FK sections.
    # Services use a through-table (ServiceProvider) so excluded here.
    users = (
        User.objects
        .annotate(
            prop_count=Count("property_listings",   filter=Q(property_listings__is_active=True),   distinct=True),
            veh_count =Count("vehicle_listings",    filter=Q(vehicle_listings__is_active=True),     distinct=True),
            cls_count =Count("classified_listings", filter=Q(classified_listings__is_active=True),  distinct=True),
            job_count =Count("job_listings",        filter=Q(job_listings__is_active=True),         distinct=True),
        )
        .annotate(
            listing_count=models.ExpressionWrapper(
                models.F("prop_count") + models.F("veh_count") + models.F("cls_count") +
                models.F("job_count"),
                output_field=models.IntegerField(),
            )
        )
        .filter(listing_count__gt=0)
        .order_by("-listing_count")
        [:10]
    )

    result = []
    for u in users:
        try:
            avatar_url = u.avatar_thumbnail.url if u.avatar_thumbnail else None
        except Exception:
            avatar_url = None
        if not avatar_url:
            avatar_url = u.social_avatar_url or None

        name = u.get_full_name() or u.username or u.email.split("@")[0]
        result.append({
            "id":            u.id,
            "name":          name,
            "avatar_url":    avatar_url,
            "listing_count": u.listing_count,
            "type":          "user",
        })

    return Response(result)


@api_view(["GET"])
@permission_classes([AllowAny])
def home_page(request):
    """
    GET /core/home/
    Single endpoint that returns everything the home page needs.
    For each section: returns featured/promoted items; falls back to most-recent
    if none exist so carousels are never empty.
    """
    from apps.properties.models import PropertyListing
    from apps.properties.serializers import PropertyListSerializer
    from apps.vehicles.models import VehicleListing
    from apps.vehicles.serializers import VehicleListSerializer
    from apps.classifieds.models import ClassifiedListing
    from apps.classifieds.serializers import ClassifiedListSerializer
    from apps.jobs.models import JobListing
    from apps.jobs.serializers import JobListSerializer
    from apps.services.models import ServiceListing
    from apps.services.serializers import ServiceListingSerializer
    from apps.accounts.models import User
    from django.db.models import Q, Count

    ctx  = {"request": request}
    SIZE = 20

    def fetch(Model, Serializer, active_filter, featured_filter, ordering_featured, ordering_recent):
        qs = Model.objects.filter(**active_filter, **featured_filter).order_by(*ordering_featured)[:SIZE]
        if not qs.exists():
            qs = Model.objects.filter(**active_filter).order_by(*ordering_recent)[:SIZE]
        return Serializer(qs, many=True, context=ctx).data

    properties = fetch(
        PropertyListing, PropertyListSerializer,
        {"is_active": True}, {"is_featured": True},
        ["-is_featured", "-is_promoted", "-updated_at"],
        ["-created_at"],
    )
    vehicles = fetch(
        VehicleListing, VehicleListSerializer,
        {"is_active": True}, {"is_featured": True},
        ["-is_featured", "-is_promoted", "-updated_at"],
        ["-created_at"],
    )
    classifieds = fetch(
        ClassifiedListing, ClassifiedListSerializer,
        {"is_active": True}, {"is_featured": True},
        ["-is_featured", "-is_promoted", "-updated_at"],
        ["-created_at"],
    )
    jobs = fetch(
        JobListing, JobListSerializer,
        {"is_active": True}, {"is_featured": True},
        ["-is_featured", "-updated_at"],
        ["-created_at"],
    )
    services = fetch(
        ServiceListing, ServiceListingSerializer,
        {"is_active": True}, {"is_featured": True},
        ["-is_featured", "-is_promoted", "-updated_at"],
        ["-created_at"],
    )

    top_sellers_qs = (
        User.objects
        .annotate(
            prop_count=Count("property_listings",   filter=Q(property_listings__is_active=True),   distinct=True),
            veh_count =Count("vehicle_listings",    filter=Q(vehicle_listings__is_active=True),     distinct=True),
            cls_count =Count("classified_listings", filter=Q(classified_listings__is_active=True),  distinct=True),
            job_count =Count("job_listings",        filter=Q(job_listings__is_active=True),         distinct=True),
        )
        .annotate(
            listing_count=models.ExpressionWrapper(
                models.F("prop_count") + models.F("veh_count") + models.F("cls_count") + models.F("job_count"),
                output_field=models.IntegerField(),
            )
        )
        .filter(listing_count__gt=0)
        .order_by("-listing_count")[:10]
    )
    top_sellers = []
    for u in top_sellers_qs:
        try:
            avatar_url = u.avatar_thumbnail.url if u.avatar_thumbnail else None
        except Exception:
            avatar_url = None
        if not avatar_url:
            avatar_url = u.social_avatar_url or None
        top_sellers.append({
            "id":            u.id,
            "name":          u.get_full_name() or u.username or u.email.split("@")[0],
            "avatar_url":    avatar_url,
            "listing_count": u.listing_count,
            "type":          "user",
        })

    return Response({
        "properties":  properties,
        "vehicles":    vehicles,
        "classifieds": classifieds,
        "jobs":        jobs,
        "services":    services,
        "top_sellers": top_sellers,
    })



