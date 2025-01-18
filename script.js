// document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('active');
// });


// // --------------for hamburger button of mobile view---------------

// const menuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');

// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('active');
//     navLinks.classList.toggle('active');
// });




document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle 'active' class on click
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  });
  