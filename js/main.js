import destinationView from './views/destinationView';
import crewView from './views/crewView';
import techView from "./views/technologyView";
import * as model from "./model";

// CONTROLLERS

function loadDestinationPageController(pageId, tabId) {
  // if (!pageId || tabId) return;

  // load page data
  model.loadPageData(pageId, tabId);

  // RENDER MARKUP
  // render markup with data from state

  destinationView.render(model.state);
}

function loadCrewController(pageId, tabId) {
  model.loadPageData(pageId, tabId);

  crewView.render(model.state);
}

function loadTechController(pageId, tabId) {
  model.loadPageData(pageId, tabId);

  techView.render(model.state);
}

function init() {
  // Controller funtcion will run when the hash is changed or page is loaded
  destinationView.destinationTab(loadDestinationPageController);
  destinationView.addHandlerSlidesNav(loadDestinationPageController);

  crewView.crewTab(loadCrewController);
  crewView.addHandlerDotsNav(loadCrewController);

  techView.techTab(loadTechController);
  techView.addHandlerNumbsNav(loadTechController);
}

init();
