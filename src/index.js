
const image = document.querySelector('.slide');
const dot_one = document.querySelector('.dot_one');
const dot_two = document.querySelector('.dot_two');
const dot_three = document.querySelector('.dot_three');

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000);

}





