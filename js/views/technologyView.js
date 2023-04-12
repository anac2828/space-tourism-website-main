import View from './View';
import launch from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import space from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceport from "../../assets/technology/image-spaceport-landscape.jpg";
import launchPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";

class Technology extends View {
  #tabId =
    localStorage.getItem("current-tech-tab") === null
      ? "Launch-vehicle"
      : localStorage.getItem("current-tech-tab");
  #techTab = this.navListPrimary.querySelector("#technology");
  #clickedTab;
  #images = { launch, space, spaceport };
  #imagesPort = {
    launch: launchPortrait,
    space: spacePortrait,
    spaceport: spaceportPortrait,
  };

  generateMarkup() {
    return `
    <h1 class="numbered-title" id="main-heading">
      <span>03</span> Space Launch 101
    </h1>
    <div class="number-indicators nav-btns">
      <button id="Launch-vehicle" class="btn btn--small" aria-selected="false">1</button>
      <button id="Spaceport" class="btn btn--small" aria-selected="false">2</button>
      <button id="Space-capsule" class="btn btn--small" aria-selected="false">3</button>
    </div>
    <article class="left-content">
      <p class="heading--secondary heading--secondary-subhead">THE TERMINOLOGY…</p>
      <h2 class="heading heading--tertiary">${
        this.data.tabContent.name
      }</h2>
      <p>${this.data.tabContent.description}</p>
    </article>

    <article class="right-content">
      <picture>
        <source srcset="${
          this.#imagesPort[
            this.data.tabContent.name.split(" ")[0].toLowerCase()
          ]
        }" media="(min-width: 56.25rem)"/>
        <img class="page-img" src="${
          this.#images[
            this.data.tabContent.name.split(" ")[0].toLowerCase()
          ]
        }" alt="" />
      </picture>
    </article>`;
  }

  setActiveTab() {
    const nav = this.parentElement.querySelector(
      ".number-indicators"
    );

    this.#clickedTab = nav.querySelector(
      `#${this.#tabId.split(" ").join("-")}`
    );

    this.#clickedTab.setAttribute("aria-selected", "true");
  }

  addHandlerNumbsNav(handler) {
    if (!this.parentElement) return;

    // EVENT LISTENER
    this.parentElement.addEventListener("click", e => {
      if (e.target.tagName != "BUTTON") return;

      // Get the element of the clicked tab
      this.#clickedTab = e.target.closest(".btn--small");
      if (!this.#clickedTab) return;

      // Get the name of the tab
      this.#tabId = this.#clickedTab.id.split("-").join(" ");

      // Save tab name to local storage
      localStorage.setItem("current-tech-tab", this.#tabId);

      //Handler will load data of the clicked tab
      handler(this.#techTab.id, this.#tabId);
    });
  }

  techTab(handler) {
    // Make the first tab active
    if (this.currentTabName != "03Technology")
      localStorage.setItem("current-tech-tab", "Launch vehicle");

    if (!this.#techTab) return;

    // LISTENERS ************
    if (this.currentTabName === "03Technology")
      window.addEventListener(
        "click",
        handler(this.#techTab.id, this.#tabId)
      );

    this.#techTab.addEventListener("click", () => {
      if (this.currentTabName != "02Technology") {
        this.#tabId = "Launch vehicle";
      }

      handler(this.#techTab.id, this.#tabId);
    });
  }
}

export default new Technology();
