import destinationView from './views/destinationView';
import * as model from './model';

const getTabIndex = (tabId, pageId, data) =>
  data[pageId]?.findIndex(content => content.name === tabId);

function loadDestinationPage() {
  mainNavController();

  //get tab id to load data
  const tabId = destinationView.getActiveTab();
  // RENDER MARKUP
  // render markup with data from stat
  destinationView.render(model.state);
}

function mainNavController() {
  const headingText = window.location.hash.slice(1);
  const pageId = headingText.slice(2).toLowerCase();

  if (!pageId) return;

  /****/
  // LOAD DATA TO STATE OBJECT
  // heading data comes from the clicked navigation tab.
  model.loadHeading(headingText, destinationView.navListPrimary);

  // load all tab content for selected
  // load data for the selected tab
  model.loadPageData(pageId);

  const index = getTabIndex(tabId, pageId, model.state);

  model.loadSelectedTab(pageId, index);
  /****/
}

function secondaryNavController(pageId, tabId) {
  if (!pageId) return;

  // Get index to load selected tab data
  const index = getTabIndex(tabId, pageId, model.state);

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
