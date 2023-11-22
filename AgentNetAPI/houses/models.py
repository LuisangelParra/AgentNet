from django.db import models

# Create your models here.
class House(models.Model):
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
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
