from django.shortcuts import render
from rest_framework import viewsets
from .models import Agent
from .serializer import AgentSerializer

# Create your views here.
class AgentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows agents to be viewed or edited.
    """
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer