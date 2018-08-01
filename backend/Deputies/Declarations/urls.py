from django.urls import path
from . import views

urlpatterns = [
    path('', views.DeputiesList.as_view()),
    path('parties/', views.PartiesList.as_view())
    
]