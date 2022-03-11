from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('rocket', views.rocket),
    path('satellites', views.satellites),
    path('planets', views.planets),
    path('aliens', views.aliens)
]
