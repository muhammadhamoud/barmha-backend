from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("classifieds", "0002_classifiedlisting_hide_price"),
    ]

    operations = [
        migrations.AddField(
            model_name="classifiedlisting",
            name="avg_rating",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=3),
        ),
        migrations.AddField(
            model_name="classifiedlisting",
            name="ratings_count",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
