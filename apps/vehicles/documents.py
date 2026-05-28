from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import VehicleListing


@registry.register_document
class VehicleDocument(Document):
    make_name  = fields.TextField()
    model_name = fields.TextField()
    trim_ar    = fields.TextField(analyzer="arabic")

    class Index:
        name     = "barmha-vehicles"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model  = VehicleListing
        fields = ["year", "fuel_type", "body_style", "price", "is_active", "is_featured"]

    def prepare_make_name(self, instance):
        return instance.make.name if instance.make else ""

    def prepare_model_name(self, instance):
        return instance.model.name if instance.model else ""

    def prepare_trim_ar(self, instance):
        return instance.trim or ""
