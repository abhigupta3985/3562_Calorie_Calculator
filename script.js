
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle 'active' class on click
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  });
  