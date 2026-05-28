from django.urls import path
from . import views

urlpatterns = [
    path("conversations/",                       views.ConversationListView.as_view(),  name="conversation-list"),
    path("conversations/start/",                 views.start_conversation,              name="conversation-start"),
    path("conversations/<int:pk>/",              views.ConversationDetailView.as_view(),name="conversation-detail"),
    path("conversations/<int:pk>/messages/",     views.MessageListView.as_view(),       name="conversation-messages"),
    path("conversations/<int:pk>/read/",         views.mark_read,                       name="conversation-read"),
    path("messages/",                            views.MessageCreateView.as_view(),     name="message-create"),
    path("unread-count/",                        views.unread_count,                    name="messaging-unread-count"),
]
