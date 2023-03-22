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
  parentElementSecondaryNav = document.querySelector('#main');

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

  renderTabContent() {
    console.log(this.data);

    return `<h2 class="heading heading--primary">${this.data.tabContent}</h2>`;
  }

  addHandlerSlidesNav(handler) {
    ['click', 'load'].forEach(listener => {
      window.addEventListener(listener, e => {
        let tab = '';

        console.log(e.type);
        if (e.type === 'load') {
          tab = e.target
            .querySelector('.secondary-nav')
            .querySelector('.nav__item[aria-selected="true"]');
        }

        if (e.type === 'click') {
          // currently selected tab
          tab = e.target.closest('.nav__item');
        }

        handler(tab.textContent);
      });
    });
  }
}

export default new Destination();
