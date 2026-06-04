import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0002_drawnareaalert_listingshare_and_more"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="ListingRating",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("section", models.CharField(choices=[("properties", "Properties"), ("vehicles", "Vehicles"), ("classifieds", "Classifieds"), ("jobs", "Jobs"), ("services", "Services")], max_length=20)),
                ("listing_id", models.PositiveIntegerField()),
                ("stars", models.PositiveSmallIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("user", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="listing_ratings", to=settings.AUTH_USER_MODEL)),
            ],
            options={
                "ordering": ["-created_at"],
            },
        ),
        migrations.AddConstraint(
            model_name="listingrating",
            constraint=models.UniqueConstraint(fields=["user", "section", "listing_id"], name="unique_listing_rating_per_user"),
        ),
        migrations.AddIndex(
            model_name="listingrating",
            index=models.Index(fields=["section", "listing_id"], name="core_listingrating_section_listing_idx"),
        ),
        migrations.CreateModel(
            name="SiteFeedback",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("stars", models.PositiveSmallIntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ("text", models.TextField(blank=True)),
                ("page", models.CharField(blank=True, help_text="Current page URL when feedback was submitted", max_length=200)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("user", models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name="site_feedbacks", to=settings.AUTH_USER_MODEL)),
            ],
            options={
                "ordering": ["-created_at"],
            },
        ),
    ]
