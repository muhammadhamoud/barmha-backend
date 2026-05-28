from django.urls import path
from . import views

urlpatterns = [
    path("",                                                  views.ReviewListCreateView.as_view(), name="review-list"),
    path("<int:pk>/",                                         views.ReviewDetailView.as_view(),     name="review-detail"),
    path("subject/<str:subject_type>/<int:subject_id>/",      views.SubjectReviewsView.as_view(),   name="review-subject"),
]
