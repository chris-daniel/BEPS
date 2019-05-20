'use strict';
/*global jQuery, $ */

jQuery(document).ready(function() {

	// Larger device menu functions
	function openSubmenu(menu) {
	  	$(menu).attr('aria-expanded', 'true');
	    $(menu).next().slideDown();
	    $(menu).addClass('open');
	}
	function closeSubmenu(menu) {
	  	$(menu).attr('aria-expanded', 'false');
	    $(menu).next().slideUp();
	    $(menu).removeClass('open');
	}

	// Show sub menu indicator when js enabled
	$('header ul li a span').css({'display': 'inline-block'});

	var vp = $('.media-test').width();

	// Mobile menu controls
	if (vp == 100) {

		// Hide menu when js enabled
		$('header ul').hide();
		// Show menu open/close button when js enabled
		$('header .open-menu').show();

		// Menu show/hide
		$('.open-menu, .sub-menu').click(function () {
			$(this).toggleClass('open');
			if($(this).hasClass('open')) {
				$(this).attr('aria-expanded', 'true');
			} else {
				$(this).attr('aria-expanded', 'false');
			}
			$(this).next().slideToggle();
			return false;
		});

	}

	// Larger device menu controls
	if (vp == 200) {

		var timer;

		$('.sub-menu').hover(function() {
			clearTimeout(timer);
			openSubmenu('.sub-menu');
		}, function(){
			timer = setTimeout(function(){
			  closeSubmenu('.sub-menu');
			}, 1000);
		});

		// Actions
		// Hide snippet when js enabled
		$('.action .snippet').hide();

		// Show/hide action snippet
		$('.action').hover(function() {
			$('.snippet', this).slideDown();
		}, function(){
			$('.snippet', this).slideUp();	
		});

	}

	// Expanders
	// Set aria to false when js enabled
	$('.expander h3 a').attr('aria-expanded', 'false');
	// Show open/close indicator when js enabled
	$('.expander h3 a span').show();
	// Show expand all link when js enabled
	$('.expand-all').show();
	// Hide section copy when js enabled
	$('.expander .inline-copy').hide();

	// Show/hide accordian sections
	$('.expander h3 a').click(function () {
		$('span:last-child', this).toggle();
		$(this).parent().next().slideToggle();
		return false;
	});

	// Expand all accordian sections
	$('.expand-all').click(function () {
		if($(this).hasClass('open')) {
			$('.expander h3 a span:last-child').show();
			$('.expander .inline-copy').slideUp();
			$(this).text('Expand all').removeClass('open');
		} else {
			$('.expander h3 a span:last-child').hide();
			$('.expander .inline-copy').slideDown();
			$(this).text('Collapse all').addClass('open');
		}
		return false;
	});

	// Allow carousel to hit right screen edge while matching the left margin
	function checkLeftMargin() {
		var left = $(".container").offset().left;
		$('.carousel-container').css({'margin-left': left});
	}
	checkLeftMargin();

	var resizeTimer;
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkLeftMargin, 100);
	});

	$('.carousel').slick({
		arrows: false,
	    infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 512,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
		]
	});

	$('.carousel-next').click(function(){
	    $('.carousel').slick("slickNext");
	});
	$('.carousel-prev').click(function(){
	    $('.carousel').slick("slickPrev");
	});

});


