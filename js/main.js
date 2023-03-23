import destinationView from './views/destinationView';
import * as model from './model';

function mainNavController() {
  const headingText = window.location.hash.slice(1);
  const pageId = headingText.slice(2).toLowerCase();
  if (!pageId) return;
  /****/
  // LOAD DATA TO STATE OBJECT
  // heading data comes from the clicked navigation tab.
  model.loadHeading(headingText, destinationView.navListPrimary);
  model.setPageId(pageId);
  // load all tab content for selected
  model.loadPageData(pageId);
  console.log(model.state);
  // load data for the selected tab
  model.loadSelectedTab(pageId, 0);
  /****/

  // RENDER MARKUP
  // render markup with data from stat
  destinationView.render(model.state);
}

function secondaryNavController(pageId, tabText) {
  // Get index to load selected tab data
  const index = model.state[pageId].findIndex(content => content.name === tabText);

  // LOAD DATA

  model.loadSelectedTab(pageId, index);

  // RENDER CONTENT
  destinationView.render(model.state);
}

const init = function () {
  // Controller funtcion will run when the hash is changed or page is loaded
  destinationView.addHandlerRender(mainNavController);
  destinationView.addHandlerSlidesNav(secondaryNavController);
};
init();
