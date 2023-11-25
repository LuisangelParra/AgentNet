from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import HouseSerializer
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response
from django_filters import rest_framework as filters
from rest_framework import filters as rest_filters
from .models import House

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]  # o IsAuthenticated para permitir solo a usuarios autenticados

    filter_backends = [filters.DjangoFilterBackend, rest_filters.SearchFilter, rest_filters.OrderingFilter]
    filterset_fields = ['profile', 'is_published', 'city', 'state', 'zip_code', 'price', 'beds', 'baths', 'sqft', 'lot_size', 'year_built', 'property_type', 'sale_type']
    search_fields = ['name', 'city', 'state', 'price', 'description']
    ordering_fields = ['price', 'beds', 'baths']

    def perform_create(self, serializer):
        # Guardar la casa sin los campos opcionales
        house = serializer.save()

        # Verificar si la casa tiene al menos el nombre y el perfil
        if house.name and house.profile:
            # Verificar si la casa cumple con las condiciones para estar en estado público
            if all([getattr(house, field) for field in ['address', 'longitude', 'latitude', 'city', 'state', 'zip_code', 'price', 'beds', 'baths', 'sqft', 'lot_size', 'year_built', 'property_type', 'sale_type']]):
                house.is_published = True
                house.save()
            else:
                house.is_published = False
                house.save()

    @action(detail=True, methods=['patch'])
    def update_public_status(self, request, pk=None):
        # Esta función permite actualizar el estado público de una casa si cumple con las condiciones
        house = self.get_object()
        serializer = self.get_serializer(house, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        # Verificar si la casa cumple con las condiciones para estar en estado público
        if all([getattr(house, field) for field in ['address', 'longitude', 'latitude', 'city', 'state', 'zip_code', 'price', 'beds', 'baths', 'sqft', 'lot_size', 'year_built', 'property_type', 'sale_type']] and any([house.image1, house.image2, house.image3, house.image4, house.image5])):
            serializer.save(is_published=True)
            return Response({'status': 'El estado público de la casa ha sido actualizado.'})
        else:
            return Response({'error': 'La casa debe tener todos los campos obligatorios y al menos una imagen para estar en estado público.'}, status=status.HTTP_400_BAD_REQUEST)
    
    
    @action(detail=True, methods=['patch'])
    def make_private(self, request, pk=None):
        house = self.get_object()
        house.is_published = False
        house.save()
        return Response({'status': 'La casa ahora está en estado privado.'})
