# Generated by Django 5.0.3 on 2024-04-27 10:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vendor',
            old_name='desctiption',
            new_name='description',
        ),
    ]
