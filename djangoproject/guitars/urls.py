from django.urls import path
from guitars.views import guitar_list, show_guitar

urlpatterns = [
    path("", guitar_list, name="guitar_list"),
    path("<int:id>/", show_guitar, name="show_guitar"),
]