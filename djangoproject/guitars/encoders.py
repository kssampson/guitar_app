from .models import Guitar
from common.json import ModelEncoder


class GuitarEncoder(ModelEncoder):
    model = Guitar
    properties = [
        "id",
        "tuner_type",
        "bindings",
        "manufacturer",
        "image",
        "model_name",
        "scale_length",
        "nut_width",
        "overall_height",
        "region",
        "back_and_side_wood",
        "top_wood",
    ]
