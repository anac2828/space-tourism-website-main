export default class View {
  #parentElement = document.querySelector('.main__content');
  #btnMobileNav = document.querySelector('.mobile-nav-toggle');
  #navContainer = document.querySelector('#primary-navigation');
  // Public
  data;
  navListPrimary = document.querySelector('.primary-nav');

  constructor() {
    this.#addHandlerNav();
    this.#addHandlerMobileNav();
  }

  #addHandlerMobileNav() {
    this.#btnMobileNav.addEventListener('click', () => {
      this.#btnMobileNav.getAttribute('aria-expanded');
      const isOpen =
        this.#btnMobileNav.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
      this.#btnMobileNav.setAttribute('aria-expanded', isOpen);
      this.#navContainer.setAttribute('data-visible', isOpen);
    });
  }

  #addHandlerNav() {
    this.navListPrimary.addEventListener('click', event => {
      // to prevent propagation
      const e = event.target.closest('.nav__item');

      if (e === null) return;

      e.classList.toggle('active');
      console.log(e.parentElement);

      // get text content from nav link
      const navLink = e.children[0];

      // prevent from page reloading
      if (
        navLink.textContent != '00Home' &&
        window.location.pathname === '/pages/page.html'
      )
        event.preventDefault();

      //change hash to load heading
      window.location.hash = navLink.textContent;

      // close navigation
      if (this.#btnMobileNav) {
        this.#navContainer.setAttribute('data-visible', 'false');
        this.#btnMobileNav.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // Data recieved from the controller and saved to the #data variable
  render(data) {
    this.data = data;

    if (!this.#parentElement) return;
    // markup from the child class
    const markup = this.generateMarkup();
    // insert markup into DOM

    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // the controller will use to change the page being render
  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(listenerEvent => {
      window.addEventListener(listenerEvent, handler);
    });
  }
}
