import View from './View';
import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

class Destination extends View {
  // renderImages() {
  //   const images = this.data.destination.map(des =>
  //     des.name.toLowerCase()
  //   );
  // }
  parentElementSecondaryNav = document.querySelector("#main");
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
            this.#images[this.data.name.toLowerCase()]
          }" alt="" />
        </div>
    </div>

    <div class="main__right-content">
      <nav class="nav nav__list secondary-nav">
        <button aria-selected="true" class="nav__item">Moon</button>
        <button aria-selected="false" class="nav__item">Mars</button>
        <button aria-selected="false" class="nav__item">Europa</button>
        <button aria-selected="false" class="nav__item">Titan</button>
      </nav>

      <div class="discription">
        <h2 class="heading heading--primary">${this.data.name}</h2>

        <p class="description__text">${this.data.description}</p>

        <div class="description__more-info">
          <div>
          <p class="heading heading--secondary-subhead">Avg. Distance</p>
          <p class="heading heading--primary-subhead">${
            this.data.distance
          }</p>
          </div>
          <div>
          <p class="heading heading--secondary-subhead">Est. Travel Time</p>
          <p class="heading heading--primary-subhead">${
            this.data.travel
          }</p>
          </div>
        </div>
      </div>
    </div>`;
  }

  addHandlerSlidesNav(handler) {
    ["click"].forEach(listener => {
      window.addEventListener(listener, e => {
        let tab = "";

        if (e.type === "load") {
          tab = e.target
            .querySelector(".secondary-nav")
            .querySelector('.nav__item[aria-selected="true"]');
        }

        if (e.type === "click") {
          // currently selected tab
          tab = e.target.closest(".nav__item");
        }

        handler("destination", tab.textContent, e.type);
      });
    });
  }
}

export default new Destination();
