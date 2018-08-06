from rest_framework import generics
from django.views.generic import TemplateView


from .models import Deputy, PoliticalParty
from .serializers import DeputySerializer, PoliticalPartySerializer





class IndexView(TemplateView):
   template_name = 'index.html'

class DeputiesList(generics.ListCreateAPIView):
    queryset = Deputy.objects.all()
    serializer_class = DeputySerializer

class PartiesList(generics.ListCreateAPIView):
    queryset = PoliticalParty.objects.all()
    serializer_class = PoliticalPartySerializer