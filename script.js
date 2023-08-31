// ==========Nav bar==========
const nav = document.querySelector(".my-nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("open-search");
  nav.classList.remove("open-nav");
  if (nav.classList.contains("open-search")) {
    searchIcon.classList.replace("uil-search", "uil-times");
  } else {
    searchIcon.classList.replace("uil-times", "uil-search");
  }
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("open-nav");
  nav.classList.remove("open-search");
  searchIcon.classList.replace("uil-times", "uil-search");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

// Dropdown functionality for small screens
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.querySelector(".dropdown-content");
  const dropbtn = dropdown.querySelector(".dropbtn");

  dropbtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });
});

window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    });
  }
});

// ==========Header Section==========
// Slideshow functionality
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
