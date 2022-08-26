from . import views
from django.urls import path

urlpatterns = [
    path('', views.Exercicio1.as_view(), name='ex1'),

]
