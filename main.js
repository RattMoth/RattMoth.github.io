const contactForm = document.getElementById('contact-form');
const secondaryNav = document.getElementsByClassName('toggle-text');
const viewportWidth = document.documentElement.clientWidth;
const documentBodyScroll = document.body;
const documentElementScroll = document.documentElement;

// Contact form email address removed from main html for some security
contactForm.setAttribute(
  'action',
  'https:'
    + '//formspree.io'
    + '/'
    + 'matt.'
    + 'dipaolo.'
    + 'roth'
    + '@'
    + 'g'
    + 'mail'
    + '.'
    + 'com',
);

// Two programs to toggle hidden and unhidden states.
// classList.toggle would not function here as it is would toggle each time the scroll moved
const hideText = () => {
  for (let i = 0; i < secondaryNav.length; i++) {
    secondaryNav[i].classList.add('hidden');
  }
};
const unHideText = () => {
  for (let i = 0; i < secondaryNav.length; i++) {
    secondaryNav[i].classList.remove('hidden');
  }
};

// On scroll event to hide and unhide secondary-nav if the scroll position is greater than 160
// and screen width is more than 800
const scrollFunction = () => {
  if (documentBodyScroll.scrollTop > 160 || documentElementScroll.scrollTop > 160) {
    document.getElementById('navbar').style.top = '0';
    hideText();
  } else {
    document.getElementById('navbar').style.top = '-60px';
    unHideText();
  }
};

window.onscroll = () => scrollFunction();
window.onload = () => scrollFunction();

console.log('heyyyyyyy');
