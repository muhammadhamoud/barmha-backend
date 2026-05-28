from django.contrib import admin
from .models import Conversation, Message


class MessageInline(admin.TabularInline):
    model           = Message
    extra           = 0
    fields          = ["sender", "body", "is_read", "created_at"]
    readonly_fields = ["sender", "body", "is_read", "created_at"]


@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display  = ["pk", "listing_type", "listing_id", "last_message_at"]
    inlines       = [MessageInline]
    filter_horizontal = []


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ["pk", "conversation", "sender", "is_read", "created_at"]
    list_filter  = ["is_read"]
