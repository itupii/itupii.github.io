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

function showProjects(category) {
  // Obtém todos os projetos
  var projects = document.querySelectorAll('.swiper-slide');

}


// Adicione essas funções ao seu script.js
function showAcademicProjects() {
  document.getElementById('academic-projects').style.display = 'block';
  document.getElementById('personal-projects').style.display = 'none';
}

function showPersonalProjects() {
  document.getElementById('academic-projects').style.display = 'none';
  document.getElementById('personal-projects').style.display = 'block';
}


  var academicSwiper = new Swiper('#academic-projects', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function showAcademicProjects() {
    academicSwiper.update(); // Certifica-se de que o Swiper está atualizado
    document.getElementById('academic-projects').style.display = 'block';
    document.getElementById('personal-projects').style.display = 'none';
  }

  function showPersonalProjects() {
    document.getElementById('academic-projects').style.display = 'none';
    document.getElementById('personal-projects').style.display = 'block';
  }

