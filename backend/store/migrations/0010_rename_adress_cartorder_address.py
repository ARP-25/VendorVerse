# Generated by Django 5.0.3 on 2024-04-22 16:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_alter_cart_product'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cartorder',
            old_name='adress',
            new_name='address',
        ),
    ]