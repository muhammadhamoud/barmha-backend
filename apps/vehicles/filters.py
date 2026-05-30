import django_filters
from .models import VehicleListing


class VehicleFilter(django_filters.FilterSet):
    min_price   = django_filters.NumberFilter(field_name="price",   lookup_expr="gte")
    max_price   = django_filters.NumberFilter(field_name="price",   lookup_expr="lte")
    min_year    = django_filters.NumberFilter(field_name="year",    lookup_expr="gte")
    max_year    = django_filters.NumberFilter(field_name="year",    lookup_expr="lte")
    min_mileage = django_filters.NumberFilter(field_name="mileage", lookup_expr="gte")
    max_mileage = django_filters.NumberFilter(field_name="mileage", lookup_expr="lte")
    governorate = django_filters.NumberFilter(field_name="location__governorate_id", lookup_expr="exact")
    owner       = django_filters.NumberFilter(field_name="posted_by_id", lookup_expr="exact")

    class Meta:
        model  = VehicleListing
        fields = {
            "listing_type":   ["exact"],
            "category":       ["exact"],
            "make":           ["exact"],
            "model":          ["exact"],
            "fuel_type":      ["exact"],
            "gear_type":      ["exact"],
            "wheel_drive":    ["exact"],
            "body_style":     ["exact"],
            "condition":      ["exact"],
            "color_exterior": ["exact"],
            "import_source":  ["exact"],
            "under_warranty": ["exact"],
            "computer_check": ["exact"],
            "is_featured":    ["exact"],
            "is_active":      ["exact"],
            "currency":       ["exact"],
            "listing_intent": ["exact"],
        }
