// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery




const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // toogle Nav
  burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
  });
  // Animate Links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
  });
}


const navColor = () => {
  const nav = document.querySelector('nav');
  // change color
  window.addEventListener('scroll', () => {
    nav.classList.add('nav-scroll');
  });
}


const tagColor = () => {
  const atags = document.querySelector('.nav-links li')
  window.addEventListener('scroll', () => {
    atags.classList.add('.nav-links-scroll');
 });
}

const logoColor = () => {
  const logo = document.querySelector('.logo h1')
  window.addEventListener('scroll', () => {
    logo.classList.add('.nav-logo-scroll');
  });
}

navSlide();
logoColor();
tagColor();
// navColor();




