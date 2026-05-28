import django_filters
from .models import JobListing


class JobFilter(django_filters.FilterSet):
    governorate = django_filters.NumberFilter(field_name="location__governorate_id", lookup_expr="exact")
    min_salary  = django_filters.NumberFilter(field_name="min_salary", lookup_expr="gte")
    max_salary  = django_filters.NumberFilter(field_name="min_salary", lookup_expr="lte")
    owner       = django_filters.NumberFilter(field_name="posted_by_id", lookup_expr="exact")

    class Meta:
        model  = JobListing
        fields = {
            "job_type":   ["exact"],
            "experience": ["exact"],
            "gender":     ["exact"],
            "category":   ["exact"],
            "is_remote":  ["exact"],
            "is_featured":["exact"],
            "currency":   ["exact"],
        }
