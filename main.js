// responsive icons
let menuIcon = document.querySelectorAll(".header .menu-icon");
let menu = document.querySelectorAll(".header .responsive-list");
let menuLis = document.querySelectorAll(".header .responsive-list li");
menuIcon[0].addEventListener("click", () => {
  menu[0].classList.toggle("toogle");
  menuIcon[0].classList.toggle("x");
});
menuLis.forEach((li) => {
  li.addEventListener("click", function () {
    menu[0].classList.toggle("toogle");
    menuIcon[0].classList.toggle("x");
  });
});
// auto type effect
let autoTypeText = " HEY, I'M Dr harmouche";
let autoTypeEle = document.querySelectorAll(".home .container .info h1");
let i = 0;
function autoType() {
  if (i < autoTypeText.length) {
    autoTypeEle[0].innerHTML += autoTypeText.charAt(i);
    i++;
  }
  setTimeout(autoType, 100);
}
autoType();
// progress skills
let skillsSec = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(
  ".our-skills .progerss li div span"
);
let stated = true;
window.addEventListener("scroll", () => {
  if (window.scrollY > skillsSec.offsetTop - 100) {
    if (stated) {
      progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
    stated = false;
  }
});
// scroll up
let scrollUpIcon = document.querySelectorAll(".home .fa-angles-up");
window.onscroll = function () {
  if (scrollY > 633) {
    scrollUpIcon.forEach((e) => {
      e.style.display = "block";
    });
  } else {
    scrollUpIcon.forEach((e) => {
      e.style.display = "none";
    });
  }
};
scrollUpIcon.forEach((e) => {
  e.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
});
// boxes animation
let serBox = document.querySelectorAll(".services .box");
let cotactBox = document.querySelectorAll(".contact .info");
let carierBox = document.querySelectorAll(".carrier .box");
window.addEventListener("scroll", animate);
window.addEventListener("scroll", animate1);
window.addEventListener("scroll", animate2);
function animate() {
  let trigger = (window.innerHeight / 5) * 4;
  serBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 100) {
      e.classList.add("animate");
    }
  });
}
function animate1() {
  let trigger = (window.innerHeight / 5) * 4;
  cotactBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger) {
      e.classList.add("animate");
    }
  });
}
function animate2() {
  let trigger = (window.innerHeight / 5) * 4;
  cotactBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 80) {
      e.classList.add("animate");
    }
  });
}
function animate1() {
  let trigger = (window.innerHeight / 5) * 4;
  carierBox.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 80) {
      e.classList.add("animate");
    }
  });
}
// main-title animation
let mainTitle = document.querySelectorAll(".main-title");

window.addEventListener("scroll", animateTilte);
function animateTilte() {
  let trigger = (window.innerHeight / 5) * 4;
  mainTitle.forEach((e) => {
    let boxTop = e.getBoundingClientRect().top;
    if (boxTop < trigger + 80) {
      e.style.transform = "scale(1)";
    }
  });
}
//loeder
let loeder = document.querySelectorAll(".parentLoeder");
window.addEventListener("load", function () {
  loeder[0].classList.add("hide-loader");
});
