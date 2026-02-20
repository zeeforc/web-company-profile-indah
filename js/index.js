// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#2b1c14";
  } else {
    navbar.style.background = "#3b2a1f";
  }
});
