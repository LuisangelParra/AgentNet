from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    # Eliminamos los campos first_name y last_name
    first_name = None
    last_name = None
    username = None
    email = models.EmailField(_("email address"), unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    FirstName = models.CharField(max_length=100, null=True, blank=True)
    LastName = models.CharField(max_length=100, null=True, blank=True)
    PhoneNumber = models.CharField(max_length=100, null=True, blank=True)
    City = models.CharField(max_length=100, null=True, blank=True)
    State = models.CharField(max_length=100, null=True, blank=True)
    Description = models.CharField(max_length=400, null=True, blank=True)
    Premium = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.FirstName} {self.LastName}'