import destinationView from './views/destinationView';
import * as model from './model';

function mainNavController() {
  const id = window.location.hash.slice(1);
  const pageId = id.slice(2).toLowerCase();

  // LOAD DATA TO STATE OBJECT
  // heading data comes from the clicked navigation tab.
  model.loadHeading(id, destinationView.navListPrimary);
  model.loadPageData(pageId);

  // RENDER MARKUP
  // render markup with data from state
  destinationView.render(model.state);
}

function secondaryNavController(id) {
  // Get index to load selected tab data
  const index = model.state.destination.findIndex(content => content.name === id);

  model.loadSelectedTab(index);

  destinationView.renderTabContent();
}

const init = function () {
  // Controller funtcion will run when the hash is changed or page is loaded
  destinationView.addHandlerRender(mainNavController);
  destinationView.addHandlerSlidesNav(secondaryNavController);
};
init();
