const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

burger.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open-menu"));
});

window.addEventListener("scroll", () => {
  toTop = document.querySelector(".to-top");
  if (scrollY >= 180) {
    toTop.classList.add("scroll");
  }
  if (scrollY === 0) {
    toTop.classList.remove("scroll");
  }
});
