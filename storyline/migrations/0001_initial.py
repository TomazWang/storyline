# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aurthor',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('authorID', models.IntegerField()),
                ('aurthorAccount', models.CharField(max_length=100)),
                ('authorName', models.CharField(max_length=100)),
                ('fb_key', models.CharField(max_length=200)),
                ('mail', models.CharField(max_length=300)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('p_id', models.IntegerField()),
                ('authorID', models.IntegerField()),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('link_story_id', models.IntegerField()),
                ('link_story_order', models.IntegerField()),
                ('content', models.TextField(blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Story',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('s_id', models.IntegerField()),
                ('s_type', models.CharField(max_length=30)),
                ('s_title', models.CharField(max_length=200)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
