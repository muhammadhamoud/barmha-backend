"""
Utility: check drawn area alerts when a new listing with lat/lng is published.
Call notify_area_alerts(section, obj, lat, lng, title) from each app's post_save signal.
"""
from __future__ import annotations


def notify_area_alerts(section: str, listing_id: int, lat, lng, title: str) -> None:
    """
    Find all active DrawnAreaAlerts whose polygon contains (lat, lng).
    Skip the listing owner so they don't notify themselves.
    Create a bilingual Notification for each matching alert's user.
    """
    if lat is None or lng is None:
        return

    try:
        lat_f = float(lat)
        lng_f = float(lng)
    except (TypeError, ValueError):
        return

    from .models import DrawnAreaAlert, Notification

    # Only check alerts that match this section (or are unrestricted)
    alerts = DrawnAreaAlert.objects.filter(
        is_active=True
    ).filter(
        **{"section__in": ["", section]} if section else {}
    ).select_related("user")

    # Resolve listing owner user id to avoid self-notification
    owner_id = _get_owner_id(section, listing_id)

    action_url = f"/{section}/{listing_id}"
    section_ar = {
        "properties": "عقار", "vehicles": "مركبة", "classifieds": "إعلان",
        "jobs": "وظيفة", "services": "خدمة", "events": "حدث",
    }.get(section, "إعلان")
    section_en = {
        "properties": "property", "vehicles": "vehicle", "classifieds": "classified",
        "jobs": "job", "services": "service", "events": "event",
    }.get(section, "listing")

    for alert in alerts:
        if alert.user_id == owner_id:
            continue

        # Check if the listing falls inside this alert's polygon
        pts = _parse_wkt(alert.polygon_wkt)
        if not pts:
            continue
        if not _pip(lng_f, lat_f, pts):
            continue

        # Section filter: if alert restricts to a section, check it
        if alert.section and alert.section != section:
            continue

        # Create bilingual notification
        try:
            n = Notification(
                recipient=alert.user,
                notif_type="new_listing_area",
                action_url=action_url,
            )
            n.save()
            n.set_current_language("ar")
            n.title = f"إعلان {section_ar} جديد في منطقتك"
            n.body  = title or f"انقر لعرض الإعلان"
            n.save()
            n.set_current_language("en")
            n.title = f"New {section_en} in your saved area"
            n.body  = title or "Tap to view the listing"
            n.save()
        except Exception:
            pass  # Never break listing creation due to notification failure


def _get_owner_id(section: str, listing_id: int):
    """Return the user pk of the listing owner, or None if not found."""
    try:
        if section == "properties":
            from apps.properties.models import PropertyListing
            obj = PropertyListing.objects.filter(pk=listing_id).values_list("posted_by_id", flat=True).first()
        elif section == "vehicles":
            from apps.vehicles.models import VehicleListing
            obj = VehicleListing.objects.filter(pk=listing_id).values_list("posted_by_id", flat=True).first()
        elif section == "classifieds":
            from apps.classifieds.models import ClassifiedListing
            obj = ClassifiedListing.objects.filter(pk=listing_id).values_list("seller_id", flat=True).first()
        elif section == "jobs":
            from apps.jobs.models import JobListing
            obj = JobListing.objects.filter(pk=listing_id).values_list("posted_by_id", flat=True).first()
        elif section == "services":
            from apps.services.models import ServiceListing
            obj = ServiceListing.objects.filter(pk=listing_id).values_list("provider__user_id", flat=True).first()
        elif section == "events":
            from apps.events.models import Event
            obj = Event.objects.filter(pk=listing_id).values_list("posted_by_id", flat=True).first()
        else:
            obj = None
        return obj
    except Exception:
        return None


def _parse_wkt(wkt: str):
    import re
    m = re.search(r'POLYGON\s*\(\s*\((.+?)\)\s*\)', wkt or "", re.IGNORECASE)
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


def _pip(lng: float, lat: float, polygon) -> bool:
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
