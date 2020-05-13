// @@include('../files/responsive.js', {})

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support === true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

document.querySelector('.user-header__icon').addEventListener('click', function () {
  document.querySelector('.user-header__menu').classList.toggle('_active')
})

let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("active");
    body.classList.toggle("lock");
    menuBody.classList.toggle("active");
  });
}

// document.documentElement.addEventListener('click', function(e) {
//     if(!e.target.closest('.user-header')) {
//         document.querySelector('.user-header__menu').classList.remove('_active')
//     }
// })

$(document).on('click touchstart', function (e) {
  if (!$(e.target).is(".user-header *")) {
    $('.user-header__menu').removeClass('_active');
  };
});

$(document).ready(function () {
  $('.main-slider__body').slick({
    // infinite: true,
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    prevArrow: $('.control-main-slider__arrow_prev'),
    nextArrow: $('.control-main-slider__arrow_next')
  });
});

$(document).ready(function () {
  $('.slider-lots__body').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: $('.control-slider-lots__arrow_prev'),
    nextArrow: $('.control-slider-lots__arrow_next')
  });
});

$(document).ready(function () {
  $('.slider-quotes__body').slick({
    // infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    nextArrow: $('.control-slider-quotes__circle'),
    prevArrow: false
  });
});


// $(document).ready(function () {
//   $('.slider-test').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     adaptiveHeight: true
//     // prevArrow: $('.control-slider-lots__arrow_prev'),
//     // nextArrow: $('.control-slider-lots__arrow_next')
//   });
// });
// var sliders = document.querySelectorAll('._swiper');

// if (sliders) {
// 	for (var _index24 = 0; _index24 < sliders.length; _index24++) {
// 		var slider = sliders[_index24];

// 		if (!slider.classList.contains('swiper-bild')) {
// 			var slider_items = slider.children;

// 			if (slider_items) {
// 				for (var _index25 = 0; _index25 < slider_items.length; _index25++) {
// 					var _el12 = slider_items[_index25];

// 					_el12.classList.add('swiper-slide');
// 				}
// 			}

// 			var slider_content = slider.innerHTML;
// 			var slider_wrapper = document.createElement('div');
// 			slider_wrapper.classList.add('swiper-wrapper');
// 			slider_wrapper.innerHTML = slider_content;
// 			slider.innerHTML = '';
// 			slider.appendChild(slider_wrapper);
// 			slider.classList.add('swiper-bild');
// 		}

// 		if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
// 		}
// 	}

// 	sliders_bild_callback();
// }

// function sliders_bild_callback(params) { }



// let lots_slider = new Swiper('.slider-lots__body', {
// 	/*
// 	effect: 'fade',
// 	autoplay: {
// 		  delay: 3000,
// 		  disableOnInteraction: false,
// 	},
// 	*/
// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 3,
// 	spaceBetween: 0,
// 	// autoHeight: true,
// 	speed: 800,
// 	//touchRatio: 0,
// 	// simulateTouch: false,
// 	loop: true,
// 	// preloadImages: false,
// 	// lazy: true,
// 	// Dotts
// 	//pagination: {
// 	//	el: '.slider-quality__pagging',
// 	//	clickable: true,
// 	//},
// 	// Arrows
// 	navigation: {
// 		nextEl: '.control-slider-lots__arrow_prev',
// 		prevEl: '.control-slider-lots__arrow_next'
// 	},
// 	// breakpoints: {
// 	// 	320: {
// 	// 		slidesPerView: 1
// 	// 	},
// 	// 	550: {
// 	// 		slidesPerView: 2
// 	// 	},
// 	// 	768: {
// 	// 		slidesPerView: 3
// 	// 	}
// 	// },
// 	on: {
// 		lazyImageReady: function () {
// 			ibg();
// 		},
// 	} // And if we need scrollbar
// 	//scrollbar: {
// 	//	el: '.swiper-scrollbar',
// 	//},
// })


