console.log('script.js loaded');

const popup = {
	showed_body_class: 'modal_showed',
	showed_class: 'active_modal'
}

let body_classList = document.querySelector('body').classList;
let modal_classList = document.querySelector('#modal').classList;

function show_popup() {
	body_classList.add(popup.showed_body_class);
	modal_classList.add(popup.showed_class);
	console.log('show_popup');
}

function hide_popup() {
	body_classList.remove(popup.showed_body_class);
	modal_classList.remove(popup.showed_class);
	console.log('hide_popup');
}


/**/


let test_popup_btn = document.querySelector('#SHOW_TEST_POPUP');

// test_popup_btn.onclick = show_popup();



console.log('script.js finished');