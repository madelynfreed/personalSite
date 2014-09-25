$(document).ready(function($) {
	$(".menu").waypoint('sticky');
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$('.largeImage').stop().animate({height: '50px', width: '50px', 'padding-top': '0px'});
	}
	else {
		$('.largeImage').stop().animate({height: '300px', width: '300px', 'padding-top': '20px'});
	}
});