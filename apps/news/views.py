from django.db import models as db_models
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from apps.core.pagination import BarmhaPagination
from .models import NewsCategory, NewsTag, NewsArticle, NewsletterSubscriber
from .serializers import (
    NewsCategorySerializer, NewsTagSerializer,
    NewsArticleListSerializer, NewsArticleDetailSerializer,
    NewsletterSubscribeSerializer,
)


@method_decorator(cache_page(300), name="list")
class NewsArticleListView(generics.ListAPIView):
    serializer_class   = NewsArticleListSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return NewsArticle.objects.filter(is_published=True).select_related("category")


class NewsArticleDetailView(generics.RetrieveAPIView):
    serializer_class   = NewsArticleDetailSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        slug = self.kwargs["slug"]
        obj  = get_object_or_404(
            NewsArticle.objects.filter(is_published=True)
                               .prefetch_related("tags")
                               .select_related("category", "author"),
            translations__slug=slug,
        )
        self.check_object_permissions(self.request, obj)
        return obj

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        NewsArticle.objects.filter(pk=instance.pk).update(views_count=db_models.F("views_count") + 1)
        return super().retrieve(request, *args, **kwargs)


class NewsCategoryListView(generics.ListAPIView):
    queryset           = NewsCategory.objects.all()
    serializer_class   = NewsCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class NewsCategoryDetailView(generics.ListAPIView):
    serializer_class   = NewsArticleListSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return NewsArticle.objects.filter(
            is_published=True,
            category__slug=self.kwargs["slug"],
        ).select_related("category")


class NewsTagDetailView(generics.ListAPIView):
    serializer_class   = NewsArticleListSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return NewsArticle.objects.filter(
            is_published=True,
            tags__slug=self.kwargs["slug"],
        ).select_related("category")


class BreakingNewsView(generics.ListAPIView):
    serializer_class   = NewsArticleListSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None

    def get_queryset(self):
        return NewsArticle.objects.filter(is_published=True, is_breaking=True)[:10]


class FeaturedNewsView(generics.ListAPIView):
    serializer_class   = NewsArticleListSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return NewsArticle.objects.filter(is_published=True, is_featured=True).select_related("category")


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def newsletter_subscribe(request):
    serializer = NewsletterSubscribeSerializer(data=request.data)
    if serializer.is_valid():
        obj, created = NewsletterSubscriber.objects.get_or_create(
            email=serializer.validated_data["email"]
        )
        if not created:
            obj.is_active = True
            obj.save(update_fields=["is_active"])
        return Response({"detail": "Subscribed."}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def newsletter_unsubscribe(request):
    email = request.data.get("email", "")
    NewsletterSubscriber.objects.filter(email=email).update(is_active=False)
    return Response({"detail": "Unsubscribed."})
