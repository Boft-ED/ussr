// JavaScript for wave
(function ($) {
	$(document).ready(function () {
		"use strict";




		// Scroll down opacity
		var divs = $('.slider-inner');
		$(window).on('scroll', function () {
			var st = $(this).scrollTop();
			divs.css({ 'opacity': (1 - st / 700) });
		});




		// Litebox
		$('.swipebox').swipebox();



		// Parallax effect
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive: true
		});



		// Counter
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});



		// Hamburger Menu
		$('.hamburger-menu').on('click', function (e) {
			$(".hamburger-menu").toggleClass("menu-open");
			$(".navigation").toggleClass("show-me");
			$(".navigation ul li").toggleClass("show-me");
		});



		// Page transition
		$('.transition').on('click', function (e) {
			$('.transition-overlay').toggleClass("show-me");
		});


		// Transition delay
		$('.transition').on('click', function (e) {
			e.preventDefault();
			var goTo = this.getAttribute("href");
			setTimeout(function () {
				window.location = goTo;
			}, 1000);
		});



		// Hide Fixed Slider
		$(window).on("scroll touchmove", function () {
			$('.slider .slider-inner').toggleClass('hide', $(document).scrollTop() > 1500);
		});


	});


	// Wow animations
	wow = new WOW(
		{
			animateClass: 'animated',
			offset: 50
		}
	);
	wow.init();




	// Masonry
	$(window).load(function () {
		var $container = $('.portfolio-masonry');
		$container.masonry({
			columnWidth: 0,
			itemSelector: '.portfolio-masonry li'
		});
	});


	// history code
	var items = document.querySelectorAll(".timeline li");

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function callbackFunc() {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				if (!items[i].classList.contains("in-view")) {
					items[i].classList.add("in-view");
				}
			} else if (items[i].classList.contains("in-view")) {
				items[i].classList.remove("in-view");
			}
		}
	}


	window.addEventListener("load", callbackFunc);
	window.addEventListener("scroll", callbackFunc);


	var delay_popup = 200;
	var msg_pop = document.getElementById('msg_pop');
	setTimeout("document.getElementById('msg_pop').style.display='block';document.getElementById('msg_pop').className += 'fadeIn';", delay_popup);


})(jQuery);