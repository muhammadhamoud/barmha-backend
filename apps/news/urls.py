from django.urls import path
from . import views

urlpatterns = [
    path("",                          views.NewsArticleListView.as_view(),    name="news-list"),
    path("categories/",              views.NewsCategoryListView.as_view(),    name="news-category-list"),
    path("categories/<slug:slug>/",  views.NewsCategoryDetailView.as_view(), name="news-category-detail"),
    path("tags/<slug:slug>/",        views.NewsTagDetailView.as_view(),       name="news-tag-detail"),
    path("breaking/",                views.BreakingNewsView.as_view(),        name="news-breaking"),
    path("featured/",                views.FeaturedNewsView.as_view(),        name="news-featured"),
    path("newsletter/subscribe/",    views.newsletter_subscribe,              name="news-subscribe"),
    path("newsletter/unsubscribe/",  views.newsletter_unsubscribe,            name="news-unsubscribe"),
    path("<slug:slug>/",             views.NewsArticleDetailView.as_view(),   name="news-detail"),
]
