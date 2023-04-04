import View from './View';
import hurley from '../../assets/crew/image-douglas-hurley.png';

class Crew extends View {
  #crewTab = this.navListPrimary.querySelector('#crew');
  generateMarkup() {
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">
          <span>02</span> Meet your crew
        </h1>
        <div class="main__left-content">
          <p class="heading heading--quaternary">${this.data.tabContent.role}</p>
          <h2 class="heading heading--tertiary">${this.data.tabContent.name}</h2>
            <p>
                ${this.data.tabContent.bio}
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
    if (this.currentTab === '00Home')
      // localStorage.setItem("current-tab", "Moon");

      console.log(this.#crewTab);
    this.#crewTab.addEventListener('click', () => {
      handler(this.#crewTab.id, 'Douglas Hurley');
    });
  }
}

export default new Crew();
