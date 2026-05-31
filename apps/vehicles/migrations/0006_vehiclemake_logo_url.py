from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehicles', '0005_alter_vehiclelisting_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehiclemake',
            name='logo_url',
            field=models.URLField(blank=True, help_text='CDN URL for the brand logo (used when no uploaded logo exists)'),
        ),
    ]
