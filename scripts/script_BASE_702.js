// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-list__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}))

// Dark mode button

const btnDarkMode = document.querySelector(".dark-mode-btn");
const iconDarkMode = document.querySelector(".dark-mode-btn__icon");


if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark");
}


iconDarkMode.onclick = function () {
    if(document.body.classList.contains("dark")){
        iconDarkMode.src = "/images/icons/moon.svg";
    }else {
        iconDarkMode.src = "/images/icons/sun.svg";
    }
}

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");




    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }

}

// Hide Navbar on Scroll Down

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}