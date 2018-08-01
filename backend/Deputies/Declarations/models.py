from django.db import models

class PoliticalParty(models.Model):
   
    party_name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.party_name



class Deputy(models.Model):
    party = models.ForeignKey(PoliticalParty, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, default=None)
    workplace = models.CharField(max_length=200, default=None)
    declaration_id = models.CharField(max_length=200,default=None,blank=True)
    incomes = models.FloatField()

    @property
    def party_name(self):
        return self.party.party_name

    def __str__(self):
        return self.name
