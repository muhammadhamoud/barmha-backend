from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("vehicles", "0006_vehiclemake_logo_url"),
    ]

    operations = [
        migrations.AddField(
            model_name="vehiclelisting",
            name="avg_rating",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=3),
        ),
        migrations.AddField(
            model_name="vehiclelisting",
            name="ratings_count",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
