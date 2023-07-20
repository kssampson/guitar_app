# Generated by Django 4.1.2 on 2023-07-18 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Guitar",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("tuner_type", models.CharField(max_length=150)),
                ("bindings", models.CharField(max_length=150)),
                ("manufacturer", models.CharField(max_length=150)),
                ("image", models.CharField(max_length=150)),
                ("model_name", models.CharField(max_length=150, unique=True)),
                ("scale_length", models.IntegerField()),
                ("nut_width", models.IntegerField()),
                ("overall_height", models.IntegerField()),
                ("region", models.CharField(max_length=150)),
                ("back_and_side_wood", models.CharField(max_length=150)),
                ("top_wood", models.CharField(max_length=150)),
            ],
        ),
    ]
