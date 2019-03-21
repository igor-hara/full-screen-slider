const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for next slide
	if(current.nextElementSibling){
		// Add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else{
		// add current to start photo1
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
}


const prevSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for prev slide
	if(current.previousElementSibling){
		// Add current to prev sibling
		current.previousElementSibling.classList.add('current');
	} else{
		// add current to last photo
		slides[slides.length - 1].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
}


// Button events
next.addEventListener('click', e => {
	nextSlide();
	// when auto slide is true and if we press the next/prev button
	// we have to restart the interval
	if(auto){
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

prev.addEventListener('click', e => {
	prevSlide();
	// when auto slide is true and if we press the next/prev button
	// we have to restart the interval
	if(auto){
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});


// Auto slide
if(auto){
	// Run next at interval time

	slideInterval = setInterval(nextSlide, intervalTime);
}

























