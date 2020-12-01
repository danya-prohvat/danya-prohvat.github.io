const btn = document.querySelectorAll('.toBook'),
	  modal = document.querySelector('.popup'),
	  close = document.querySelector('.popup-close'),
	  scroll = calcScroll();

btn.forEach(item => {
	item.addEventListener('click', e => {
		if (e.target)
			e.preventDefault();

		modal.classList.add('animated', 'fadeIn');
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${scroll}px` ;
	});
});

close.addEventListener('click', () => {
	modal.classList.remove('fadeIn');
	modal.style.display = 'none';
	document.body.style.overflow = 'visible';
	document.body.style.marginRight = `0px` ;
});

modal.addEventListener('click', e => {
	if (e.target === modal){
		modal.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = `0px`
	}
});



function calcScroll() {
	let div = document.createElement('div');

	div.style.width = '50px';
	div.style.height = '50px';
	div.style.overflowY = 'scroll';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	return scrollWidth;
}



///////////



document.querySelector('.prevent').addEventListener('click', e => {
		e.preventDefault();
});




/////////


window.addEventListener('load', () => {
	document.body.style.visibility='visible';
	console.log(1)
new WOW().init();
});

