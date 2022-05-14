'use strict';

const mainHeader = document.querySelector('.main-header');
const navBtn = document.querySelector('.btn--nav');
const navLinks = document.querySelectorAll('.main-nav .btn');

navBtn.addEventListener('click', () => {
  mainHeader.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainHeader.classList.remove('nav-open');
  });
});
