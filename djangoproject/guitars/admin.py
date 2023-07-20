from django.contrib import admin
from .models import Guitar


@admin.register(Guitar)
class GuitarAdmin(admin.ModelAdmin):
    pass