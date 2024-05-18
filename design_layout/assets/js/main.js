"user strict";

$(document).ready(function () {
	//--Owl Carousel--//
	$(".banner-wrapper").owlCarousel({
		loop: true,
		margin: 0,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	$(".crime-wrapper").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2500,
		autoplayTimeout: 2500,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 2,
			},
			1499: {
				items: 3,
			},
			1999: {
				items: 3,
			},
		},
	});
	$(".casino-demo-wrapper").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 2,
			},
			767: {
				items: 3,
			},
			991: {
				items: 4,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 4,
			},
			1499: {
				items: 4,
			},
			1699: {
				items: 4,
			},
		},
	});
	$(".letest-wrapper").owlCarousel({
		loop: true,
		margin: 30,
		smartSpeed: 2000,
		autoplayTimeout: 2000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 2,
			},
			1499: {
				items: 3,
			},
			1999: {
				items: 3,
			},
		},
	});
	$(".letest-wrapper2").owlCarousel({
		loop: true,
		margin: 30,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 2,
			},
			1499: {
				items: 3,
			},
			1999: {
				items: 3,
			},
		},
	});
	$(".letest-wrapper3").owlCarousel({
		loop: true,
		margin: 30,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 2,
			},
			1499: {
				items: 3,
			},
			1999: {
				items: 3,
			},
		},
	});
	$(".live-slider-1").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 2,
			},
			767: {
				items: 3,
			},
			991: {
				items: 4,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 4,
			},
			1499: {
				items: 4,
			},
			1699: {
				items: 4,
			},
		},
	});
	$(".testimonial-slider").owlCarousel({
		loop: true,
		margin: 25,
		smartSpeed: 900,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
		},
	});
	$(".medals-slider").owlCarousel({
		loop: true,
		margin: 25,
		smartSpeed: 900,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 3,
			},
			400: {
				items: 4,
			},
			560: {
				items: 5,
			},
			767: {
				items: 5,
			},
			1199: {
				items: 5,
			},
			1399: {
				items: 7,
			},
		},
	});

	//--Owl Carousel--//
	

	

	//--Nice Select--//
	$('select').niceSelect();
	
	$(document).click(function() {
		$('.dropdown-menu.show').removeClass('show');
	});
	$('body').on('click','.apto-trigger-dropdown', function(e){
		e.stopPropagation();
		$(this).closest('.apto-dropdown-wrapper').find('.dropdown-menu').toggleClass('show');
	});
	$('body').on('click','.dropdown-item', function(e){
		e.stopPropagation();
		let $selectedValue = $(this).val(); 
		let $icon          = $(this).find('svg');
		let $btn           = $(this).closest('.apto-dropdown-wrapper').find('.apto-trigger-dropdown');
		
		$(this).closest('.apto-dropdown-wrapper').find('.dropdown-menu').removeClass('show').attr('data-selected', $selectedValue);
		$btn.find('svg').remove();
		$btn.prepend($icon[0].outerHTML);
		
	});
	//--Nice Select--//

	//--Lottery--//
	// select lottery
    $(".custom__number").click(function () {
		$(this).toggleClass("custom__number__active");
		var numItems = $(".custom__number__active").length;
		if (numItems === 7) {
		  $(".custom__number").addClass("custom__number__deactive");
		  $(".custom__number__active").removeClass("custom__number__deactive");
		} else {
		  $(".custom__number").removeClass("custom__number__deactive");
		  $(".custom__number__active").removeClass("custom__number__deactive");
		}
		var activeTicketNumber = $(".custom__number__active");
		var ticketNumberFix = $(".ticket__numbers");
  
		// first number
		if (activeTicketNumber.eq(0).not(".custom__number__active")) {
		  ticketNumberFix.eq(0).html("00");
		}
		ticketNumberFix.eq(0).html(activeTicketNumber.eq(0).children().html());
  
		// second number
		if (activeTicketNumber.eq(1).not(".custom__number__active")) {
		  ticketNumberFix.eq(1).html("00");
		}
		ticketNumberFix.eq(1).html(activeTicketNumber.eq(1).children().html());
  
		// third number
		if (activeTicketNumber.eq(2).not(".custom__number__active")) {
		  ticketNumberFix.eq(2).html("00");
		}
		ticketNumberFix.eq(2).html(activeTicketNumber.eq(2).children().html());
  
		// fourth number
		if (activeTicketNumber.eq(3).not(".custom__number__active")) {
		  ticketNumberFix.eq(3).html("00");
		}
		ticketNumberFix.eq(3).html(activeTicketNumber.eq(3).children().html());
  
		// fifth number
		if (activeTicketNumber.eq(4).not(".custom__number__active")) {
		  ticketNumberFix.eq(4).html("00");
		}
		ticketNumberFix.eq(4).html(activeTicketNumber.eq(4).children().html());
  
		// sixth number
		if (activeTicketNumber.eq(5).not(".custom__number__active")) {
		  ticketNumberFix.eq(5).html("00");
		}
		ticketNumberFix.eq(5).html(activeTicketNumber.eq(5).children().html());
  
		// seven number
		if (activeTicketNumber.eq(6).not(".custom__number__active")) {
		  ticketNumberFix.eq(6).html("00");
		}
		ticketNumberFix.eq(6).html(activeTicketNumber.eq(6).children().html());
	  });
	  $(".magic__filter").on("click", function () {
		var itemss = $(".custom__number");
		var random = Math.floor(Math.random() * 10);
		var random2 = Math.floor(Math.random() * (20 - 10) + 10);
		var random3 = Math.floor(Math.random() * (30 - 20) + 20);
		var random4 = Math.floor(Math.random() * (40 - 30) + 30);
		var random5 = Math.floor(Math.random() * (50 - 40) + 40);
		var random6 = Math.floor(Math.random() * (55 - 50) + 50);
		var random7 = Math.floor(Math.random() * (60 - 55) + 55);
  
		itemss.removeClass("custom__number__active");
		itemss.eq(random).addClass("custom__number__active");
		itemss.eq(random2).addClass("custom__number__active");
		itemss.eq(random3).addClass("custom__number__active");
		itemss.eq(random4).addClass("custom__number__active");
		itemss.eq(random5).addClass("custom__number__active");
		itemss.eq(random6).addClass("custom__number__active");
		itemss.eq(random7).addClass("custom__number__active");
  
		var activeTicketNumber = $(".custom__number__active");
		var ticketNumberFix = $(".ticket__numbers");
  
		// first number
		if (activeTicketNumber.eq(0).not(".custom__number__active")) {
		  ticketNumberFix.eq(0).html("00");
		}
		ticketNumberFix.eq(0).html(activeTicketNumber.eq(0).children().html());
  
		// second number
		if (activeTicketNumber.eq(1).not(".custom__number__active")) {
		  ticketNumberFix.eq(1).html("00");
		}
		ticketNumberFix.eq(1).html(activeTicketNumber.eq(1).children().html());
  
		// third number
		if (activeTicketNumber.eq(2).not(".custom__number__active")) {
		  ticketNumberFix.eq(2).html("00");
		}
		ticketNumberFix.eq(2).html(activeTicketNumber.eq(2).children().html());
  
		// fourth number
		if (activeTicketNumber.eq(3).not(".custom__number__active")) {
		  ticketNumberFix.eq(3).html("00");
		}
		ticketNumberFix.eq(3).html(activeTicketNumber.eq(3).children().html());
  
		// fifth number
		if (activeTicketNumber.eq(4).not(".custom__number__active")) {
		  ticketNumberFix.eq(4).html("00");
		}
		ticketNumberFix.eq(4).html(activeTicketNumber.eq(4).children().html());
  
		// sixth number
		if (activeTicketNumber.eq(5).not(".custom__number__active")) {
		  ticketNumberFix.eq(5).html("00");
		}
		ticketNumberFix.eq(5).html(activeTicketNumber.eq(5).children().html());
  
		// seven number
		if (activeTicketNumber.eq(6).not(".custom__number__active")) {
		  ticketNumberFix.eq(6).html("00");
		}
		ticketNumberFix.eq(6).html(activeTicketNumber.eq(6).children().html());
  
		var numItems = $(".custom__number__active").length;
  
		if (numItems === 7) {
		  $(".custom__number").addClass("custom__number__deactive");
		  $(".custom__number__active").removeClass("custom__number__deactive");
		} else {
		  $(".custom__number").removeClass("custom__number__deactive");
		  $(".custom__number__active").removeClass("custom__number__deactive");
		}
	  });
	  $(".save__ticket").on("click", function () {
		var luckyNumbers = $(".lucky__numbers");
		var ticketNumberFix = $(".ticket__numbers");
		luckyNumbers.eq(0).html(ticketNumberFix.eq(0).html());
		luckyNumbers.eq(1).html(ticketNumberFix.eq(1).html());
		luckyNumbers.eq(2).html(ticketNumberFix.eq(2).html());
		luckyNumbers.eq(3).html(ticketNumberFix.eq(3).html());
		luckyNumbers.eq(4).html(ticketNumberFix.eq(4).html());
		luckyNumbers.eq(5).html(ticketNumberFix.eq(5).html());
		luckyNumbers.eq(6).html(ticketNumberFix.eq(6).html());
	  });
	  $(".delete, .reset").on("click", function () {
		$(".custom__number").removeClass(
		  "custom__number__active custom__number__deactive"
		);
		$(".ticket__numbers").html("00");
		$(".lucky__numbers").html("00");
	  });
  
	  // select payment system
	  $(".payment__system__checkbox__single").on("click", function (e) {
		$(".payment__system__checkbox__single")
		  .not(this)
		  .removeClass("payment__system__checkbox__single__active");
		$(this).toggleClass("payment__system__checkbox__single__active");
		if (
		  $(".payment__system__checkbox__single").hasClass(
			"payment__system__checkbox__single__active"
		  )
		) {
		  var checkbox = $(this).find("input[type=checkbox]");
		  checkbox.prop("checked", true);
		  $(".payment__system__plan").slideDown(300);
		  $(".payment__system__plan").prev().addClass("legen__active");
		} else {
		  $(".payment__system__plan").slideUp(300);
		  $(".payment__system__plan").prev().removeClass("legen__active");
		}
	  });
	  $(
		".pay__system__check, .check_wrap, .payment__system__checkbox__single"
	  ).click(function (e) {
		e.stopPropagation();
		return true;
	  });
	  $(".pay__system__check").on("click", function (e) {
		$(".payment__system__checkbox__single")
		  .not(this.closest(".payment__system__checkbox__single"))
		  .removeClass("payment__system__checkbox__single__active");
		$(this)
		  .closest(".payment__system__checkbox__single")
		  .toggleClass("payment__system__checkbox__single__active");
		if (
		  $(".payment__system__checkbox__single").hasClass(
			"payment__system__checkbox__single__active"
		  )
		) {
		  var checkbox = $(this);
		  checkbox.prop("checked", true);
		}
	  });
	  // select investment plan
	  $(".checkbox__investment__plan").on("click", function (e) {
		$(".checkbox__investment__plan")
		  .not(this)
		  .removeClass("checkbox__investment__plan__active");
		$(this).toggleClass("checkbox__investment__plan__active");
		if (
		  $(".checkbox__investment__plan").hasClass(
			"checkbox__investment__plan__active"
		  )
		) {
		  var checkboxPlan = $(this).find("input[type=checkbox]");
		  checkboxPlan.prop("checked", true);
		  $(".payment__system__amount").slideDown(300);
		  $(".payment__system__amount").prev().addClass("legen__active");
		} else {
		  $(".payment__system__amount").slideUp(300);
		  $(".payment__system__amount").prev().removeClass("legen__active");
		}
	  });
	  $(
		".pay__system__check__plan, .check_wrap_plan, .checkbox__investment__plan"
	  ).click(function (e) {
		e.stopPropagation();
		return true;
	  });
	  $(".pay__system__check__plan").on("click", function (e) {
		$(".checkbox__investment__plan")
		  .not(this.closest(".checkbox__investment__plan"))
		  .removeClass("checkbox__investment__plan__active");
		$(this)
		  .closest(".checkbox__investment__plan")
		  .toggleClass("checkbox__investment__plan__active");
		if (
		  $(".checkbox__investment__plan").hasClass(
			"checkbox__investment__plan__active"
		  )
		) {
		  var checkboxPlan = $(this);
		  checkboxPlan.prop("checked", true);
		}
	  });
	  $("#withAmount").on("input", function () {
		if ($(this).val().length === 0) {
		  $(".wallet__system").slideUp(300);
		  $(".wallet__system").prev().removeClass("legen__active");
		} else {
		  $(".wallet__system").slideDown(300);
		  $(".wallet__system").prev().addClass("legen__active");
		}
	  });
	  $("#wallAdd").on("input", function () {
		if ($(this).val().length === 0) {
		  $(".operation").slideUp(300);
		  $(".operation").prev().removeClass("legen__active");
		} else {
		  $(".operation").slideDown(300);
		  $(".operation").prev().addClass("legen__active");
		}
	  });
	  $("#wallAddTwo").on("input", function () {
		if ($(this).val().length === 0) {
		  $(".payment__system__method").slideUp(300);
		  $(".payment__system__method").prev().removeClass("legen__active");
		} else {
		  $(".payment__system__method").slideDown(300);
		  $(".payment__system__method").prev().addClass("legen__active");
		}
	  });
	  // history toggle
	  $(".depo__history__btn").click(function () {
		$(this).toggleClass("depo__history__btn__active");
		$(this).parent().next(".deposit__history__wrapper").slideToggle(300);
	  });
	  // dashboard lottery tab
	  $(".dashboard__lottery__tab__content").hide();
	  $(".dashboard__lottery__tab__content:first").show();
	  $(".dashboard__lottery__tab__btn").on("click", function () {
		$(".dashboard__lottery__tab__btn").removeClass(
		  "dashboard__lottery__tab__btn__active"
		);
		$(this).addClass("dashboard__lottery__tab__btn__active");
		$(".dashboard__lottery__tab__content").hide();
  
		var activeLottery = $(this).attr("href");
		$(activeLottery).fadeIn();
		return false;
	  });
	//--Lottery--//

	//--Progress Bar--//
	$(".animated-progress span").each(function () {	
		$(this).animate(
		  {
			width: $(this).attr("data-progress") + "%",
		  },
		  1000
		);
		$(this).text($(this).attr("data-progress") + "%");
	  });
	//--Progress Bar--//


	/* Tab Section Js area */
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active act");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});


	/*-------- Magnific Popup Start--------*/
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});

	/*-------- Magnific Popup Start--------*/

	 //dashboard menu
	 $('.main-body .dashboard-active, .ov-dsh').on('click', function () {
		$('.main-body .dashboar-leftbar, .ov-dsh').toggleClass('active');
	  });
	  //dashboard menu

	//free popup
	$(".Click-here").on('click', function() {
		$(".custom-model-main").addClass('model-open');
	}); 
	$(".close-btn, .bg-overlay").click(function(){
		$(".custom-model-main").removeClass('model-open');
	});

	$(".click-heretwo").on('click', function() {
		$(".referral-model-main").addClass('model-open');
	}); 
	$(".close-btn, .bg-overlay").click(function(){
		$(".referral-model-main").removeClass('model-open');
	});
	//free popup
	  
	//Click event to scroll to top end

	/*-- Odometer Counting Start--*/
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	/*-- Odometer Counting End--*/

	/*-- Woe Animation Start--*/
	new WOW().init();
	/*-- Wow Animation End--*/

	/*-- Preloader Start--*/
	setTimeout(function(){
		$('.boxes-bg').fadeToggle();
	}, 2000);
	/*-- Preloader End--*/
	//Search Click
	$(document).ready(function(){
		$('a[href="#search"]').on('click', function(event) {                    
			$('#search').addClass('open');
			$('#search > form > input[type="search"]').focus();
		});            
		$('#search, #search button.close').on('click keyup', function(event) {
			if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
				$(this).removeClass('open');
			}
		});            
	});

	//Timing Hours
	$(".countdown").each(function () {
		var date = $(this).data("date");
		$(this).countdown({
			date: date,
			offset: +6,
			day: "Day",
			days: "Days",
		});
	});	
	//Quantity number
});

//--Login Register Popup--//
	jQuery(document).ready(function($){
		$('.cd-popup-trigger').on('click', function(event){
			event.preventDefault();
			$('.cd-popup').addClass('is-visible');
		});
		$('.cd-popup').on('click', function(event){
			if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
				event.preventDefault();
				$(this).removeClass('is-visible');
			}
		});
		$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup').removeClass('is-visible');
			}
		});
	});

	jQuery(document).ready(function($){
		$('.mypopup').on('click', function(event){
			event.preventDefault();
			$('.opent-code').addClass('is-visible');
		});
		$('.opent-code').on('click', function(event){
			if( $(event.target).is('.cd-popup-close') || $(event.target).is('.opent-code') ) {
				event.preventDefault();
				$(this).removeClass('is-visible');
			}
		});
		$(document).keyup(function(event){
			if(event.which=='27'){
				$('.opent-code').removeClass('is-visible');
			}
		});
		
	});

	jQuery(document).ready(function($){
		$('.repopup').on('click', function(event){
			event.preventDefault();
			$('.repeatpopup').addClass('is-visible');
		});
		$('.repeatpopup').on('click', function(event){
			if( $(event.target).is('.cd-popup-close') || $(event.target).is('.repeatpopup') ) {
				event.preventDefault();
				$(this).removeClass('is-visible');
			}
		});
		$(document).keyup(function(event){
			if(event.which=='27'){
				$('.repeatpopup').removeClass('is-visible');
			}
		});
		
	});
//--Login Register Popup--//

