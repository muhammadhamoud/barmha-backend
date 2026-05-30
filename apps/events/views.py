from django.db import models as db_models
from django.utils import timezone
from rest_framework import generics, permissions
from apps.core.pagination import BarmhaPagination
from .models import EventCategory, Event
from .serializers import EventCategorySerializer, EventSerializer, EventDetailSerializer


class EventListCreateView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    pagination_class = BarmhaPagination

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        qs = Event.objects.filter(is_active=True).select_related(
            "category", "location__governorate"
        ).prefetch_related("images")
        p = self.request.query_params
        gov = p.get("governorate")
        if gov:
            qs = qs.filter(location__governorate=gov)
        cat = p.get("category")
        if cat:
            qs = qs.filter(category=cat)
        if p.get("is_online"):
            qs = qs.filter(is_online=True)
        start_after  = p.get("start_after")
        start_before = p.get("start_before")
        if start_after:
            qs = qs.filter(start_date__gte=start_after)
        if start_before:
            qs = qs.filter(start_date__lte=start_before)
        return qs

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    def get_serializer_class(self):
        if self.request.method == "GET":
            return EventDetailSerializer
        return EventSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        return Event.objects.select_related("organizer", "category", "location").prefetch_related("images")

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        Event.objects.filter(pk=instance.pk).update(views_count=db_models.F("views_count") + 1)
        return super().retrieve(request, *args, **kwargs)


class EventCategoryListView(generics.ListAPIView):
    queryset           = EventCategory.objects.all()
    serializer_class   = EventCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class EventCategoryDetailView(generics.ListAPIView):
    serializer_class   = EventSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Event.objects.filter(is_active=True, category__slug=self.kwargs["slug"])


class FreeEventsView(generics.ListAPIView):
    serializer_class   = EventSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Event.objects.filter(is_active=True, price_type="free")


class FeaturedEventsView(generics.ListAPIView):
    serializer_class   = EventSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Event.objects.filter(is_active=True, is_featured=True)


class UpcomingEventsView(generics.ListAPIView):
    serializer_class   = EventSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Event.objects.filter(is_active=True, start_date__gte=timezone.now()).order_by("start_date")
