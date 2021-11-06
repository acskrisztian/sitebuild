var isOpened = false;

function toggleMenu() {
	if (isOpened === false) {
		isOpened = true;
	} else {
		isOpened = false
	}
	if (isOpened === true) {
		$('#menu, #hamburgerButton').addClass('opened');
	}
	if (isOpened === false) {
		$('#menu, #hamburgerButton').removeClass('opened');
	}
}

// CAROUSEL
let slideIndex = 1;
showNextSlide();

function showNextSlide() {
	var carouselElements = document.querySelectorAll('.carousel-slide');
	var carouselIndicators = document.querySelectorAll('.carousel-indicator');
	$('.carousel-slide, .carousel-indicator').removeClass('active');
	carouselElements[slideIndex - 1].classList.add('active');
	carouselIndicators[slideIndex - 1].classList.add('active');
	slideIndex++
	if (slideIndex > carouselElements.length) {
		slideIndex = 1;
	}
	setTimeout(showNextSlide, 4000);
}

// FORM LABELS

$('input, textarea').blur(function (event) {
	var inputValue = this.value;
	if (inputValue) {
		this.parentNode.classList.add('has-value');
	} else {
		this.parentNode.classList.remove('has-value');
	}
});

//   CHARACTER COUNTER

var maxCharacter = 200;
var charactersLeft = 200;

function countCharacter() {
	let charactersTyped = $('textarea').val().length;
	charactersLeft = maxCharacter - charactersTyped;
	$('#chacterCounter').html(charactersLeft);
}