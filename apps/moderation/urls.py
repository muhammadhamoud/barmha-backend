from django.urls import path
from . import views

urlpatterns = [
    path("reports/",                     views.ReportListCreateView.as_view(), name="report-list"),
    path("reports/<int:pk>/",            views.ReportDetailView.as_view(),     name="report-detail"),
    path("block-user/<int:pk>/",         views.block_user,                     name="block-user"),
    path("block-ip/",                    views.block_ip,                       name="block-ip"),
    path("user-block/<int:pk>/toggle/",  views.toggle_user_block,              name="user-block-toggle"),
]
