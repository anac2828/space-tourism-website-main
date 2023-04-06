export default class View {
  #btnMobileNav = document.querySelector('.mobile-nav-toggle');
  #navContainer = document.querySelector('#primary-navigation');
  // Public
  parentElement = document.querySelector('.main__content');
  navListPrimary = document.querySelector('.primary-nav');
  data;
  currentTabName = localStorage.getItem('main-nav-tab');
  currentTab = this.navListPrimary.querySelector(
    `#${this.currentTabName.slice(2).toLowerCase()}`
  );
  tabId = localStorage.getItem('current-tab');

  constructor() {
    this.#clickedNavHandler();
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

  setNavTabActive() {
    this.currentTab = this.navListPrimary.querySelector(
      `#${this.currentTabName.slice(2).toLowerCase()}`
    );

    if (!this.currentTab) return;
    this.currentTab.setAttribute('aria-selected', 'true');
  }

  #clickedNavHandler() {
    this.navListPrimary.addEventListener('click', event => {
      this.currentTab.setAttribute('aria-selected', 'false');
      // to prevent propagation
      const e = event.target.closest('.nav__item');

      if (e === null) return;

      this.currentTabName = e.textContent.trim();

      // SAVE TAB TO LOCAL STORAGE
      localStorage.setItem('main-nav-tab', this.currentTabName);

      // set the clicked tab to active
      this.setNavTabActive();

      // prevent from page reloading
      // if (
      //   e.children[0].textContent != '00Home' &&
      //   window.location.pathname === '/pages/page.html'
      // )
      //   event.preventDefault();

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

    // if (!this.parentElement) return;
    // markup from the child class
    const markup = this.generateMarkup();
    // insert markup into DOM

    this.parentElement.insertAdjacentHTML('afterbegin', markup);

    this.setActiveTab();
    this.setNavTabActive();
  }
}
