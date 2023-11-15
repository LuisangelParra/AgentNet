from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

# Create your models here.
class Agent(models.Model):
    AgentID = models.IntegerField(primary_key=True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    PhoneNumber = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    State = models.CharField(max_length=100)
    AccountType = models.CharField(max_length=100)
    Description = models.CharField(max_length=400)

    is_active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False) # a admin user; non super-user
    admin = models.BooleanField(default=False) # a superuser

    # notice the absence of a "Password field", that is built in.

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password are required by default.

    def __str__(self):
        return self.email