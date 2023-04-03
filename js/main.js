import destinationView from './views/destinationView';
import * as model from './model';

// CONTROLLERS

function loadDestinationPageController() {
  const pageId = window.location.hash.slice(3).toLocaleLowerCase();
  if (!pageId) return;

  //get tab id to load data
  const tabId = destinationView.getActiveTab();

  // load page data
  loadDataController(pageId, tabId);

  // RENDER MARKUP
  // render markup with data from state
  destinationView.render(model.state);
}

function loadDataController(pageId, tabId) {
  /****/
  // LOAD DATA TO STATE OBJECT

  // load page data
  model.loadPageData(pageId, tabId);
}

const init = function () {
  // Controller funtcion will run when the hash is changed or page is loaded
  destinationView.addHandlerRender(loadDestinationPageController);
  destinationView.addHandlerSlidesNav(loadDestinationPageController);
};
init();
