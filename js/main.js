let startNavSlide = () => {
  let menuBtn = document.querySelector(".menu-btn");
  let navBar = document.querySelector(".header .nav");
  let navLinks = document.querySelectorAll(".header .nav li");
  let i = document.querySelector(".header i");

  // Function to slide the navbar
  function navSLide() {
    // Show Navbar
    navBar.classList.toggle("active-nav");

    // Animate links
    navLinks.forEach((li, index) => {
      if(li.style.animation) {
        li.style.animation = "";
      } else {
        li.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.1}s`;
      }
    })

    // Change menu icon
    i.classList.toggle("fa-bars");
    i.classList.toggle("fa-times");
  }

  // On menu button click
  menuBtn.addEventListener("click", () => {
    navSLide();
  });

  // // On link click
  // navLinks.forEach(n => n.addEventListener("click", () => {
  //   navSLide();
  // }));
}

startNavSlide();

// image slider
let slides = document.querySelectorAll(".landing .slideshow .slide");
let prev = document.querySelector(".landing .prev");
let next = document.querySelector(".landing .next");
let dots = document.querySelectorAll(".landing .dots .dot");

// Next Slide
let nextSlide = () => {
  // Get cuurrent class
  let current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if(current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
}

// Next Dot
let nextDot = () => {
  // Get Dot cuurrent class
  let dotCurrent = document.querySelector(".dot.current");
  // Remove Dot current class
  dotCurrent.classList.remove("current");
  // Check for next slide
  if(dotCurrent.nextElementSibling) {
    // Add Dot current to next sibling
    dotCurrent.nextElementSibling.classList.add("current");
  } else {
    // Add Dot current to start
    dots[0].classList.add("current");
  }
}

// Prev Slide
let prevSlide = () => {
  // Get cuurrent class
  let current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if(current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[slides.length - 1].classList.add("current");
  }
}

// Prev Dot
let prevDot = () => {
  // Get Dot cuurrent class
  let dotCurrent = document.querySelector(".dot.current");
  // Remove Dot current class
  dotCurrent.classList.remove("current");
  // Check for next slide
  if(dotCurrent.previousElementSibling) {
    // Add Dot current to next sibling
    dotCurrent.previousElementSibling.classList.add("current");
  } else {
    // Add Dot current to start
    dots[dots.length - 1].classList.add("current");
  }
}

// Enable Next
next.addEventListener("click", () => {
  nextSlide();
  nextDot();
});
// Enable Prev
prev.addEventListener("click", () => {
  prevSlide();
  prevDot();
});

// Animate width on scrolling (Skills Section)
let skills_section = document.querySelector("#our-skills");
let skillBars = document.querySelectorAll(".skill .skill-bar span");

window.onscroll = function () {
  if(window.scrollY >= skills_section.offsetTop - 300) {
    skillBars.forEach((span) => {
        span.style.width = span.dataset.width;
    });
}
}