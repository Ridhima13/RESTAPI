		$(document).ready(function() {
			$("a.example").fancybox({
				'opacity'		: true,
				'overlayShow'	: true,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});	
			$("a.exampleSignup").fancybox({
				'width'				: 500,
				'height'			: 450,
				'autoScale'			: true,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});	
			$("a.exampleLogin").fancybox({
				'width'				: 300,
				'height'			: 250,
				'autoScale'			: true,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});	
			
			$("area#internationalmap").fancybox({
				'overlayShow'	: true,
				'overlayOpacity':	0.7,
				'overlayColor'  :	'#000000',
			    'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
				$("area#internationalmap2").fancybox({
				'overlayShow'	: true,
				'overlayOpacity':	0.7,
				'overlayColor'  :	'#000000',
			    'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
				$("area#internationalmap3").fancybox({
				'overlayShow'	: true,
				'overlayOpacity':	0.7,
				'overlayColor'  :	'#000000',
			    'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
				$("area#internationalmap4").fancybox({
				'overlayShow'	: true,
				'overlayOpacity':	0.7,
				'overlayColor'  :	'#000000',
			    'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
				$("area#internationalmap5").fancybox({
				'overlayShow'	: true,
				'overlayOpacity':	0.7,
				'overlayColor'  :	'#000000',
			    'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
				
						$("area#internationalmap6").fancybox({
				'overlayShow'	: true,
				'overlayOpacity':	0.7,
				'overlayColor'  :	'#000000',
			     'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
				
				$("a[rel=example_group]").fancybox({
    'transitionIn'  : 'none',
    'transitionOut'  : 'none',
    'titlePosition'  : 'over',
    'titleFormat'  : function(title, currentArray, currentIndex, currentOpts) {
     return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
    }
   });
				
		});