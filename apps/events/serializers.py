from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField
from .models import EventCategory, Event, EventImage


class EventCategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=EventCategory)

    class Meta:
        model  = EventCategory
        fields = ["id", "translations", "slug"]


class EventImageSerializer(serializers.ModelSerializer):
    thumbnail = serializers.ImageField(read_only=True)
    card      = serializers.ImageField(read_only=True)

    class Meta:
        model  = EventImage
        fields = ["id", "image", "thumbnail", "card", "order"]


class OrganizerSerializer(serializers.Serializer):
    """Minimal organizer info for the public event detail page."""
    id         = serializers.IntegerField(read_only=True)
    full_name  = serializers.SerializerMethodField()
    phone      = serializers.CharField(read_only=True)
    whatsapp   = serializers.CharField(read_only=True)

    def get_full_name(self, obj):
        return obj.get_full_name() or obj.username


class EventSerializer(TranslatableModelSerializer):
    translations     = TranslatedFieldsField(shared_model=Event)
    thumbnail        = serializers.ImageField(read_only=True)
    card             = serializers.ImageField(read_only=True)
    images           = EventImageSerializer(many=True, read_only=True)
    category         = EventCategorySerializer(read_only=True)
    category_id      = serializers.PrimaryKeyRelatedField(
        queryset=EventCategory.objects.all(), source="category",
        write_only=True, required=False,
    )
    area_name        = serializers.SerializerMethodField()
    governorate_name = serializers.SerializerMethodField()

    class Meta:
        model  = Event
        fields = [
            "id", "translations", "organizer", "category", "category_id",
            "location", "cover_image", "thumbnail", "card", "images",
            "venue_name", "latitude", "longitude",
            "area_name", "governorate_name",
            "start_date", "end_date", "price_type", "price", "currency",
            "ticket_url", "capacity", "is_online", "online_url",
            "is_active", "is_featured", "views_count", "created_at",
        ]
        read_only_fields = ["organizer", "views_count"]

    def get_area_name(self, obj):
        if obj.location:
            return obj.location.safe_translation_getter("name", any_language=True)
        return None

    def get_governorate_name(self, obj):
        if obj.location and obj.location.governorate:
            return obj.location.governorate.safe_translation_getter("name", any_language=True)
        return None


class EventDetailSerializer(EventSerializer):
    """Full detail — includes embedded organizer contact info."""
    organizer = OrganizerSerializer(read_only=True)

    class Meta(EventSerializer.Meta):
        fields = EventSerializer.Meta.fields + ["updated_at"]
