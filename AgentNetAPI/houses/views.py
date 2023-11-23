from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import HouseSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import House

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, request, serializer):
        # Asegúrate de que el nombre y otros campos requeridos estén presentes en los datos
        if 'name' not in request.data:
            return Response({'detail': 'El campo "name" es obligatorio'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Establece el estado de publicación como "no publicado" por defecto
        serializer.save(profile=self.request.user.profile, is_published=False)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    @action(detail=True, methods=['put'])
    def publish(self, request):
        house = self.get_object()

        # Asegúrate de que el usuario que intenta publicar la casa es el propietario
        if house.profile.user != request.user:
            return Response({'detail': 'No tienes permisos para publicar esta casa'}, status=status.HTTP_403_FORBIDDEN)

        # Actualiza la casa para establecer el estado de publicación como verdadero
        house.is_published = True
        house.save()

        serializer = self.get_serializer(house)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['get'])
    def user_houses(self, request):
        # Obtén todas las casas pertenecientes al usuario actual
        houses = House.objects.filter(profile=request.user.profile)
        serializer = self.get_serializer(houses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)