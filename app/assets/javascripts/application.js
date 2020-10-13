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
  const logo = document.querySelector('.logo h1')
  const navLinks = document.querySelectorAll('.nav-links a');
  // change color nav
  window.addEventListener('scroll', () => {
    nav.classList.add('nav-scroll');
  });
  // change color logo
  window.addEventListener('scroll', () => {
    logo.classList.add('logo-change-color')
  });
  // change color nav atags
  navLinks.forEach((link) => {
    window.addEventListener('scroll', () => {
      link.classList.add('links-change-color')
    });
  });
}

navSlide();
// navColor();





// -------------- JS navbar scroll effect whole -----------
  function toggleScrollClass() {
  var nav = document.querySelectorAll('nav')[0];
  window.pageYOffset > 0 ? nav.classList.add('nav-scroll') : nav.classList.remove('nav-scroll')
}
const navColour = () => {

window.addEventListener('scroll', function() {toggleScrollClass()});
toggleScrollClass();
}

function toggleScrollColor() {
  var logo = document.querySelector('.logo h1');
  window.pageYOffset > 0 ? logo.classList.add('logo-change-color') : logo.classList.remove('logo-change-color')
}

const logoColour = () => {

  window.addEventListener('scroll', function() {toggleScrollColor()});
  toggleScrollColor();
}

navColour();
logoColour();


