$(document).ready(function(){
	//Decalre vars
	var totalWidth = 0; //combined width of all images
	var positions = new Array();

	$('#slides .slide').each(function(i){
		//Get slider widths
		positions[i] = totalWidth;   //traverse the slides and display widths
		totalWidth += $(this).width();

		//Check widths 
		if(!$(this).width()) {
			alert('Please add a width to your images');
			return false;
		}
	});
	//Set the widths
	$('#slides').width(totalWidth); //this makes all the images one width
	// Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll){
		// Remove active class and add inactive
		$('li.product').removeClass('active').addClass('inactive');
		// Add active class to parent
		$(this).parent().addClass('active');
		
		var pos  = $(this).parent().prevAll('.product').length;
		
		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
		
		// Prevent default
		e.preventDefault();
		
		// Stop autoscroll
		if(!autoScroll) clearInterval(itvl);
	});
// Make first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
	// Duration for auto scroll
	var duration = 10;
	var itvl = setInterval(function(){autoScroll()},duration*1000);
});