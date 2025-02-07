
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










  document.addEventListener("DOMContentLoaded", function() {
    const newsItems = document.querySelectorAll(".news-item");
    let index = 0;

    function updateCarousel() {
      newsItems.forEach((item, i) => {
        item.classList.remove("active", "next", "prev", "hidden");
        if (i === index) {
          item.classList.add("active");
        } else if (i === (index + 1) % newsItems.length) {
          item.classList.add("next");
        } else if (i === (index - 1 + newsItems.length) % newsItems.length) {
          item.classList.add("prev");
        } else {
          item.classList.add("hidden");
        }
      });
    }

    document.querySelector(".carousel-btn.next").addEventListener("click", function() {
      index = (index + 1) % newsItems.length;
      updateCarousel();
    });

    document.querySelector(".carousel-btn.prev").addEventListener("click", function() {
      index = (index - 1 + newsItems.length) % newsItems.length;
      updateCarousel();
    });

    updateCarousel();
  });