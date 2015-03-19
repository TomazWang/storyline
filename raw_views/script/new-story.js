$(document).ready(function(){

	var storyType = "none"; // default story type


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
			storyType = "btn-st-poem";			
			break;

			case "btn-st-comedy":
			$("#new-story-panel").attr('class','panel panel-warning');
			storyType="btn-st-comedy";
			break;

			case "btn-st-thriller":
			$("#new-story-panel").attr('class','panel panel-danger');
			storyType = "btn-st-thriller";
			break;

		}

	});



	$("#summit-new-story").click(function(){
		// check if story type has been selected.
		if(storyType == "none"){
			alert("Please select a type");
			return;
		}




	});


});


