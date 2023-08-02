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

@require_http_methods(["GET", "PUT", "DELETE"])
def show_guitar(request, id):
    if request.method == "GET":
        guitar = Guitar.objects.get(id=id)
        return JsonResponse(
            {"guitar": guitar},
            encoder=GuitarEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        content = json.loads(request.body)
        guitar = Guitar.objects.filter(id=id).update(**content)
        guitar = Guitar.objects.get(id=id)
        return JsonResponse(
            {"guitar": guitar},
            encoder=GuitarEncoder,
            safe=False,
        )
    else:
        count, _ = Guitar.objects.filter(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
