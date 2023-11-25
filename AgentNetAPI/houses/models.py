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
    address = models.CharField(max_length=200, null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    state = models.CharField(max_length=200, null=True, blank=True)
    zip_code = models.CharField(max_length=200, null=True, blank=True)
    price = models.IntegerField(default=0, null=True, blank=True)
    beds = models.IntegerField(default=0, null=True, blank=True)
    baths = models.IntegerField(default=0, null=True, blank=True)
    sqft = models.IntegerField(default=0, null=True, blank=True)
    lot_size = models.IntegerField(default=0, null=True, blank=True)
    year_built = models.IntegerField(default=0, null=True, blank=True)
    property_type = models.CharField(max_length=200, null=True, blank=True)
    sale_type = models.CharField(max_length=200, null=True, blank=True)
    is_published = models.BooleanField(default=False)
    list_date = models.DateTimeField(auto_now_add=True)
    description = models.TextField(null=True, blank=True)

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