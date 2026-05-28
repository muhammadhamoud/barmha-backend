from django.db import models
from django.utils import timezone


class Report(models.Model):
    REASON_CHOICES = [
        ("spam","Spam"),("fake","Fake"),("inappropriate","Inappropriate"),
        ("scam","Scam"),("wrong_category","Wrong Category"),("other","Other"),
    ]
    STATUS_CHOICES = [
        ("pending","Pending"),("reviewed","Reviewed"),
        ("action_taken","Action Taken"),("dismissed","Dismissed"),
    ]
    reporter     = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="reports_filed")
    content_type = models.CharField(max_length=50)
    object_id    = models.PositiveIntegerField()
    reason       = models.CharField(max_length=20, choices=REASON_CHOICES)
    description  = models.TextField(blank=True)
    status       = models.CharField(max_length=15, choices=STATUS_CHOICES, default="pending")
    reviewed_by  = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="reports_reviewed")
    reviewed_at  = models.DateTimeField(null=True, blank=True)
    ip_address   = models.GenericIPAddressField(null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        indexes  = [
            models.Index(fields=["status", "content_type"]),
        ]

    def __str__(self):
        return f"Report #{self.pk} ({self.reason}) on {self.content_type}/{self.object_id}"


class SpamPattern(models.Model):
    PATTERN_TYPE_CHOICES = [
        ("keyword","Keyword"),("regex","Regex"),("phone","Phone"),("url","URL"),
    ]
    ACTION_CHOICES = [("flag","Flag"),("block","Block")]
    pattern      = models.CharField(max_length=500)
    pattern_type = models.CharField(max_length=10, choices=PATTERN_TYPE_CHOICES)
    action       = models.CharField(max_length=5, choices=ACTION_CHOICES, default="flag")
    is_active    = models.BooleanField(default=True)
    created_at   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.pattern_type}: {self.pattern}"


class SpamLog(models.Model):
    pattern      = models.ForeignKey(SpamPattern, on_delete=models.SET_NULL, null=True)
    content_type = models.CharField(max_length=50)
    object_id    = models.PositiveIntegerField(null=True, blank=True)
    matched_text = models.CharField(max_length=500)
    ip_address   = models.GenericIPAddressField(null=True, blank=True)
    user         = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]


class BlockedIP(models.Model):
    ip_address   = models.GenericIPAddressField(unique=True)
    reason       = models.CharField(max_length=200, blank=True)
    note         = models.TextField(blank=True)
    blocked_by   = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="blocked_ips")
    is_permanent = models.BooleanField(default=True)
    expires_at   = models.DateTimeField(null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.ip_address

    def is_active(self):
        if self.is_permanent:
            return True
        return self.expires_at is not None and self.expires_at > timezone.now()


class BlockedUser(models.Model):
    user         = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="block_record")
    reason       = models.CharField(max_length=200, blank=True)
    note         = models.TextField(blank=True)
    blocked_by   = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="users_blocked")
    is_permanent = models.BooleanField(default=True)
    expires_at   = models.DateTimeField(null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)

    def is_active(self):
        if self.is_permanent:
            return True
        return self.expires_at is not None and self.expires_at > timezone.now()


class UserBlock(models.Model):
    blocker    = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="blocking")
    blocked    = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="blocked_by_users")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = [("blocker", "blocked")]

    def __str__(self):
        return f"{self.blocker} blocks {self.blocked}"
