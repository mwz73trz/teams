from rest_framework.viewsets import ModelViewSet
from .serializers import TeamSerializer
from .models import Team

class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
