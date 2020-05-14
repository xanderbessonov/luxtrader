// @@include('../files/responsive.js', {})
// @@include('../files/forms.js', {})


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
    fade: true,
    cssEase: 'linear',
    nextArrow: $('.control-slider-quotes__circle'),
    prevArrow: false
  });
});


$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});


