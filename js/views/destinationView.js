import View from './View';
import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

class Destination extends View {
  #tabId = localStorage.getItem('current-tab');
  #images = { moon, mars, europa, titan };
  #destinationTab = this.navListPrimary.querySelector('#destination');
  #clickedTab;

  generateMarkup() {
    if (!this.data) return;
    return `
    <article class="left-content">
        <h1 class="numbered-title" id="main-heading">
          <span aria-hidden="true">01</span> Pick Your Destination
        </h1>
        
          <img class="page-img" src="${
            this.#images[this.data.tabContent.name.toLowerCase()]
          }" alt="" />
        
    </article>

    <article class="right-content">
      <nav class="nav nav__list secondary-nav">
        <button aria-selected="false" class="nav__item" id="Moon">Moon</button>
        <button aria-selected="false" class="nav__item" id="Mars">Mars</button>
        <button aria-selected="false" class="nav__item" id="Europa">Europa</button>
        <button aria-selected="false" class="nav__item" id="Titan">Titan</button>
      </nav>

      <h2 class="heading heading--secondary">${
        this.data.tabContent.name
      }</h2>

      <p class="description__text">${
        this.data.tabContent.description
      }</p>
      
      <div class="description flex">
        <div class="description__distance">
            <p class="heading heading--secondary-subhead">Avg. Distance</p>
            <p class="heading heading--primary-subhead">${
              this.data.tabContent.distance
            }</p>
        </div>
        <div class="description__travel-time">
            <p class="heading heading--secondary-subhead">Est. Travel Time</p>
            <p class="heading heading--primary-subhead">${
              this.data.tabContent.travel
            }</p>
        </div>
    </article>`;
  }

  setActiveTab() {
    // get the element of the tab id
    const nav = this.parentElement.querySelector('.secondary-nav');

    this.#clickedTab = nav.querySelector(`#${this.#tabId.split(' ').join('-')}`);

    // set active style of tab
    this.#clickedTab.setAttribute('aria-selected', 'true');
  }

  addHandlerSlidesNav(handler) {
    if (!this.parentElement) return;

    // EVENT LISTENER
    this.parentElement.addEventListener('click', e => {
      if (e.target.tagName != 'BUTTON' || this.currentTabName != '01Destination') return;

      // Get the element of the clicked tab
      this.#clickedTab = e.target.closest('.nav__item');

      // Get the name of the tab
      this.#tabId = this.#clickedTab.id;

      // Save tab name to local storage
      localStorage.setItem('current-tab', this.#tabId);

      //Handler will load data of the clicked tab
      handler(this.#destinationTab.id, this.#tabId);
    });
  }

  destinationTab(handler) {
    // Make the first tab active
    if (this.currentTabName != '01Destination')
      localStorage.setItem('current-tab', 'Moon');

    if (!this.#destinationTab) return;

    // LISTENERS ************
    if (this.currentTabName === '01Destination') {
      window.addEventListener('load', handler(this.#destinationTab.id, this.#tabId));
    }

    this.#destinationTab.addEventListener('click', () => {
      if (this.currentTabName != '01Destination') {
        this.#tabId = 'Moon';
      }

      handler(this.#destinationTab.id, this.#tabId);
    });
  }
}

export default new Destination();
