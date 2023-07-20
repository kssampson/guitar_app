from django.http import JsonResponse
from .models import Guitar
from .encoders import GuitarEncoder
from django.views.decorators.http import require_http_methods
import json


# Create your views here.
@require_http_methods(["GET", "POST"])
def guitar_list(request):
    if request.method == "GET":
        guitars = Guitar.objects.all()
        return JsonResponse(
            {"guitars": guitars},
            encoder=GuitarEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        guitar = Guitar.objects.create(**content)
        return JsonResponse(
            guitar,
            encoder=GuitarEncoder,
            safe=False,
        )
