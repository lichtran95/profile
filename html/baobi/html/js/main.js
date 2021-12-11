$(document).ready(function(){
	var swiperHeroHome = new Swiper(".swiperHeroHome", {
		pagination: {
			el: ".swiper-pagination",
		},
		loop:true,
		runCallbacksOnInit:true,
		speed:1000,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		},
	});
	
	var swiperProduct = new Swiper(".swiperProduct", {
		slidesPerView: 4,
		pagination: {
			el: ".swiper-pagination",
		},
		effect:'slide',
		runCallbacksOnInit:true,
		autoHeight: true,
		loopedSlides:4,
		loop:true,
		speed:2000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 3,
			  spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
			  slidesPerView: 4,
			  spaceBetween: 40
			}
		  }
	});
	var onSlideChangeEnd =  function(){
		if(swiperProduct.activeIndex== swiperProduct.slides.length-1)
		{
			swiperProduct.swipeTo(0, 600);
		}
		swiperProduct.startAutoplay()
		}
	var swiperImageProduct = new Swiper(".swiperImageProduct", {
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
	var swiperPartner = new Swiper(".swiperPartner", {
		slidesPerView: 5,
		pagination: {
			el: ".swiper-pagination",
		},
		speed:3500,
		loop:true,
		autoplay: {
			delay: 000,
			disableOnInteraction: false,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 3,
			  spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 3,
			  spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
			  slidesPerView: 5,
			  spaceBetween: 40
			}
		  }
	});
	// tabs
	openInfoExtend = (evt, infoExtend) => {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(infoExtend).style.display = "block";
		evt.currentTarget.className += " active";
	}
	
	// active menu mobile
	var hamberger = document.getElementsByClassName("hamberger")[0];
	var nav = document.getElementsByClassName("nav")[0];
	hamberger.addEventListener("click",function(){
		nav.classList.toggle('is-show');
		hamberger.classList.toggle('is-active');
		$("header").toggleClass('is-fixed');
	})
	$(".pll-parent-menu-item").click(function(){
		$(".sub-menu").toggleClass("is-active");
	})

	//  mở rộng nội dung giới thiệu

	$(".section-main-intro .cta-extend").click(function(){
		$(this).hide();
		$(".section-sub-intro").show();
		$(".cta-collapse").show();
	});
	$(".cta-collapse").click(function(){
		$(this).hide();
		$(".section-sub-intro").hide();
		$(".section-main-intro .cta-extend").show();
	});
});