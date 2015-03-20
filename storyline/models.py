# stroyline/models.py

from django.db import models

class Story(models.Model):

	s_id = models.IntegerField()
	s_type = models.CharField(max_length = 30)
	content = models.TextField(blank=True)
	authorID = models.CharField(max_length = 100)
	creat_at = models.DateTimeField(auto_now_add = True)


	def __str__(self):
		return str(self.s_id)


	def getDict(self):
		
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

		stroyDict = {
			'id' : self.s_id,
			'type' : self.s_type,
			'content' : self.content,
			'creat_at' : self.creat_at,
			'type_css' : type_css,
		}

		return stroyDict