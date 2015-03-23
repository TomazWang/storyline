# storyline : storyline/ajax.py

from django.shortcuts import render
from django.http import HttpResponse
from storyline.models import Story
from storyline.models import Post
from storyline.models import Author

import json

def getAllStorys(requset):
	# get the objects you to return
    storys = Story.objects.all()
    # construct a list which will contain all of the data for the response
    to_json = []
    for story in storys:
        # for each object, construct a dictionary containing the data you wish to return
        story_dict = {}

        story_dict['id'] = story.s_id
        story_dict['type'] = story.s_type
        story_dict['title'] = story.s_title
        story_dict['type_css'] = story.getTypeCss()

        posts = Post.objects.filter(link_story_id=story.s_id).order_by('link_story_order')
        first_post = posts.first()
        newest_post = posts.last()
        story_dict['cover_post'] = first_post.content
        story_dict['newest_update_date'] = str(newest_post.create_at.date())
        story_dict['newest_update_time'] = str(newest_post.create_at.time())

        author = Author.objects.filter(authorID = first_post.authorID)[0]

        story_dict['create_by'] = author.authorName

        # append the dictionary of each dog to the list
        to_json.append(story_dict)
    # convert the list to JSON
    response_data = json.dumps(to_json)
    # return an HttpResponse with the JSON and the correct MIME type
    return HttpResponse(response_data, content_type='application/json')



def summitNewStory(requset):

    s_title = requset.POST['title']
    s_type = requset.POST['story_type']
    
