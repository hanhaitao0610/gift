// JavaScript Document
$(function() {
	var height = $(window).height();
	$("body").height(height);
	if ($("header").height()) {
		height -= $("header").height();
	}
	if ($("footer").height()) {
		height -= $("footer").height();
	}
	$("main").height(height);
	
});
