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

		console.log("new" + storyType+ " story");
		console.log(text);

		$("#new-story-page").hide();
		storyType = "none";	
		$("#new-story-textarea").val("");
	});



});




