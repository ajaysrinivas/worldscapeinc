jQuery(function($) {'use strict',






	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});
	
	
	
		   $("#owl-demo").owlCarousel({
      autoPlay: 3000, 
  navigation : true,
   navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>" 
      ],
      items : 4,
	 autoplayHoverPause:false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	 itemsTablet: [768,2]


  });
    $("#owl-demo1").owlCarousel({
		autoPlay: 3000,
		navigation : true,
		navigationText:false,
		autoplayHoverPause:false,
		loop:false,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
      itemsTablet: [768,2]



  });
  
  
  
  $(".owl-carousel2").owlCarousel({
		autoPlay: 3000,
		navigation : true,
		navigationText:false,
		autoplayHoverPause:false,
		loop:false,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
      itemsTablet: [768,3],
	   itemsMobile : [479,1]    
	  



  });
  
  
  
  

	//Initiat WOW JS
	

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});


	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
	

	
		
});






/*******************/




