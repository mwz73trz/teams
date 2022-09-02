from distutils.command.upload import upload
from pyexpat import model
from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=75, null=False)
    stadium = models.CharField(max_length=50, null=False)
    location = models.CharField(max_length=100, null=False)
    logo = models.ImageField(upload_to='images/')

    def __str__(self):
        return f'{self.name}'

