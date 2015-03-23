$(document).ready(function(){
	$.getJSON('data/get_all_story_cover',function(data){

		var story_container = $('#storys');
		var see_more_block = $('#see-more-block');
		var len = data.length;

		$row_div = $('<div />',{
			"class" : 'row row-eq-height',
			});

		$.each( data, function(i) {
			// console.log(i+'th item');
			$story = this;
			// console.log($story);

			// create stroy panel
			$panel_div = $('<div>')
				.addClass('panel panel-default')
				.addClass($story['type_css'])
				.addClass('story-panel');

			// add heading 
			$panel_heading = 
					'<div class="panel-heading">'
						+'<h1 class="panel-title">'+$story['title']+'</h1>'
					+'</div>';
			$panel_div.append($panel_heading);

			// add panel body
			$panel_body = 
					'<div class="panel-body">'
						+ '<p class="story-text disable-select">'
							+ $story['cover_post']
						+ '</p>'
					+'</div>'
				;

			$panel_div.append($panel_body);

			// console.log('panel_div = ');
			// console.log($panel_div);



			$col_div = $('<div />').addClass('col-sm-6').append($panel_div);

			$row_div.append($col_div);

			if(i%2 == 1 || i == len-1 ){
				story_container.append($row_div);
				if(i != len-1){
					$row_div = $('<div />').addClass('row row-eq-height');
				}
			}


		});

	});

});