import uuid
from django.db import models
from users.models import Profile

def house_image_path(instance, filename):
    # Guardar las imágenes en la carpeta específica de cada casa
    return f'houses/{instance.id}/images/{filename}'

def house_video_path(instance, filename):
    # Guardar el video en la carpeta específica de cada casa
    return f'houses/{instance.id}/videos/{filename}'

class House(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    longitude = models.FloatField()
    latitude = models.FloatField()
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zip_code = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    beds = models.IntegerField(default=0)
    baths = models.IntegerField(default=0)
    sqft = models.IntegerField(default=0)
    lot_size = models.IntegerField(default=0)
    year_built = models.IntegerField(default=0)
    property_type = models.CharField(max_length=200)
    sale_type = models.CharField(max_length=200)
    is_published = models.BooleanField(default=False)
    list_date = models.DateTimeField(auto_now_add=True)

    # Campos para imágenes
    image1 = models.ImageField(upload_to=house_image_path, null=True, blank=True)
    image2 = models.ImageField(upload_to=house_image_path, null=True, blank=True)
    image3 = models.ImageField(upload_to=house_image_path, null=True, blank=True)
    image4 = models.ImageField(upload_to=house_image_path, null=True, blank=True)
    image5 = models.ImageField(upload_to=house_image_path, null=True, blank=True)

    # Campo para el video
    video = models.FileField(upload_to=house_video_path, null=True, blank=True)

    def __str__(self):
        return self.name