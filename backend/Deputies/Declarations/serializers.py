from rest_framework import serializers
from .models import Deputy, PoliticalParty


class DeputySerializer(serializers.ModelSerializer):
    
    class Meta:
        fields = (
            'id',
            'name',
            'party_name',
            'declaration_id',
            'workplace',
            'incomes',
        )
        model = Deputy

class PoliticalPartySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'party_name',
            'description',
            
        )
        model = PoliticalParty     