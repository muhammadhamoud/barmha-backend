from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField
from .models import NewsCategory, NewsTag, NewsArticle, NewsletterSubscriber


class NewsCategorySerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=NewsCategory)

    class Meta:
        model  = NewsCategory
        fields = ["id", "translations", "slug", "order"]


class NewsTagSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=NewsTag)

    class Meta:
        model  = NewsTag
        fields = ["id", "translations", "slug"]


class NewsArticleListSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=NewsArticle)
    thumbnail    = serializers.ImageField(read_only=True)
    card         = serializers.ImageField(read_only=True)
    category     = NewsCategorySerializer(read_only=True)

    class Meta:
        model  = NewsArticle
        fields = [
            "id", "translations", "category", "thumbnail", "card",
            "is_featured", "is_breaking", "views_count", "published_at",
        ]


class NewsArticleDetailSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=NewsArticle)
    thumbnail    = serializers.ImageField(read_only=True)
    card         = serializers.ImageField(read_only=True)
    og           = serializers.ImageField(read_only=True)
    category     = NewsCategorySerializer(read_only=True)
    tags         = NewsTagSerializer(many=True, read_only=True)

    class Meta:
        model  = NewsArticle
        fields = [
            "id", "translations", "category", "tags", "author",
            "thumbnail", "card", "og",
            "source", "source_url", "is_published", "is_featured", "is_breaking",
            "views_count", "published_at", "created_at", "updated_at",
        ]


class NewsletterSubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = NewsletterSubscriber
        fields = ["email"]
