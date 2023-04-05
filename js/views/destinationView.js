import View from './View';
import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

class Destination extends View {
  #tabId = localStorage.getItem("current-tab");
  #images = { moon, mars, europa, titan };
  #destinationTab = this.navListPrimary.querySelector("#destination");

  generateMarkup() {
    if (!this.data) return;
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">
          <span>01</span> Pick Your Destination
        </h1>
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
    // get the element of the tab id
    const nav = this.parentElement.querySelector(".secondary-nav");
    this.clickedTab = nav.querySelector(`#${this.#tabId}`);

    // set active style of tab
    this.clickedTab.setAttribute("aria-selected", "true");
  }

  addHandlerSlidesNav(handler) {
    if (!this.parentElement || !this.clickedTab) return;

    // EVENT LISTENER
    this.parentElement.addEventListener("click", e => {
      if (e.target.tagName != "BUTTON") return;

      // Get the element of the clicked tab
      this.clickedTab = e.target.closest(".nav__item");
      if (!this.clickedTab) return;
      // Get the name of the tab
      this.#tabId = this.clickedTab.id;

      // Save tab name to local storage
      localStorage.setItem("current-tab", this.#tabId);

      //Handler will load data of the clicked tab
      handler(this.#destinationTab.id, this.#tabId);
    });
  }

  destinationTab(handler) {
    // Make the first tab active
    if (this.currentTabName === "00Home")
      localStorage.setItem("current-tab", "Moon");

    if (!this.#destinationTab) return;

    // LISTENERS ************
    if (this.currentTabName === "01Destination")
      window.addEventListener(
        "click",
        handler(this.#destinationTab.id, this.#tabId)
      );

    this.#destinationTab.addEventListener("click", () => {
      handler(this.#destinationTab.id, this.#tabId);
    });
  }
}

export default new Destination();
