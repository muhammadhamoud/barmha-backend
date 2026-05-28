from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Review(models.Model):
    SUBJECT_CHOICES = [
        ("agent","Agent"),("agency","Agency"),("provider","Provider"),
        ("merchant","Merchant"),("freelancer","Freelancer"),("company","Company"),
        ("showroom","Showroom"),("store","Store"),
    ]
    reviewer     = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="reviews_given")
    subject_type = models.CharField(max_length=15, choices=SUBJECT_CHOICES)
    subject_id   = models.PositiveIntegerField()
    rating       = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    title        = models.CharField(max_length=200, blank=True)
    body         = models.TextField(blank=True)
    is_verified  = models.BooleanField(default=False)
    is_approved  = models.BooleanField(default=True)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = [("reviewer", "subject_type", "subject_id")]
        ordering        = ["-created_at"]
        indexes         = [
            models.Index(fields=["subject_type", "subject_id"]),
        ]

    def __str__(self):
        return f"Review by {self.reviewer} on {self.subject_type}/{self.subject_id}"
