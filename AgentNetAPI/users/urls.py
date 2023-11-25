from django.urls import re_path, path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import ProfileViewSet

router = DefaultRouter()
router.register(r'profile', ProfileViewSet)

urlpatterns = [
    re_path('login/', views.login),
    re_path('signup/', views.singup),
    re_path('test_token/', views.test_token),
    path('', include(router.urls)),
]