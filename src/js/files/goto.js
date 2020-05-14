///

var scr_body = document.querySelector('body');
var scr_blocks = document.querySelectorAll('._scr-sector');
var scr_items = document.querySelectorAll('._scr-item');
var scr_min_height = 750;

//ScrollOnScroll

window.addEventListener('scroll', scroll_scroll);

function scroll_scroll() {
    scr_body.setAttribute('data-scroll', pageYOffset);
    var hrader = document.querySelector('header.header');
    scr_body.setAttribute('data-scroll', pageYOffset);

    if (pageYOffset > 10) {
        hrader.classList.add('_scroll');
    } else {
        hrader.classList.remove('_scroll');
    }

    if (scr_blocks.length > 0) {
        for (var _index26 = 0; _index26 < scr_blocks.length; _index26++) {
            var block = scr_blocks[_index26];
            var block_offset = offset(block).top;
            var block_height = block.offsetHeight;

            if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 1.5) {
                block.classList.add('_scr-sector_active');
            } else {
                if (block.classList.contains('_scr-sector_active')) {
                    block.classList.remove('_scr-sector_active');
                }
            }

            if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 2) {
                if (!block.classList.contains('_scr-sector_current')) {
                    block.classList.add('_scr-sector_current');
                }
            } else {
                if (block.classList.contains('_scr-sector_current')) {
                    block.classList.remove('_scr-sector_current');
                }
            }
        }
    }

    if (scr_items.length > 0) {
        for (var _index27 = 0; _index27 < scr_items.length; _index27++) {
            var scr_item = scr_items[_index27];
            var scr_item_offset = offset(scr_item).top;
            var scr_item_height = scr_item.offsetHeight;

            if (pageYOffset > scr_item_offset - window.innerHeight / 1.5 && pageYOffset < scr_item_offset + scr_item_height - window.innerHeight / 1.5) {
                scr_item.classList.add('_active');
                scroll_load_item(scr_item);
            } else {
                scr_item.classList.remove('_active');
            }
        }
    }
}

setTimeout(function () {
    scroll_scroll();
}, 100);

function scroll_load_item(scr_item) {
    if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
        var map_item = document.getElementById('map');

        if (map_item) {
            scr_item.classList.add('_loaded-map');
            map();
        }
    }
}


var link = document.querySelectorAll('._goto-block');

if (link) {
    var blocks = [];

    var _loop7 = function _loop7(_index28) {
        var el = link[_index28];
        var block_name = el.getAttribute('href').replace('#', '');

        if (block_name != '' && !~blocks.indexOf(block_name)) {
            blocks.push(block_name);
        }

        el.addEventListener('click', function (e) {
            if (document.querySelector('.menu__body._active')) {
                menu_close();
                body_lock_remove(500);
            }

            var target_block_class = el.getAttribute('href').replace('#', '');
            var target_block = document.querySelector('.' + target_block_class);

            _goto(target_block, 300);

            e.preventDefault();
        });
    };

    for (var _index28 = 0; _index28 < link.length; _index28++) {
        _loop7(_index28);
    }

    window.addEventListener('scroll', function (el) {
        var old_current_link = document.querySelectorAll('._goto-block._active');

        if (old_current_link) {
            for (var _index29 = 0; _index29 < old_current_link.length; _index29++) {
                var _el13 = old_current_link[_index29];

                _el13.classList.remove('_active');
            }
        }

        for (var _index30 = 0; _index30 < blocks.length; _index30++) {
            var block = blocks[_index30];
            var block_item = document.querySelector('.' + block);

            if (block_item) {
                var block_offset = offset(block_item).top;
                var block_height = block_item.offsetHeight;

                if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
                    var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

                    for (var _index31 = 0; _index31 < current_links.length; _index31++) {
                        var current_link = current_links[_index31];
                        current_link.classList.add('_active');
                    }
                }
            }
        }
    });
} //ScrollOnClick (Simple)


var goto_links = document.querySelectorAll('._goto');

if (goto_links) {
    var _loop8 = function _loop8(_index32) {
        var goto_link = goto_links[_index32];
        goto_link.addEventListener('click', function (e) {
            var target_block_class = goto_link.getAttribute('href').replace('#', '');
            var target_block = document.querySelector('.' + target_block_class);

            _goto(target_block, 300);

            e.preventDefault();
        });
    };

    for (var _index32 = 0; _index32 < goto_links.length; _index32++) {
        _loop8(_index32);
    }
}

function _goto(target_block, speed) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var header = ''; //OffsetHeader

    header = 'header';
    var options = {
        speedAsDuration: true,
        speed: speed,
        header: header,
        offset: offset
    };
    var scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
} 

//SameFunctions


function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
	};
}

function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, {
		passive: false
	}); // Disable scrolling in Chrome

	window.onwheel = preventDefault; // modern standard

	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

	window.ontouchmove = preventDefault; // mobile

	document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
	if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, {
		passive: false
	}); // Enable scrolling in Chrome

	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		  preventDefault(e);
		  return false;
	}*/
}

var user_icon = document.querySelector('.user-header__icon');
var user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener("click", function (e) {
	user_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		user_menu.classList.remove('_active');
	}
});