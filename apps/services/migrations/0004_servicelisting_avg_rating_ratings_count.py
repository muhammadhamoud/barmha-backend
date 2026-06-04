from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("services", "0003_alter_servicelisting_options"),
    ]

    operations = [
        migrations.AddField(
            model_name="servicelisting",
            name="avg_rating",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=3),
        ),
        migrations.AddField(
            model_name="servicelisting",
            name="ratings_count",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
