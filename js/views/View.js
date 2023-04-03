export default class View {
  #btnMobileNav = document.querySelector('.mobile-nav-toggle');
  #navContainer = document.querySelector('#primary-navigation');
  // Public
  parentElement = document.querySelector('.main__content');
  navListPrimary = document.querySelector('.primary-nav');
  data;
  heading;
  currentTab;

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
    // SET CURRENT TAB TO ACTIVE STYLE
    this.currentTab = localStorage.getItem('main-nav-tab');

    if (this.currentTab === '00Home') localStorage.setItem('current-tab', 'Moon');

    for (const tab of this.navListPrimary.children) {
      if (tab.textContent.trim() === this.currentTab) {
        console.log(tab.textContent.trim());
        tab.classList.add('active');
        this.heading = tab.children[0].innerHTML;
      }
    }
    this.navListPrimary.addEventListener('click', event => {
      // to prevent propagation
      const e = event.target.closest('.nav__item');
      if (e === null) return;

      // SET CLICKED TAB TO ACTIVE STYLE
      e.classList.add('active');

      // SAVE TAB TO LOCAL STORAGE
      localStorage.setItem('main-nav-tab', e.textContent.trim());

      // get text content from nav link to set the hash
      const navLink = e.children[0];

      // prevent from page reloading
      if (
        navLink.textContent != '00Home' &&
        window.location.pathname === '/pages/page.html'
      )
        event.preventDefault();

      //change hash to load set page id
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
    if (!this.parentElement) return;
    this.data = data;
    this.parentElement.innerHTML = '';

    if (!this.parentElement) return;
    // markup from the child class
    const markup = this.generateMarkup();
    // insert markup into DOM

    this.parentElement.insertAdjacentHTML('afterbegin', markup);

    this.setActiveTab();
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(listenerEvent => {
      window.addEventListener(listenerEvent, handler);
    });
  }
}
