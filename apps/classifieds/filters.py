import django_filters
from .models import ClassifiedListing


class ClassifiedFilter(django_filters.FilterSet):
    min_price   = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    max_price   = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    governorate = django_filters.NumberFilter(field_name="location__governorate_id", lookup_expr="exact")
    owner       = django_filters.NumberFilter(field_name="seller_id", lookup_expr="exact")

    class Meta:
        model  = ClassifiedListing
        fields = {
            "listing_type": ["exact"],
            "condition":    ["exact"],
            "category":     ["exact"],
            "currency":     ["exact"],
            "is_featured":  ["exact"],
            "is_preloved":  ["exact"],
        }
