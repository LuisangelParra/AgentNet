from django.db import models
from agents.models import Agent

# Create your models here.
class House(models.Model):
    HouseID = models.IntegerField(primary_key=True)
    AgentID = models.ForeignKey(Agent, on_delete=models.CASCADE)
    Title = models.CharField(max_length=100)
    Address = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    State = models.CharField(max_length=100)
    Price = models.CharField(max_length=100)
    Description = models.CharField(max_length=400)
    Bedrooms = models.IntegerField()
    Bathrooms = models.IntegerField()
    Garage = models.IntegerField()
    Sqft = models.IntegerField()
    LotSize = models.IntegerField()
    Type = models.CharField(max_length=100)
    YearBuilt = models.DateField()

    def __str__(self):
        return self.Title


