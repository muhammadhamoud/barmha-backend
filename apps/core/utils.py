"""
Shared utilities for barmha backend.
"""
from __future__ import annotations


def resolve_governorate_to_location(attrs: dict, initial_data: dict) -> dict:
    """
    Listing serializer helper.

    When the frontend selects only a *governorate* but no specific area
    (location_id is null), the payload arrives as::

        { "location": null, "governorate_id": <pk> }

    Without this helper the listing is stored with ``location=None``, which
    means it never matches a governorate filter (``location__governorate_id``).

    This function looks up the first ``Location`` that belongs to the chosen
    governorate and assigns it so the listing can be found via governorate
    filters.  Call it at the *end* of each create/update serializer's
    ``validate()``::

        def validate(self, attrs):
            ...existing logic...
            from apps.core.utils import resolve_governorate_to_location
            attrs = resolve_governorate_to_location(attrs, self.initial_data)
            return attrs
    """
    if not attrs.get("location"):
        try:
            gov_id = int(initial_data.get("governorate_id") or 0)
        except (TypeError, ValueError):
            gov_id = 0

        if gov_id:
            from apps.core.models import Location  # local import avoids circular dep
            loc = Location.objects.filter(governorate_id=gov_id).first()
            if loc:
                attrs["location"] = loc

    return attrs
