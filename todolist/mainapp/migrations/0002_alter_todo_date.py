# Generated by Django 3.2 on 2022-01-30 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date',
            field=models.DateField(auto_now=True, verbose_name='дата'),
        ),
    ]