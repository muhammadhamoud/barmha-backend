import django_filters
from .models import ServiceListing


class ServiceFilter(django_filters.FilterSet):
    min_price   = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    max_price   = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    governorate = django_filters.NumberFilter(field_name="location__governorate_id", lookup_expr="exact")
    owner       = django_filters.NumberFilter(field_name="provider__user_id", lookup_expr="exact")

    class Meta:
        model  = ServiceListing
        fields = {
            "category":   ["exact"],
            "currency":   ["exact"],
            "price_type": ["exact"],
            "is_featured":["exact"],
            "is_active":  ["exact"],
        }
