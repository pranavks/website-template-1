// Animate navbar on scrolldown
let nav = document.querySelector(".nav2-home");
let logo = document.getElementById("logo");
let carouselImg = document.querySelectorAll(".carousel-img");

if (window.scrollY === 0) {
  window.addEventListener("scroll", function(event) {
    event.preventDefault();

    if (window.scrollY <= 29) {
      nav.style.background = "transparent";
      nav.style.padding = "50px 0";
      logo.style.width = "150px";
      for (let i = 0; i < carouselImg.length; i++) {
        carouselImg[i].style.filter = "brightness(40%)";
      }
    } else {
      nav.style.background = "var(--header-transparent)";
      nav.style.padding = "2px 0";
      logo.style.width = "125px";

      for (let i = 0; i < carouselImg.length; i++) {
        carouselImg[i].style.filter = "brightness(75%)";
      }
    }
  });
} else if (window.scrollY > 0) {
  window.addEventListener("load", function(event) {
    event.preventDefault();

    nav.style.background = "var(--header-transparent)";
    nav.style.padding = "2px 0";
    logo.style.width = "125px";

    for (let i = 0; i < carouselImg.length; i++) {
      carouselImg[i].style.filter = "brightness(75%)";
    }

    window.addEventListener("scroll", function(event) {
      event.preventDefault();

      if (window.scrollY <= 29) {
        nav.style.background = "transparent";
        nav.style.padding = "50px 0";
        logo.style.width = "150px";
        for (let i = 0; i < carouselImg.length; i++) {
          carouselImg[i].style.filter = "brightness(40%)";
        }
      } else {
        nav.style.background = "var(--header-transparent)";
        nav.style.padding = "2px 0";
        logo.style.width = "125px";

        for (let i = 0; i < carouselImg.length; i++) {
          carouselImg[i].style.filter = "brightness(75%)";
        }
      }
    });
  });
}

// Navbar color change on clicking navbar toggle
function navColor() {
  nav.style.background = "var(--header-transparent)";
}
