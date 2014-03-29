/* 
	*Author : Jones V Rajan (jonesvrajan@gmail.com).
	*For    : Bounzd;
	*Date   : 7-3-2013; 
*/
   
$(function(){
	
	$('ul li:first-child').addClass('first');
	$('ul li:last-child').addClass('last');
	$('ul li:odd').addClass('odd');
	$('ul li:even').addClass('even');


	//Responsive Menu
	var windowWidth = $(window).width();
	menuStat();
	$(window).resize(function() {
		var windowWidth = $(window).width();
		menuStat();
		$('.show-menu').next('ul').css('display','none');
		if(windowWidth>768) {
			$('.show-menu').next('ul').css('display','block');
		}
		else {
			$('.show-menu').next('ul').css('display','none');
		}
	});

	$('.show-menu').click(function(event) {
		event.preventDefault();
		var Stat = $('.show-menu').next('ul').css('display');
		if(Stat == 'block') {
			$('.show-menu').text('Show Menu');
		}
		else {
			$('.show-menu').text('Hide Menu');
		}
		$(this).next('ul').slideToggle(300);
	});
	
	//FancyBox init
	$('.video-pop-up,.video-button').fancybox({
		'scrolling' : 'no' ,
		'width'				: '75%',
		'height'			: '75%',
		'type'				: 'iframe',
		'overlayColor' : '#927c16',
		'overlayOpacity' : '0.8'
	});
	
});
	

$(window).load(function(){
	//Flexslider init
 	$('.banner-area > .flexslider').flexslider({
		slideshow: true,
		directionNav: false,
		controlNav: false,
		keyboardNav: false,
		slideshowSpeed:2000,
		smoothHeight: true, 		
	});
	$('.testimonials .flexslider').flexslider({
		slideshow: true,
		directionNav: true,
		controlNav: false,
		animation: "slide", 
		slideshowSpeed:3000,		
	});
	$('.screenshots .flexslider').flexslider({
		slideshow: true,
		directionNav: true,
		controlNav: false,
		animation: "slide", 
		slideshowSpeed:3000,		
	});
}); 


function menuStat() {
	var Stat = $('a.show-menu').next('ul').css('display');
	if(Stat == 'none') {
		$('a.show-menu').text('Show Menu');
	}
	else {
		$('a.show-menu').text('Hide Menu');
	}
}

$(window).resize(function(){
	function widthSetting() {
	$('.tab-featured').css('max-width', windowWidth - 483)
	}
	$('.scroll-pane').jScrollPane();
	//widthSetting();
});

$(window).load(function(){
	var cnt = $('ul.customers > li').length;
	var liWidth = $('ul.customers > li').width();
	$('ul.customers').css('width', cnt * liWidth);
	
	//Scroll pane init
	$('.scroll-pane').jScrollPane();

	//Tabs 
	$('#tab-content .tab-content').hide();
	$('#tab-content .tab-content:first-child').show();
	$('.tab-head li:first-child').addClass('current');

	$('.tab-head li').live('click', function(){
		$('.tab-head li').removeClass('current');
		$(this).addClass('current');
		$('#tab-content .tab-content').hide();
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
	});	
});
