$(document).ready(function(){

	// new story btn listener
	$("#btn-new-story").click(function(){

		// console.log("click on new story btn");
		$("#new-story-page").show();
	});
});


$(document).mouseup(function (e)
{
	
	var container = $("#new-story-panel");
	// console.log(e.target);
	// console.log("container is targer ? " + container.is(e.target));
	// console.log("container has targer ? " + container.has(e.target).length);

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $("#new-story-page").hide();
    }
});