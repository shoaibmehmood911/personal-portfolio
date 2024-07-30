// **** Responsive Code For Header Section ****

let header = document.querySelector(".header");

let mobile_nav = document.querySelector(".mobile-navbar-btn");

mobile_nav.addEventListener("click", () => {
  header.classList.toggle("active");
});
// **** Code For Text Animation ****
let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  let nextWord = words[nextWordIndex];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  setTimeout(() => {
    currentWord.style.opacity = "0";
  }, currentWord.children.length * 80);

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = nextWordIndex;
};

changeText();
setInterval(changeText, 3000);

// **** Skills Circle ****

let circles = document.querySelectorAll(".circle");

circles.forEach((elem) => {
  let dots = elem.getAttribute("data-dots");
  let marked = elem.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  let pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// Mix It Up Potfolio Section
var mixer = mixitup(".portfolio-gallery");

// === Active Menu ===
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop);
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// === Sticky Header ===

// let stickyHeader = document.querySelector(".header");

// window.addEventListener("scroll",function(){
//     stickyHeader.classList.toggle("sticky",window.scrollY > 50)
// })
// ==== Funcationality For Increment ====

let experience = document.querySelector(".experience");

let count = 0;

let maxCount = 2;

setInterval(() => {
  if (count < maxCount) {
    count++;
    experience.textContent = count;
  } else {
    clearInterval(this);
  }
}, 700);

let project = document.querySelector(".project");

let maxCount1 = 21;
setInterval(() => {
  if (count < maxCount1) {
    count++;
    project.textContent = count;
  } else {
    clearInterval(this);
  }
}, 50);

let client = document.querySelector(".client");

setInterval(() => {
  if (count < maxCount1) {
    count++;
    client.textContent = count;
  } else {
    clearInterval(this);
  }
}, 50);
