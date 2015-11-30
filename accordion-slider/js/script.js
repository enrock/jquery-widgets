// Accordion 
// 
	var action = "click";
	var speed = "500";

	$(document).ready(function(){  //mouse event, clicked or hovered 
	//Question handler
		$('li.q').on(action ,function(){ //get next element
			$(this).next()
			.slideToggle(speed) //pass speed var
				.siblings('li.a') //pass siblings to close prev toggle
				.slideUp();
	//Get image for active question 
	var img = $(this).children('img') //grab child elements
		$('img').not('img').removeClass('rotate'); //Remove the rotate class for all images except the active class

		img.toggleClass('rotate'); //toggle rotate img class
			});
	});
