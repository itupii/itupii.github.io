var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy(-300, 0); // Adjust scroll amount as needed
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy(300, 0); // Adjust scroll amount as needed
});


