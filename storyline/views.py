# storyline : storyline/views.py

from django.shortcuts import render
from django.http import HttpResponse
from storyline.models import Story

def index(requset):

	story_list = []

	# for story in Story.objects.all():
	# 	story_list.append(story.getDict());

	return render(requset,'index.html',{
			# 'story_list' : story_list,
		})


