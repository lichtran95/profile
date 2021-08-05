$(document).ready(function(){
	var swiperHeroHome = new Swiper(".swiperHeroHome", {
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
	});
	var swiperProduct = new Swiper(".swiperProduct", {
		pagination: {
			el: ".swiper-pagination",
		},
		// effect:'slide',
		loop:true,
		speed:2500,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
	});
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
		speed:2500,
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
});