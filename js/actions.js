$(document).ready(function() {

	$('form.order-form .button-order').on('click', function() {
		$(this).closest('form').submit();
	});

	$('form.order-form').on('submit', function () {
        var data = $(this).serialize(),
            form = this;

        $.ajax({
            type: 'POST',
            url: '/sendmail.php',
            data: data,
            response: 'text',
            success: function(data) {
                if(data == 'ok') {
            		$('form.order-form').hide();
            		$('.order .complete-message').show();
                } else {
                    var errors = data.split('|');
                    if(errors[0] == '1') $('input[name="name"]', form).css('border', '1px solid red');
                    if(errors[1] == '1') $('input[name="phone"]', form).css('border', '1px solid red');
                }
            }
        });

        return false;
    });

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
