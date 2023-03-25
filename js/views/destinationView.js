import View from './View';
import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

class Destination extends View {
  tabId;
  clickedTab;
  // renderImages() {
  //   const images = this.data.tabContent.destination.map(des =>
  //     des.name.toLowerCase()
  //   );
  // }
  #parentElementSecondaryNav = document.querySelector('#main');
  #images = { moon, mars, europa, titan };

  generateMarkup() {
    if (!this.data) return;
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">${
          this.data.heading
        }</h1>
        <div class="main__left-content">
          <img class="page-img" src="${
            this.#images[this.data.tabContent.name.toLowerCase()]
          }" alt="" />
        </div>
    </div>

    <div class="main__right-content">
      <nav class="nav nav__list secondary-nav">
        <button aria-selected="false" class="nav__item" id="Moon">Moon</button>
        <button aria-selected="false" class="nav__item" id="Mars">Mars</button>
        <button aria-selected="false" class="nav__item" id="Europa">Europa</button>
        <button aria-selected="false" class="nav__item" id="Titan">Titan</button>
      </nav>

      <div class="discription">
        <h2 class="heading heading--primary">${
          this.data.tabContent.name
        }</h2>

        <p class="description__text">${
          this.data.tabContent.description
        }</p>

        <div class="description__more-info">
          <div>
          <p class="heading heading--secondary-subhead">Avg. Distance</p>
          <p class="heading heading--primary-subhead">${
            this.data.tabContent.distance
          }</p>
          </div>
          <div>
          <p class="heading heading--secondary-subhead">Est. Travel Time</p>
          <p class="heading heading--primary-subhead">${
            this.data.tabContent.travel
          }</p>
          </div>
        </div>
      </div>
    </div>`;
  }

  setActiveTab() {
    
    if (!this.tabId) this.tabId = "Moon";
    console.log(this.tabId);
    // Save tab name to local storage

    this.tabId = localStorage.getItem("current-tab");

    const nav =
      this.#parentElementSecondaryNav.querySelector(".secondary-nav");

    this.clickedTab = nav.querySelector(`#${this.tabId}`);

    this.clickedTab.setAttribute("aria-selected", "true");
  }

  getActiveTab() {}

  addHandlerSlidesNav(handler) {
    this.#parentElementSecondaryNav.addEventListener('click', e => {
      // Get the element of the clicked on tab
      this.clickedTab = e.target.closest(".nav__item");

      // Get the name of the tab
      this.tabId = this.clickedTab.id;

      // Save tab name to local storage
      localStorage.setItem("current-tab", this.tabId);

      //Handler will load data of the clicked tab
      handler("destination", this.tabId);
    });
  }
}

export default new Destination();
