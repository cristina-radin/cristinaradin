
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function toggleTheme() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeIcon.classList.replace("fa-sun", "fa-moon"); // Cambia a luna
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-moon", "fa-sun"); // Cambia a sol
      localStorage.setItem("theme", "dark");
    }
  }

  // Cargar el tema guardado
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.body.classList.remove("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", toggleTheme);
});










const items = document.querySelectorAll('.news-item');
const container = document.querySelector('.news-container');
let current = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 20; // ancho + gap
  const offset = -current * itemWidth + (container.parentElement.offsetWidth - itemWidth) / 2;
  container.style.transform = `translateX(${offset}px)`;

  // marcar activo
  items.forEach((item, i) => {
    item.classList.toggle('active', i === current);
  });
}

function nextNews() {
  current = (current + 1) % items.length;
  updateCarousel();
}

function prevNews() {
  current = (current - 1 + items.length) % items.length;
  updateCarousel();
}

// inicializar
updateCarousel();
window.addEventListener('resize', updateCarousel); // mantiene centrado al redimensionar

// conectar botones
document.querySelector(".carousel-btn.next").addEventListener("click", nextNews);
document.querySelector(".carousel-btn.prev").addEventListener("click", prevNews);