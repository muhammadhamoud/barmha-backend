from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("properties", "0005_alter_propertylisting_office_capacity"),
    ]

    operations = [
        migrations.AddField(
            model_name="propertylisting",
            name="avg_rating",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=3),
        ),
        migrations.AddField(
            model_name="propertylisting",
            name="ratings_count",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
