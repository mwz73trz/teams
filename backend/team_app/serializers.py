from rest_framework.serializers import ModelSerializer
from .models import Team

class TeamSerializer(ModelSerializer):
    class Meta:
        fields = ['id', 'name', 'stadium', 'location', 'logo']
        model = Team