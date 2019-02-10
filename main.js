const contactForm = document.getElementById('contact-form');
const secondaryNav = document.getElementsByClassName('toggle-text');

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

const hide = () => {
  for (let i = 0; i < secondaryNav.length; i++) {
    secondaryNav[i].classList.add('hidden');
  }
};
const unHide = () => {
  for (let i = 0; i < secondaryNav.length; i++) {
    secondaryNav[i].classList.remove('hidden');
  }
};

const scrollFunction = () => {
  if (document.documentElement.clientWidth >= 800) {
    if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
      document.getElementById('navbar').style.top = '0';
      hide();
    } else {
      document.getElementById('navbar').style.top = '-60px';
      unHide();
    }
  }
};

window.onscroll = () => scrollFunction();

console.log('heyyyyyyy');
