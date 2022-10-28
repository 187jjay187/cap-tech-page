const primaryNav = document.querySelector('.main-header-navigation');
const navToggle = document.querySelector('.mobile-hamburger-menu');
const navLink = document.querySelectorAll('.nav-list-content');

navToggle.addEventListener('click', () => {
  const visibilty = primaryNav.getAttribute('data-visible');

  if (visibilty === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibilty === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

for (let i = 0; i < navLink.length; i += 1) {
  navLink[i].addEventListener('click', () => {
    const visibilty = primaryNav.getAttribute('data-visible');
    if (visibilty === 'true') {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
}
