# Generated by Django 5.0.3 on 2024-04-08 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.FileField(blank=True, default='category/default.jpg', null=True, upload_to='category/'),
        ),
    ]
