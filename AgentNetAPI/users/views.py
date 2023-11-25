from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .serializers import UserSerializer, ProfileSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import CustomUser, Profile

from django.shortcuts import get_object_or_404
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

@api_view(['POST'])
def login(request):
    user = get_object_or_404(CustomUser, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({"detail":"Not found"}, status=status.HTTP_400_BAD_REQUEST)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token": token.key, "user":serializer.data})

@api_view(['POST'])
def singup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = CustomUser.objects.get(email=request.data['email'])
        user.set_password(request.data['password'])
        user.save()

        # Crear el perfil asociado al usuario
        profile_data = {
            'user': user.id,
            'FirstName': request.data.get('FirstName', request.data['firstName']),
            'LastName': request.data.get('LastName', request.data['lastName']),
            'PhoneNumber': request.data.get('PhoneNumber', None),
            'City': request.data.get('City', None),
            'State': request.data.get('State', None),
            'Description': request.data.get('Description', None),
            'Premium': request.data.get('Premium', False),
        }

        profile_serializer = ProfileSerializer(data=profile_data)

        if profile_serializer.is_valid():
            profile_serializer.save()
        else:
            # Si hay un error al crear el perfil, elimina el usuario recién creado
            user.delete()
            return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        token = Token.objects.create(user=user)
        return Response({"token":token.key, "user":serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    profile_serializer = ProfileSerializer(request.user.profile)
    return Response({
        "user": UserSerializer(instance=request.user).data,
        "profile": profile_serializer.data
    })