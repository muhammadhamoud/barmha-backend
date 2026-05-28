from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import ClassifiedListing


@registry.register_document
class ClassifiedDocument(Document):
    title_en      = fields.TextField()
    title_ar      = fields.TextField(analyzer="arabic")
    category_name = fields.KeywordField()

    class Index:
        name     = "barmha-classifieds"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model  = ClassifiedListing
        fields = ["price", "currency", "condition", "is_active", "is_featured"]

    def prepare_title_en(self, instance):
        return instance.safe_translation_getter("title", language_code="en") or ""

    def prepare_title_ar(self, instance):
        return instance.safe_translation_getter("title", language_code="ar") or ""

    def prepare_category_name(self, instance):
        if instance.category:
            return instance.category.safe_translation_getter("name", any_language=True) or ""
        return ""
