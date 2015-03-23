# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('storyline', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Aurthor',
            new_name='Author',
        ),
        migrations.RenameField(
            model_name='author',
            old_name='aurthorAccount',
            new_name='authorAccount',
        ),
    ]
