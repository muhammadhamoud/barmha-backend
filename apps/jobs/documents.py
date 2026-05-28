from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import JobListing


@registry.register_document
class JobDocument(Document):
    title_en      = fields.TextField()
    title_ar      = fields.TextField(analyzer="arabic")
    company_name  = fields.TextField()
    location_name = fields.KeywordField()

    class Index:
        name     = "barmha-jobs"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model  = JobListing
        fields = ["job_type", "experience", "is_active", "is_featured", "is_remote"]

    def prepare_title_en(self, instance):
        return instance.safe_translation_getter("title", language_code="en") or ""

    def prepare_title_ar(self, instance):
        return instance.safe_translation_getter("title", language_code="ar") or ""

    def prepare_company_name(self, instance):
        if instance.company:
            return instance.company.safe_translation_getter("name", any_language=True) or ""
        return ""

    def prepare_location_name(self, instance):
        if instance.location:
            return instance.location.safe_translation_getter("city", any_language=True) or ""
        return ""
