const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener(
  "click",
  () => (mobileMenu.style.transform = "translateX(0)")
);
close.addEventListener(
  "click",
  () => (mobileMenu.style.transform = "translateX(100%)")
);
