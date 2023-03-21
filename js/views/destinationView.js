import View from "./View";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

class Destination extends View {
  generateMarkup() {
    return `
    <div class="main__left-container">
        <h1 class="numbered-title" id="main-heading">${this.data.heading}</h1>
        <div class="main__left-content">
          <img class="page-img" src="${moon}" alt="" />
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
        <h2 class="heading heading--primary">Section title</h2>

        <p class="description__text"></p>

        <div class="description__more-info">
          <div>
            <p class="heading heading--primary-subhead">384,400 km</p>
            <p class="heading heading--secondary-subhead">Avg. Distance</p>
          </div>
          <div>
            <p class="heading heading--primary-subhead">384,400 km</p>
            <p class="heading heading--secondary-subhead">Avg. Distance</p>
          </div>
        </div>
      </div>
    </div>`;
  }
}

export default new Destination();
