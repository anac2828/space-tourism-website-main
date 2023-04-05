import View from './View';
import hurley from '../../assets/crew/image-douglas-hurley.png';

class Crew extends View {
  #tabId =
    localStorage.getItem("current-crew-tab") === null
      ? "Douglas Hurley"
      : localStorage.getItem("current-crew-tab");
  #crewTab = this.navListPrimary.querySelector("#crew");
  #clickedTab;

  generateMarkup() {
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">
          <span>02</span> Meet your crew
        </h1>
        <div class="main__left-content">
          <p class="heading heading--quaternary">${this.data.tabContent.role}</p>
          <h2 class="heading heading--tertiary">${this.data.tabContent.name}</h2>
          <p>${this.data.tabContent.bio}</p>
          <div class="dot-indicators nav-btns">
            <button id="Douglas-Hurley" class="btn btn__dot" aria-selected="false">
              <span class="sr-only">Slide title</span>
            </button>
            <button id="Mark-Shuttleworth" class="btn btn__dot" aria-selected="false">
              <span class="sr-only">Slide title</span>
            </button>
            <button id="Victor-Glover" class="btn btn__dot" aria-selected="false">
              <span class="sr-only">Slide title</span>
            </button>
            <button id="Anousheh-Ansari" class="btn btn__dot" aria-selected="false">
              <span class="sr-only">Slide title</span>
            </button>
          </div>
        </div>
    </div>

    <div class="main__right-content">
      <img class="page-img" src="${hurley}" alt="" />
    </div>`;
  }

  setActiveTab() {
    const nav = this.parentElement.querySelector(".nav-btns");
    this.#clickedTab = nav.querySelector(
      `#${this.#tabId.split(" ").join("-")}`
    );

    this.#clickedTab.setAttribute("aria-selected", "true");
  }

  addHandlerDotsNav(handler) {
    if (!this.parentElement) return;

    // EVENT LISTENER
    this.parentElement.addEventListener("click", e => {
      if (
        e.target.tagName != "BUTTON" ||
        this.currentTabName != "02Crew"
      )
        return;
      // Get the element of the clicked tab
      this.#clickedTab = e.target.closest(".btn__dot");

      // Get the name of the tab
      this.#tabId = this.#clickedTab.id.split("-").join(" ");

      // Save tab name to local storage
      localStorage.setItem("current-crew-tab", this.#tabId);

      //Handler will load data of the clicked tab
      handler(this.#crewTab.id, this.#tabId);
    });
  }

  crewTab(handler) {
    // Make the first tab active
    if (this.currentTabName != "02Crew")
      localStorage.setItem("current-crew-tab", "Douglas Hurley");

    if (!this.#crewTab) return;

    // LISTENERS ************
    if (this.currentTabName === "02Crew")
      window.addEventListener(
        "click",
        handler(this.#crewTab.id, this.#tabId)
      );

    this.#crewTab.addEventListener("click", () => {
      handler(this.#crewTab.id, this.#tabId);
    });
  }
}

export default new Crew();
