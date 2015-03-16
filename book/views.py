# storyline : book/views.py

from django.shortcuts import render
from django.http import HttpResponse


def index(requset):
	return render(requset,'index.html',{})