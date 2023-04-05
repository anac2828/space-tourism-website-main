import View from "./View";
import launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";

class Technology extends View {
  #tabId =
    localStorage.getItem("current-tech-tab") === null
      ? "Launch-vehicle"
      : localStorage.getItem("current-tech-tab");
  #techTab = this.navListPrimary.querySelector("#technology");
  #clickedTab;

  generateMarkup() {
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">
          <span>03</span> Space Launch 101
        </h1>
        <div class="main__left-content">
          <div class="number-indicators nav-btns">
            <button id="Launch-vehicle" class="btn btn--small" aria-selected="false">1</button>
            <button id="Spaceport" class="btn btn--small" aria-selected="false">2</button>
            <button id="Space-capsule" class="btn btn--small" aria-selected="false">3</button>
          </div>
          
          <div>
            <p class="">THE TERMINOLOGY…</p>
            <h2 class="heading heading--tertiary">${this.data.tabContent.name}</h2>
            <p>${this.data.tabContent.description}</p>
          </div>
        </div>
    </div>

    <div class="main__right-content">
      <img class="page-img" src="${launch}" alt="" />
    </div>`;
  }

  setActiveTab() {
    const nav = this.parentElement.querySelector(
      ".number-indicators"
    );

    this.#clickedTab = nav.querySelector(`#${this.#tabId}`);

    this.#clickedTab.setAttribute("aria-selected", "true");
  }

  addHandlerNumbsNav(handler) {
    if (!this.parentElement || !this.#clickedTab) return;

    // EVENT LISTENER
    this.parentElement.addEventListener("click", e => {
      if (e.target.tagName != "BUTTON") return;

      // Get the element of the clicked tab
      this.#clickedTab = e.target.closest(".btn--small");
      // if (!this.#clickedTab) return;
      // Get the name of the tab
      this.#tabId = this.#clickedTab.id;

      // Save tab name to local storage
      localStorage.setItem("current-tech-tab", this.#tabId);

      //Handler will load data of the clicked tab
      handler(this.#techTab.id, this.#tabId.split("-").join(" "));
    });
  }

  techTab(handler) {
    // Make the first tab active
    if (this.currentTabName != "03Technology")
      localStorage.setItem("current-tech-tab", "Launch-vehicle");

    if (!this.#techTab) return;

    // LISTENERS ************
    if (this.currentTabName === "03Technology")
      window.addEventListener(
        "click",
        handler(this.#techTab.id, this.#tabId.split("-").join(" "))
      );

    this.#techTab.addEventListener("click", () => {
      handler(this.#techTab.id, this.#tabId.split("-").join(" "));
    });
  }
}

export default new Technology();
