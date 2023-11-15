from django.shortcuts import render
from rest_framework import viewsets
from .models import House
from .serializer import HouseSerializer

# Create your views here.
class HouseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows houses to be viewed or edited.
    """
    queryset = House.objects.all()
    serializer_class = HouseSerializer