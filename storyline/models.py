# stroyline/models.py

from django.db import models

class Story(models.Model):

	s_id = models.AutoField(primary_key=True)
	s_type = models.CharField(max_length = 30)
	s_title = models.CharField(max_length = 200)

	def __str__(self):
		return str(self.s_id)+'. '+self.s_title


	def getTypeCss(self):

		type_css = ''

		if self.s_type == 'sifi':
			type_css = 'panel-primary'
		elif self.s_type == 'drama':
			type_css = 'panel-success'
		elif self.s_type == 'poem':
			type_css = 'panel-info'
		elif self.s_type == 'comedy':
			type_css = 'panel-warning'
		elif self.s_type == 'thirller':
			type_css = 'panel-danger'

		return type_css


# Post: 每一個po文，屬於一篇Story
class Post(models.Model):

	# post id
	p_id = models.AutoField(primary_key=True)
	# author id to find author info
	authorID = models.IntegerField()
	# create time
	create_at = models.DateTimeField(auto_now_add = True)
	# create story id to find story info
	link_story_id = models.IntegerField()
	# this post is the nth in the story
	link_story_order = models.IntegerField()
	# main content
	content = models.TextField(blank=True)


	def __str__(self):
		return str(self.p_id)+'( '+str(self.link_story_id)+' - '+str(self.link_story_order)+' )'


# Author: user in storyline
class Author(models.Model):

	authorID = models.AutoField(primary_key=True)
	authorAccount = models.CharField(max_length=100)
	authorName = models.CharField(max_length=100)
	fb_key = models.CharField(max_length=200)
	mail = models.CharField(max_length=300)

	def __str__(self):
		return str(self.authorID)+'. '+self.authorName+'('+self.authorAccount+')'
