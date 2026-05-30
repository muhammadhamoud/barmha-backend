from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0002_propertylisting_hide_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='propertylisting',
            name='listing_intent',
            field=models.CharField(
                choices=[('offer', 'Offering'), ('wanted', 'Wanted / Looking to buy')],
                default='offer',
                max_length=10,
            ),
        ),
    ]
