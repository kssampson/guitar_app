from django.db import models

# Create your models here.

class Guitar(models.Model):
    tuner_type = models.CharField(max_length=150)
    bindings = models.CharField(max_length=150)
    manufacturer = models.CharField(max_length=150)
    image = models.CharField(max_length=150)
    model_name = models.CharField(max_length=150, unique=True)
    scale_length = models.IntegerField()
    nut_width = models.IntegerField()
    overall_height = models.IntegerField()
    region = models.CharField(max_length=150)
    back_and_side_wood = models.CharField(max_length=150)
    top_wood = models.CharField(max_length=150)

    def __str__(self):
        return self.model_name