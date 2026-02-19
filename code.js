document.addEventListener("DOMContentLoaded", function () {

  /* ========= THEME TOGGLE ========= */

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function toggleTheme() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    }
  }

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.body.classList.remove("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle?.addEventListener("click", toggleTheme);


  /* ========= NEWS CAROUSEL ========= */

  window.addEventListener('load', function() {

  const items = document.querySelectorAll('.news-item');
  const container = document.querySelector('.news-container');
  let current = 0;

  function updateCarousel() {
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    const itemWidth = items[0].offsetWidth + gap;
    const offset = -current * itemWidth + (container.parentElement.offsetWidth - itemWidth)/2;
    container.style.transform = `translateX(${offset}px)`;
    items.forEach((item,i)=>item.classList.toggle('active', i===current));
  }

  function nextNews() {
    current = (current + 1) % items.length;
    updateCarousel();
  }

  function prevNews() {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
  }

  document.querySelector(".carousel-btn.next").addEventListener("click", nextNews);
  document.querySelector(".carousel-btn.prev").addEventListener("click", prevNews);

  window.addEventListener('resize', updateCarousel);

  updateCarousel(); // inicializar

});
