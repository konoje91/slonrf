$(document).ready(function() {

	$('a.about-company-link').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".about-company").offset().top
                }, 1000);
	});

	$('a.trust-us-link').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".trust-us").offset().top
                }, 1000);
	});

	$('a.offers-link').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".offers").offset().top
                }, 1000);
	});

	$('a.contacts-link').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".contacts").offset().top
                }, 1000);
	});

	$('.bottom').on('click', function(){
				$('html, body').animate({
                    scrollTop: $(".write-me").offset().top
                }, 1000);
	});

});
