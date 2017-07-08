$(function() {

	var	viewport				=	$(window),
		basil					=	$('.basil'),
		scrollEventFrequency	=	250;

	// Run Basil on ready in case there's any elements already in 'view'
	basil.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("is-visible"); 
		} 
	});


	// Set throttle to true when a scroll event fires
	viewport.scroll(function() {

	// Check if any elements should become visible
	basil.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("is-visible"); 
		} 
	});

	});

	// Scroll smoothly to anchor links
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 600);
                return false;
            }
        }
    });

});