from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def rocket(request):
    return HttpResponse("<h4>Российские запрещенные по всему миру ракеты</h4>")


def satellites(request):
    return HttpResponse("<h4>Российские запрещенные по всему миру ракеты</h4>")


def planets(request):
    return HttpResponse("<h4>Российские запрещенные по всему миру ракеты</h4>")


def aliens(request):
    return HttpResponse("<h4>Российские запрещенные по всему миру ракеты</h4>")