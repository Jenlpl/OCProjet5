const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const images_dir = `./assets/images/slideshow/`;
const dots = document.querySelectorAll('.dots .dot');
const banner_img = document.querySelector('.banner-img');
const tagLine = document.querySelector('p');
let currentImageIndex = 0;


//arrow left
const arrow_left = document.querySelector ('.arrow_left');
arrow_left.addEventListener('click', clickleft);

function clickleft() {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = slides.length - 1;
	}
	banner_img.src = images_dir + slides[currentImageIndex].image;
	tagLine.innerHTML = slides[currentImageIndex].tagLine;
	selectDots(); 
}

//arrow right
const arrow_right = document.querySelector ('.arrow_right')
arrow_right.addEventListener('click', clickright)

function clickright() {
	currentImageIndex++;
	if (currentImageIndex >= slides.length) {
		currentImageIndex = 0;
	}
	banner_img.src = images_dir + slides[currentImageIndex].image;
	tagLine.innerHTML = slides[currentImageIndex].tagLine;
	selectDots(); 
}

//selectDots
function selectDots () {
	dots.forEach(dot => {
		dot.classList.remove('dot_selected');
	});
	dots[currentImageIndex].classList.add('dot_selected');
}

