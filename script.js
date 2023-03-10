'use strict';
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const close = document.querySelector('.close');

hamburger.addEventListener('click', function () {
  navItems.classList.toggle('show-links');
});

close.addEventListener('click', function () {
  navItems.classList.toggle('show-links');
});

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
