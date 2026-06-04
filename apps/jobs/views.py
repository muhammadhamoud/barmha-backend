from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from django.db.models import F
from django.shortcuts import get_object_or_404
from django.core.cache import cache

from apps.core.pagination import BarmhaPagination
from .filters import JobFilter
from .models import JobCategory, CompanyProfile, JobListing, JobApplication, FreelancerProfile, JobseekerProfile
from .serializers import (
    JobCreateSerializer, JobCategorySerializer, CompanyProfileSerializer,
    JobListSerializer, JobDetailSerializer,
    JobApplicationSerializer, FreelancerProfileSerializer, JobseekerProfileSerializer,
)


class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        owner = getattr(obj, "posted_by", getattr(obj, "applicant", None))
        return owner == request.user or request.user.is_staff


def _job_qs():
    return (
        JobListing.objects
        .filter(is_active=True)
        .select_related("company", "posted_by", "category", "location__governorate")
    )


class JobListCreateView(generics.ListCreateAPIView):
    pagination_class = BarmhaPagination
    filter_backends  = [DjangoFilterBackend, OrderingFilter]
    filterset_class  = JobFilter
    ordering_fields  = ["created_at", "updated_at", "views_count", "avg_rating", "ratings_count", "is_featured", "is_promoted"]
    ordering         = ["-is_featured", "-is_promoted", "-updated_at"]

    def get_queryset(self):
        qs = JobListing.objects.select_related("company", "posted_by", "category", "location__governorate")
        owner = self.request.query_params.get("owner")
        if not owner:
            qs = qs.filter(is_active=True)
        return qs

    def get_serializer_class(self):
        if self.request.method == "POST":
            return JobCreateSerializer
        return JobListSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class JobDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = JobListing.objects.select_related("company", "posted_by", "category", "location__governorate")
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in ("PUT", "PATCH"):
            return JobCreateSerializer
        return JobDetailSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        JobListing.objects.filter(pk=instance.pk).update(views_count=F("views_count") + 1)
        return Response(self.get_serializer(instance).data)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def apply_to_job(request, pk):
    job = get_object_or_404(JobListing, pk=pk, is_active=True)
    if JobApplication.objects.filter(job=job, applicant=request.user).exists():
        return Response({"detail": "Already applied."}, status=status.HTTP_400_BAD_REQUEST)
    serializer = JobApplicationSerializer(data=request.data, context={"request": request})
    serializer.is_valid(raise_exception=True)
    application = serializer.save(job=job, applicant=request.user)
    JobListing.objects.filter(pk=job.pk).update(applications_count=F("applications_count") + 1)
    return Response(JobApplicationSerializer(application).data, status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def track_view(request, pk):
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("REMOTE_ADDR", ""))
    cache_key = f"view_jobs_{pk}_{ip}"
    if not cache.get(cache_key):
        JobListing.objects.filter(pk=pk, is_active=True).update(views_count=F("views_count") + 1)
        cache.set(cache_key, True, 86400)
    obj = JobListing.objects.filter(pk=pk).values("views_count").first()
    return Response({"views_count": obj["views_count"] if obj else 0})


@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def similar_jobs(request, pk):
    job = get_object_or_404(JobListing, pk=pk, is_active=True)
    qs = _job_qs().filter(category=job.category).exclude(pk=pk)[:6]
    return Response(JobListSerializer(qs, many=True, context={"request": request}).data)


class JobCategoryListView(generics.ListAPIView):
    queryset           = JobCategory.objects.all()
    serializer_class   = JobCategorySerializer
    permission_classes = [permissions.AllowAny]
    pagination_class   = None


class MyApplicationsView(generics.ListAPIView):
    serializer_class   = JobApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class   = BarmhaPagination

    def get_queryset(self):
        return JobApplication.objects.filter(applicant=self.request.user).select_related("job")


class ApplicationDetailView(generics.RetrieveUpdateAPIView):
    serializer_class   = JobApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return JobApplication.objects.filter(applicant=self.request.user)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # Only job poster can update status
        if instance.job.posted_by != request.user and not request.user.is_staff:
            return Response({"detail": "Only the job poster can update application status."}, status=status.HTTP_403_FORBIDDEN)
        return super().update(request, *args, **kwargs)


class CompanyListView(generics.ListAPIView):
    queryset           = CompanyProfile.objects.select_related("location").all()
    serializer_class   = CompanyProfileSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class CompanyDetailView(generics.RetrieveAPIView):
    queryset           = CompanyProfile.objects.select_related("location")
    serializer_class   = CompanyProfileSerializer
    permission_classes = [permissions.AllowAny]


class CompanyJobsView(generics.ListAPIView):
    serializer_class = JobListSerializer
    pagination_class = BarmhaPagination

    def get_queryset(self):
        return _job_qs().filter(company_id=self.kwargs["pk"])


class FreelancerListView(generics.ListAPIView):
    queryset           = FreelancerProfile.objects.filter(is_available=True).select_related("user")
    serializer_class   = FreelancerProfileSerializer
    pagination_class   = BarmhaPagination
    filter_backends    = [DjangoFilterBackend]
    filterset_fields   = ["categories", "currency"]
    permission_classes = [permissions.AllowAny]


class FreelancerDetailView(generics.RetrieveAPIView):
    queryset           = FreelancerProfile.objects.select_related("user")
    serializer_class   = FreelancerProfileSerializer
    permission_classes = [permissions.AllowAny]


class JobseekerListView(generics.ListAPIView):
    queryset           = JobseekerProfile.objects.filter(is_open=True).select_related("user")
    serializer_class   = JobseekerProfileSerializer
    pagination_class   = BarmhaPagination
    permission_classes = [permissions.AllowAny]


class JobseekerDetailView(generics.RetrieveAPIView):
    queryset           = JobseekerProfile.objects.select_related("user")
    serializer_class   = JobseekerProfileSerializer
    permission_classes = [permissions.AllowAny]


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
def saved_jobs(request):
    profile = get_object_or_404(JobseekerProfile, user=request.user)
    qs = profile.saved_jobs.filter(is_active=True).select_related("company", "posted_by", "category", "location__governorate")
    paginator = BarmhaPagination()
    page = paginator.paginate_queryset(qs, request)
    return paginator.get_paginated_response(JobListSerializer(page, many=True, context={"request": request}).data)


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def toggle_saved_job(request, job_id):
    job = get_object_or_404(JobListing, pk=job_id, is_active=True)
    profile, _ = JobseekerProfile.objects.get_or_create(user=request.user)
    if profile.saved_jobs.filter(pk=job.pk).exists():
        profile.saved_jobs.remove(job)
        return Response({"saved": False})
    profile.saved_jobs.add(job)
    return Response({"saved": True})
