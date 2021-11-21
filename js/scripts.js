/*!
 * Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: '#portfolio a.portfolio-box'
  })
})
$(document).ready(function () {
  var btn = $('#back-top-top')

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show')
    } else {
      btn.removeClass('show')
    }
  })

  btn.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, '100')
  })
})







function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('p');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}