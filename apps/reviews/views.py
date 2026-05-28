from rest_framework import generics, permissions
from .models import Review
from .serializers import ReviewSerializer


class ReviewListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    pagination_class  = None   # reviews per seller are small; return plain array

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        qs = Review.objects.filter(is_approved=True).select_related("reviewer")
        subject_type = self.request.query_params.get("subject_type")
        subject_id   = self.request.query_params.get("subject_id")
        if subject_type:
            qs = qs.filter(subject_type=subject_type)
        if subject_id:
            qs = qs.filter(subject_id=subject_id)
        return qs

    def perform_create(self, serializer):
        serializer.save(reviewer=self.request.user)


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        if self.request.method == "GET":
            return Review.objects.filter(is_approved=True)
        return Review.objects.filter(reviewer=self.request.user)


class SubjectReviewsView(generics.ListAPIView):
    serializer_class   = ReviewSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Review.objects.filter(
            subject_type=self.kwargs["subject_type"],
            subject_id=self.kwargs["subject_id"],
            is_approved=True,
        ).select_related("reviewer")
