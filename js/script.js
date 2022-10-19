// Simple Code to display responsive navbar

const navToggle = document.querySelector(".navbar-toggle");

const links = document.querySelector(".main-nav");

navToggle.addEventListener("click", (e) => {
  links.classList.toggle("show_nav");
});
