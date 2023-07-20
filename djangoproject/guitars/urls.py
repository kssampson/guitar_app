from django.urls import path
from guitars.views import guitar_list

urlpatterns = [
    path("", guitar_list, name="guitar_list"),
    # path("<int:id>/", show_project, name="show_project"),
    # path("create/", create_project, name="create_project"),
]