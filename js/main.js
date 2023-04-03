import destinationView from './views/destinationView';
import * as model from './model';

// CONTROLLERS

function loadDestinationPageController(e) {
  console.log(e);
  //get tab id to load data
  const tabId = destinationView.getActiveTab();

  // load page data
  loadDataController(tabId);

  // RENDER MARKUP
  // render markup with data from state
  destinationView.render(model.state);
}

function loadDataController(tabId) {
  const headingText = window.location.hash.slice(1);
  const pageId = headingText.slice(2).toLowerCase();

  if (!pageId) return;

  /****/
  // LOAD DATA TO STATE OBJECT

  // load page data
  model.loadPageData(pageId, tabId);

  // load data for the selected tab
  // model.loadSelectedTab(pageId, index);
  /****/
}

const init = function () {
  // Controller funtcion will run when the hash is changed or page is loaded
  destinationView.addHandlerRender(loadDestinationPageController);
  destinationView.addHandlerSlidesNav(loadDestinationPageController);
};
init();
