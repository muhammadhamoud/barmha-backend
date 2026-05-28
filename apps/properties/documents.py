from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import PropertyListing


@registry.register_document
class PropertyDocument(Document):
    title       = fields.TextField(analyzer="arabic")
    description = fields.TextField(analyzer="arabic")
    governorate = fields.KeywordField()
    city        = fields.KeywordField()

    class Index:
        name     = "barmha-properties"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model  = PropertyListing
        fields = ["purpose", "category", "property_type", "price", "bedrooms", "is_active", "is_featured"]

    def prepare_title(self, instance):
        return instance.title or ""

    def prepare_description(self, instance):
        return instance.description or ""

    def prepare_governorate(self, instance):
        if instance.location and instance.location.governorate:
            return instance.location.governorate.slug
        return ""

    def prepare_city(self, instance):
        if instance.location:
            return instance.location.safe_translation_getter("city", any_language=True) or ""
        return ""
