$(document).ready(function(){

	var storyType = "none"; // default story type
	// new story btn listener
	$("#btn-new-story").click(function(){

		openNewStoryDialog();

	});

	// story type btn listeners, change panel color when click
	$(".btn-story-type").click(function(){
		switch($(this).attr('id')){
			case "btn-st-sifi":
			changeStroyType('sifi');
			break;

			case "btn-st-drama":
			changeStroyType('drama');
			break;

			case "btn-st-poem":
			changeStroyType('poem');
			break;

			case "btn-st-comedy":
			changeStroyType('comedy');
			break;

			case "btn-st-thriller":
			changeStroyType('thriller');
			break;

		}

	});



	$("#summit-new-story").click(function(){
		// check if story type has been selected.

		text = $("#new-story-textarea").val();

		console.log("story type = " + storyType);
		console.log("story text = " + text);
		
		if(text=="" && storyType){
			alert("Please enter some story and select a story type");
			return;
		}
		if(text == ""){
			alert("Please enter some story");
			return;
		}

		if(storyType == "none"){
			alert("Please select a type");
			return;
		}


		// summit a new stroy
		summitNewStory();

		// close dialog
		closeNewStoryDialog();

	});

	function openNewStoryDialog(){
		// console.log("click on new story btn");
		$("#new-story-page").show();

		$("body").mousedown(function(e){

			container = $("#new-story-panel");

			if (!container.is(e.target) // if the target of the click isn't the container...
	        			&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{

				$(this).mouseup(function (e){

					if (!container.is(e.target) // if the target of the click isn't the container...
        				&& container.has(e.target).length === 0) // ... nor a descendant of the container
					{
						closeNewStoryDialog();
					}
				});
			}
		});

		$(document).bind('keydown',function(e){
			if(e.which == 27){
				closeNewStoryDialog();
			}
		});

	}


	function closeNewStoryDialog(){

		// add a leave check if there's some data in inpur field

		resetNewStoryDialog();

		$("#new-story-page").hide();
		$("body").unbind('mouseup');
		$("body").unbind('mousedown');
		$(document).unbind('keydown');

	}


	function resetNewStoryDialog(){
		console.log("reset new story dialog");

		changeStroyType("");
		$("#new-story-textarea").val("");
		$('#new-story-title').val('');
		$("#new-story-panel-title").text("New Story");
		$("#new-story-page").hide();
	}


	function changeStroyType(st){

		switch(st){

			case "sifi":
			$("#new-story-panel").attr('class','panel panel-primary');
			storyType = "sifi";
			break;

			case "drama":
			$("#new-story-panel").attr('class','panel panel-success');
			storyType = "drama";
			break;

			case "poem":
			$("#new-story-panel").attr('class','panel panel-info');
			storyType = "poem";			
			break;

			case "comedy":
			$("#new-story-panel").attr('class','panel panel-warning');
			storyType="comedy";
			break;

			case "thriller":
			$("#new-story-panel").attr('class','panel panel-danger');
			storyType = "thriller";
			break;

			default :
			storyType = "none";
			$("#new-story-panel").attr('class','panel panel-default');
			break;
		}

	}


	function summitNewStory(){
		console.log("new" + storyType+ " story");
		console.log(text);
	}






	// dynamic sync story title
	$('#new-story-title').focus(function(){

		$(document).keyup(function(){

			title_text = $('#new-story-title').val();

			if(title_text != ''){
				$('#new-story-panel-title').text(title_text);
			}else{
				$('#new-story-panel-title').text("New Story");
			}
		});

	});


});



