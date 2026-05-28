from django.urls import path
from . import views

urlpatterns = [
    path("", views.JobListCreateView.as_view(), name="job-list"),
    path("<int:pk>/", views.JobDetailView.as_view(), name="job-detail"),
    path("<int:pk>/apply/", views.apply_to_job, name="job-apply"),
    path("<int:pk>/similar/", views.similar_jobs, name="job-similar"),

    path("categories/", views.JobCategoryListView.as_view(), name="job-categories"),

    path("applications/", views.MyApplicationsView.as_view(), name="job-applications"),
    path("applications/<int:pk>/", views.ApplicationDetailView.as_view(), name="job-application-detail"),

    path("companies/", views.CompanyListView.as_view(), name="job-companies"),
    path("companies/<int:pk>/", views.CompanyDetailView.as_view(), name="job-company-detail"),
    path("companies/<int:pk>/jobs/", views.CompanyJobsView.as_view(), name="job-company-jobs"),

    path("freelancers/", views.FreelancerListView.as_view(), name="job-freelancers"),
    path("freelancers/<int:pk>/", views.FreelancerDetailView.as_view(), name="job-freelancer-detail"),

    path("jobseekers/", views.JobseekerListView.as_view(), name="job-jobseekers"),
    path("jobseekers/<int:pk>/", views.JobseekerDetailView.as_view(), name="job-jobseeker-detail"),

    path("saved/", views.saved_jobs, name="job-saved"),
    path("saved/<int:job_id>/toggle/", views.toggle_saved_job, name="job-saved-toggle"),
]
