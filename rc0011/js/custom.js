jQuery(document).ready(function ($) {

    /* Alert Messages */
	
    $(".alert-msg .close").click(function () {
        $(this).parent().animate({
            "opacity": "0"
        }, 400).slideUp(400);
        return false;
    });

    /* Accordions */

    $(".accordion-title").click(function () {
        $(".accordion-title").removeClass("active");
        $(".accordion-content").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this).next().slideDown("normal");
        }
    });
    $(".accordion-content").hide();

    /* Toggles */

    $(".toggle-title").click(function () {
        $(this).toggleClass("active").next().slideToggle("fast");
        return false;
    });

    /* Tabs */

    $(".tab-wrapper").tabs({
        event: "click"
    })

    /* Vertically Centre Text On Images */

    $.fn.flexVerticalCenter = function (onAttribute) {
        return this.each(function () {
            var $this = $(this);
            var attribute = onAttribute || 'margin-top';
            var resizer = function () {
                $this.css(
                attribute, (($this.parent().height() - $this.height()) / 2));
            };
            resizer();
            $(window).resize(resizer);
        });
    };

    // To run the function:
    $('.viewit').flexVerticalCenter();

    /* Slider */

    $("#rslides").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 300, // Integer: Speed of the transition, in milliseconds
        timeout: 4000, // Integer: Time between slide transitions, in milliseconds
        pager: false, // Boolean: Show pager, true or false
        nav: true, // Boolean: Show navigation, true or false
        random: false, // Boolean: Randomize the order of the slides, true or false
        pause: true, // Boolean: Pause on hover, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "Previous", // String: Text for the "previous" button
        nextText: "Next", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "centered-btns" // String: Change the default namespace used
    });


});

/*tool tip*/


$( function()
	{
		var targets = $( '[rel~=tooltip]' ),
			target	= false,
			tooltip = false,
			title	= false;

		targets.bind( 'mouseenter', function()
		{
			target	= $( this );
			tip		= target.attr( 'title' );
			tooltip	= $( '<div id="tooltip"></div>' );

			if( !tip || tip == '' )
				return false;

			target.removeAttr( 'title' );
			tooltip.css( 'opacity', 0 )
				   .html( tip )
				   .appendTo( 'body' );

			var init_tooltip = function()
			{
				if( $( window ).width() < tooltip.outerWidth() * 1.5 )
					tooltip.css( 'max-width', $( window ).width() / 2 );
				else
					tooltip.css( 'max-width', 340 );

				var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
					pos_top	 = target.offset().top - tooltip.outerHeight() - 20;

				if( pos_left < 0 )
				{
					pos_left = target.offset().left + target.outerWidth() / 2 - 20;
					tooltip.addClass( 'left' );
				}
				else
					tooltip.removeClass( 'left' );

				if( pos_left + tooltip.outerWidth() > $( window ).width() )
				{
					pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
					tooltip.addClass( 'right' );
				}
				else
					tooltip.removeClass( 'right' );

				if( pos_top < 0 )
				{
					var pos_top	 = target.offset().top + target.outerHeight();
					tooltip.addClass( 'top' );
				}
				else
					tooltip.removeClass( 'top' );

				tooltip.css( { left: pos_left, top: pos_top } )
					   .animate( { top: '+=10', opacity: 1 }, 50 );
			};

			init_tooltip();
			$( window ).resize( init_tooltip );

			var remove_tooltip = function()
			{
				tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
				{
					$( this ).remove();
				});

				target.attr( 'title', tip );
			};

			target.bind( 'mouseleave', remove_tooltip );
			tooltip.bind( 'click', remove_tooltip );
		});
	});