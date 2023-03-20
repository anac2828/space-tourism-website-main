const btnMobileNav = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('#primary-navigation');
const navPrimary = document.querySelector('.primary-nav');
const mainHeading = document.querySelector('#main-heading');
import data from '../starter-code/data.json';

const state = { heading: {} };

btnMobileNav.addEventListener('click', () => {
  btnMobileNav.getAttribute('aria-expanded');
  const isOpen =
    btnMobileNav.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
  btnMobileNav.setAttribute('aria-expanded', isOpen);
  nav.setAttribute('data-visible', isOpen);
});

navPrimary.addEventListener('click', event => {
  // to prevent propagation
  const e = event.target.closest('.nav__item');

  if (e === null) return;

  // get text content from nav link
  const navLink = e.children[0];

  // prevent from page reloading
  if (navLink.textContent != '00Home' && window.location.pathname === '/pages/page.html')
    event.preventDefault();

  //change hash to load heading
  window.location.hash = navLink.textContent;

  // close navigation
  if (btnMobileNav) {
    console.log('test');
  }
  nav.setAttribute('data-visible', 'false');
  btnMobileNav.setAttribute('aria-expanded', 'false');
});

// MODEL
function loadHeading(id) {
  // save headings to state
  for (const link of navPrimary.children) {
    if (link.children[0].textContent === id)
      state.heading = {
        innerHTML: link.children[0].innerHTML,
      };
  }
}

// CONTROLLER

function controller() {
  const id = window.location.hash.slice(1);

  // load data to state
  loadHeading(id);

  //get data from state and render heading
  renderHeading(state.heading.innerHTML);
}

// VIEW
function renderHeading(markup) {
  if (!mainHeading) return;
  mainHeading.innerHTML = markup;
}

function addHandlerRender(handler) {
  ['hashchange', 'load'].forEach(listenerEvent => {
    window.addEventListener(listenerEvent, handler);
  });
}

//

const init = function () {
  addHandlerRender(controller);
};

init();
