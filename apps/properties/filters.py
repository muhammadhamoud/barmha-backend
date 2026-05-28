import django_filters
from .models import PropertyListing


class PropertyFilter(django_filters.FilterSet):
    min_price   = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    max_price   = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    min_area    = django_filters.NumberFilter(field_name="area_sqm", lookup_expr="gte")
    max_area    = django_filters.NumberFilter(field_name="area_sqm", lookup_expr="lte")
    area        = django_filters.CharFilter(field_name="location__translations__name", lookup_expr="icontains")
    city        = django_filters.CharFilter(field_name="location__governorate__translations__name", lookup_expr="icontains")
    governorate = django_filters.NumberFilter(field_name="location__governorate_id", lookup_expr="exact")
    owner       = django_filters.NumberFilter(field_name="posted_by_id", lookup_expr="exact")

    class Meta:
        model  = PropertyListing
        fields = {
            "purpose":       ["exact"],
            "category":      ["exact"],
            "property_type": ["exact"],
            "bedrooms":      ["exact"],
            "bathrooms":     ["exact"],
            "furnishing":    ["exact"],
            "contract_type": ["exact"],
            "currency":      ["exact"],
            "no_commission":       ["exact"],
            "kahramaa_included":   ["exact"],
            "internet_included":   ["exact"],
            "is_featured":         ["exact"],
            "is_active":           ["exact"],
        }
