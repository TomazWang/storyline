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
			$("#new-story-panel").attr('class','panel panel-primary');
			storyType = "sifi";
			break;

			case "btn-st-drama":
			$("#new-story-panel").attr('class','panel panel-success');
			storyType = "drama";
			break;

			case "btn-st-poem":
			$("#new-story-panel").attr('class','panel panel-info');
			storyType = "poem";			
			break;

			case "btn-st-comedy":
			$("#new-story-panel").attr('class','panel panel-warning');
			storyType="comedy";
			break;

			case "btn-st-thriller":
			$("#new-story-panel").attr('class','panel panel-danger');
			storyType = "thriller";
			break;

		}

	});



	$("#summit-new-story").click(function(){
		// check if story type has been selected.

		var text = $("#new-story-textarea").val();

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


		$("body").mouseup(function (e){
			var container = $("#new-story-panel");

			if (!container.is(e.target) // if the target of the click isn't the container...
        		&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
				closeNewStoryDialog();
			}
		});
	}


	function closeNewStoryDialog(){

		$("#new-story-page").hide();
		$("body").unbind('mouseup');
		resetNewStoryDialog();

	}


	function resetNewStoryDialog(){
		$("#new-story-page").hide();
		storyType = "none";	
		$("#new-story-textarea").val("");
	}



	function summitNewStory(){
		console.log("new" + storyType+ " story");
		console.log(text);
	}
});




