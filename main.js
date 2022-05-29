

// const currentPath = window.location.pathname + window.location.search + window.location.hash;
const currentPath = window.location.href;
const navLinks = document.querySelectorAll(".nav-list>li>a");

navLinks.forEach(function (el) {
  if (el.href == currentPath) {
    el.classList.add("active");
  }
});

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', (event) => {
  event.preventDefault();
  nav.classList.toggle('open');
});

// slideshow start

let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function setSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//auto play
/*
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

// slideshow end

document.addEventListener("DOMContentLoaded", function () {
  let page = document.getElementById("page");
  page.classList.add("ready");
  window.onscroll = function checkScroll() {
    if (window.pageYOffset != 60) {
      page.classList.add("scrolled");
    } else {
      page.classList.remove("scrolled");
    }
  };
});

