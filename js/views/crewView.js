import View from "./View";
import hurley from "../../assets/crew/image-douglas-hurley.png";

class Crew extends View {
  #crewTab = this.navListPrimary.querySelector("#crew");
  generateMarkup() {
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">
          <span>02</span> Meet your crew
        </h1>
        <div class="main__left-content">
          <p class="heading heading--quaternary">Uranus, Neptune, & Pluto</p>
          <h2 class="heading heading--tertiary">Jupiter & Saturn</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
                viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
            </p>
        </div>

        <div class="dot-indicators nav-btns">
          <button class="btn btn--dot" aria-selected="true">
            <span class="sr-only">Slide title</span>
          </button>
          <button class="btn btn--dot" aria-selected="false">
            <span class="sr-only">Slide title</span>
          </button>
          <button class="btn btn--dot" aria-selected="false">
            <span class="sr-only">Slide title</span>
          </button>
          <button class="btn btn--dot" aria-selected="false">
            <span class="sr-only">Slide title</span>
          </button>
        </div>
    </div>

    <div class="main__right-content">
      <img class="page-img" src="${hurley}" alt="" />
    </div>`;
  }

  setActiveTab() {
    // const nav = this.parentElement.querySelector(".secondary-nav");
    // this.#clickedTab = nav.querySelector(`#${this.tabId}`);
    // this.#clickedTab.setAttribute("aria-selected", "true");
  }

  crewTab(handler) {
    if (!this.#crewTab) return;
    // Make the first tab active
    if (this.currentTab === "00Home")
      // localStorage.setItem("current-tab", "Moon");

      console.log(this.#crewTab);
    this.#crewTab.addEventListener("click", () => {
      handler(this.#crewTab.id, "Douglas Hurley");
    });
  }
}

export default new Crew();
