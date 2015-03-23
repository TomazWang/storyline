# stroyline/admin.py

from django.contrib import admin
from storyline.models import Story
from storyline.models import Post
from storyline.models import Author

admin.site.register(Story)
admin.site.register(Post)
admin.site.register(Author)