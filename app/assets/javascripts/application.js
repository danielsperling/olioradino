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




var navSlider = () => {
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




// -------------- JS navbar scroll effect for changing color of navbar/logo/links when scroll up or down -----------







// --------------Nav Bar Color Change------
function toggleScrollClass() {
  var nav = document.querySelectorAll('nav')[0];
  window.pageYOffset > 0 ? nav.classList.add('nav-scroll') : nav.classList.remove('nav-scroll')
}
var navColour = () => {

window.addEventListener('scroll', function() {toggleScrollClass()});
toggleScrollClass();
}




// --------- Logo Color change----------

function toggleScrollLogo() {
  var logo = document.querySelector('.logo h1');
  window.pageYOffset > 0 ? logo.classList.add('logo-change-color') : logo.classList.remove('logo-change-color')
}
var logoColour = () => {

  window.addEventListener('scroll', function() {toggleScrollLogo()});
  toggleScrollLogo();
}
// -------------------------------------




// --------- NavLinks change----------

function toogleScrollLinks() {
  var links = document.querySelectorAll('.nav-links a')
  links.forEach((link) => {
     window.pageYOffset > 0 ? link.classList.add('links-change-color') : link.classList.remove('links-change-color')
   });
}

var linksColour = () => {

 window.addEventListener('scroll', function() {toogleScrollLinks()});
 toogleScrollLinks();
}

// -------------------------------------






// ---------------Hide Backgroudn Color Nav after scrolling----------------------

function hideNavOffset() {
  var navb = document.querySelectorAll('nav')[0];
    if(window.pageYOffset > 1500) {
      navb.classList.add('nav-hide')
    }
}

var hideNav = () => {

  window.addEventListener('scroll', function() {hideNavOffset()});
  hideNavOffset();
}

// ---------------Hide Logo Nav after scrolling----------------------

function hideLogoOffset() {
  var logo = document.querySelector('.logo h1');
    if(window.pageYOffset > 1500) {
      logo.classList.add('logo-hide')
    }
}

var hideLogo = () => {

  window.addEventListener('scroll', function() {hideLogoOffset()});
  hideLogoOffset();
}

// ---------------Hide Nav Links after scrolling----------------------

function hideLinkOffset() {
  var links = document.querySelectorAll('.nav-links a')
  links.forEach((link) => {
    if(window.pageYOffset > 1500) {
      link.classList.add('logo-hide')
    }
  });
}

var hideNavLink = () => {

  window.addEventListener('scroll', function() {hideLinkOffset()});
  hideLinkOffset();
}






hideLogo();
hideNav();
hideNavLink();

navSlider();
navColour();
logoColour();
linksColour();




// old js scroll effect, only works when scrolling down



// const navColor = () => {
//   const nav = document.querySelector('nav');
//   const logo = document.querySelector('.logo h1')
//   const navLinks = document.querySelectorAll('.nav-links a');
//   // change color nav
//   window.addEventListener('scroll', () => {
//     nav.classList.add('nav-scroll');
//   });
//   // change color logo
//   window.addEventListener('scroll', () => {
//     logo.classList.add('logo-change-color')
//   });
//   // change color nav atags
//   navLinks.forEach((link) => {
//     window.addEventListener('scroll', () => {
//       link.classList.add('links-change-color')
//     });
//   });
// }


// navColor();

