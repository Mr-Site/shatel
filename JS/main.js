// show page

function showPage() {
  document.getElementById("container").style.opacity = "1";
  document.getElementById("loadPageContainer").style.opacity = "0";
  document.getElementById("loadPageContainer").style.display = "none";
}

setTimeout(showPage, 1000);

// show sub Menu

// sub Menu 1

function showSubMenu1() {
  document.getElementById("subMenu1").style.display = "flex";
  document.getElementById("subMenu1").style.opacity = "1";
}

function RemoveSubMenu1() {
  document.getElementById("subMenu1").style.display = "none";
  document.getElementById("subMenu1").style.opacity = "0";
}

// sub Menu 2

function showSubMenu2() {
  document.getElementById("subMenu2").style.display = "flex";
  document.getElementById("subMenu2").style.opacity = "1";
}

function RemoveSubMenu2() {
  document.getElementById("subMenu2").style.display = "none";
  document.getElementById("subMenu2").style.opacity = "0";
}
//
//

// search box

function showSearchBox() {
  document.getElementById("container").style.filter = "brightness(30%)";
  document.getElementById("searchContainer").style.display = "block";
  document.getElementById("searchBox").style.display = "block";
}
function removeSearchBox() {
  document.getElementById("container").style.filter = " brightness(100%)";
  document.getElementById("searchContainer").style.display = "none";
  document.getElementById("searchBox").style.display = "none";
}

// main slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let intrevalSlider = setInterval("plusSlides(1)", 5000);

function stopSlide() {
  clearInterval(intrevalSlider);
}

function resumeSlide() {
  intrevalSlider = setInterval("plusSlides(1)", 5000);
}

// main swiper show

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

// themes  // themes  // themes

// themes  // themes  // themes

// themes  // themes  // themes

// themes  // themes  // themes

// dark mode

function darkMode() {
  document.getElementById("lightLogo").style.opacity = "0";
  document.getElementById("lightLogo").style.display = "none";

  document.getElementById("darkLogo").style.opacity = "1";
  document.getElementById("darkLogo").style.display = "inline-block";

  // body

  document.getElementById("body").className += "dark";

  // header
  document.getElementById("header").className += "darkHeader ";

  document.getElementById("subMenu1").classList.add("darkHeader");
  document.getElementById("subMenu2").classList.add("darkHeader");

  // nav
  document.getElementById("nav").className += "darkNav ";

  // serach box
  document.getElementById("searchBox").className += "searchBoxDark ";

  // s1
  document.getElementById("s1").className += "s1Dark ";

  // s2
  document.getElementById("s2").className += "s2Dark ";

  // s3
  document.getElementById("s3").className += "s3Dark ";

  // s4

  document.getElementById("s4").className += "s4Dark ";

  // s5

  document.getElementById("s5").className += "s5Dark ";

  // s6
  document.getElementById("s6").className += "s6Dark ";

  // footer
  document.getElementById("footer").className += "footerDark ";

  // mobile menu

  document.getElementById("menuContainer").className += "menuContainerDark";
}

// light mode

function lightMode() {
  document.getElementById("lightLogo").style.opacity = "1";
  document.getElementById("lightLogo").style.display = "inline-block";

  document.getElementById("darkLogo").style.opacity = "0";
  document.getElementById("darkLogo").style.display = "none";

  // body

  document.getElementById("body").classList.remove("dark");

  // header
  document.getElementById("header").classList.remove("darkHeader");

  document.getElementById("subMenu1").classList.remove("darkHeader");
  document.getElementById("subMenu2").classList.remove("darkHeader");

  // nav
  document.getElementById("nav").classList.remove("darkNav");

  // serach box
  document.getElementById("searchBox").classList.remove("searchBoxDark");

  // s1
  document.getElementById("s1").classList.remove("s1Dark");

  // s2
  document.getElementById("s2").classList.remove("s2Dark");

  // s3
  document.getElementById("s3").classList.remove("s3Dark");

  // s4

  document.getElementById("s4").classList.remove("s4Dark");

  // s5

  document.getElementById("s5").classList.remove("s5Dark");

  // s6
  document.getElementById("s6").classList.remove("s6Dark");

  // footer
  document.getElementById("footer").classList.remove("footerDark");

  // mobile menu

  document
    .getElementById("menuContainer")
    .classList.remove("menuContainerDark");
}

// theme cookie

// show mobile menu

function openMobileMenu() {
  document.getElementById("openMenu").style.opacity = "0";
  document.getElementById("openMenu").style.display = "none";

  document.getElementById("closeMenu").style.opacity = "1";
  document.getElementById("closeMenu").style.display = "block";

  document.getElementById("menuContainer").style.opacity = "1";
  document.getElementById("menuContainer").style.height = "680px";
}

// close mobile menu

function closeMobileMenu() {
  document.getElementById("openMenu").style.opacity = "1";
  document.getElementById("openMenu").style.display = "block";

  document.getElementById("closeMenu").style.opacity = "0";
  document.getElementById("closeMenu").style.display = "none";

  document.getElementById("menuContainer").style.opacity = "0";
  document.getElementById("menuContainer").style.height = "0";
}
