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
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

document.querySelector('.user-header__icon').addEventListener('click' ,function() {
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

$(document).ready(function(){
    $('.main-slider__body').slick({
      prevArrow: $('.control-main-slider__arrow_prev'),
      nextArrow: $('.control-main-slider__arrow_next')
    });
  });


