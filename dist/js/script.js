// //Adaptive functions
let move_array = [];
if ($('*[data-move]')) {
	$.each($('*[data-move]'), function (index, val) {
		if ($(this).data('move') != '' && $(this).data('move') != null) {
			$(this).attr('data-move-index', index);
			move_array[index] = {
				'parent': $(this).parent(),
				"index": $(this).index()
			};
		}
	});
}
function dynamic_adaptive() {
	let w = $(window).outerWidth();
	$.each($('*[data-move]'), function (index, val) {
		if ($(this).data('move') != '' && $(this).data('move') != null) {
			let dat_array = $(this).data('move').split(',');
			let dat_parent = $('.' + dat_array[0]);
			let dat_index = dat_array[1];
			let dat_bp = dat_array[2];
			if (w < dat_bp) {
				if (!$(this).hasClass('js-move_done_' + dat_bp)) {
					if (dat_index > 0) {
						$(this).insertAfter(dat_parent.find('*').eq(dat_index - 1));
					} else {
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_' + dat_bp);
				}
			} else {
				if ($(this).hasClass('js-move_done_' + dat_bp)) {
					dynamic_adaptive_back($(this));
					$(this).removeClass('js-move_done_' + dat_bp);
				}
			}
		}
	});
}
function dynamic_adaptive_back(el) {
	let index_original = el.data('move-index');
	let move_place = move_array[index_original];
	let parent_place = move_place['parent'];
	let index_place = move_place['index'];
	if (index_place > 0) {
		el.insertAfter(parent_place.find('*').eq(index_place - 1));
	} else {
		el.prependTo(parent_place);
	}
}
$(window).resize(function (event) {
	dynamic_adaptive();
});
dynamic_adaptive();

//console.log(move_array);

/*
function dynamic_adaptive_back_all(){
	$.each($('*[data-move]'), function(index, val) {
			let index_original=$(this).data('move-index');
			let move_place=move_array[index_original];
			let parent_place=move_place['parent'];
			let index_place=move_place['index'];
		if(index_place>0){
			$(this).insertAfter(parent_place.find('*').eq(index_place-1));
		}else{
			$(this).prependTo(parent_place);
		}
	});
}
*/

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
		prevArrow: $('.control-main-slider__arrow_prev'),
		nextArrow: $('.control-main-slider__arrow_next')
	});
});


