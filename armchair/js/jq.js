
$(function(){


$('.open-popupThanks').on('click', function(event){
	event.preventDefault();
	$('.popupThanks').fadeIn();
});

$('.popupThanks-close').on('click', function(event){
	event.preventDefault();
	$('.popupThanks').fadeOut();
});


$('.open-popupSend').on('click', function(event){
	event.preventDefault();
	$('.popupSend').fadeIn();
});

$('.popupSend-close').on('click', function(event){
	event.preventDefault();
	$('.popupSend').fadeOut();
});



});