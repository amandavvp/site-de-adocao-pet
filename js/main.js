'use strict';

const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
let currentIndex = 0;

const exibirSlide = n => {
  currentIndex = n >= slides.length ? 0 : n < 0 ? slides.length - 1 : n;
  for (const slide of slides) {
    slide.style.display = "none";
  }
  for (const dot of dots) {
    dot.classList.remove("active");
  }
  slides[currentIndex].style.display = "block";
  dots[currentIndex].classList.add("active");
};

const avancarSlide = () => {
  exibirSlide(currentIndex + 1);
};

const retrocederSlide = () => {
  exibirSlide(currentIndex - 1);
};

const atualizarSlide = n => {
  exibirSlide(n);
};

exibirSlide(currentIndex);

setInterval(avancarSlide, 4000);

for (let i = 0; i < dots.length; i++) {
  dots[i].setAttribute("data-slide", i);
  dots[i].addEventListener("click", () => {
    const slide = parseInt(dots[i].getAttribute("data-slide"));
    atualizarSlide(slide);
  });
}
