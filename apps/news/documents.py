from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import NewsArticle


@registry.register_document
class NewsDocument(Document):
    title_en   = fields.TextField()
    title_ar   = fields.TextField(analyzer="arabic")
    summary_en = fields.TextField()
    summary_ar = fields.TextField(analyzer="arabic")

    class Index:
        name     = "barmha-news"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model  = NewsArticle
        fields = ["is_published", "is_featured", "is_breaking", "published_at"]

    def prepare_title_en(self, instance):
        return instance.safe_translation_getter("title", language_code="en") or ""

    def prepare_title_ar(self, instance):
        return instance.safe_translation_getter("title", language_code="ar") or ""

    def prepare_summary_en(self, instance):
        return instance.safe_translation_getter("summary", language_code="en") or ""

    def prepare_summary_ar(self, instance):
        return instance.safe_translation_getter("summary", language_code="ar") or ""
