from storyline.models import Post

Post.objects.create(
		p_id = 1,
		authorID = 1,
		link_story_id = 1,
		link_story_order = 0,
		content = "First line in first story."
	)

Post.objects.create(
		p_id = 2,
		authorID = 1,
		link_story_id = 1,
		link_story_order = 1,
		content = "Sec line in first story."
	)

Post.objects.create(
		p_id = 3,
		authorID = 2,
		link_story_id = 2,
		link_story_order = 0,
		content = "First line in 2ed story."
	)

Post.objects.create(
		p_id = 4,
		authorID = 2,
		link_story_id = 3,
		link_story_order = 0,
		content = "First line in 3rd story."
	)