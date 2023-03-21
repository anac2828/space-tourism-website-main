import destinationView from "./views/destinationView";
import * as model from "./model";

function controller() {
  const id = window.location.hash.slice(1);
  const pageId = id.slice(2).toLowerCase();

  // LOAD DATA TO STATE OBJECT
  // heading data comes from the clicked navigation tab.
  model.loadHeading(id, destinationView.navListPrimary);
  model.loadPageData(pageId);
  console.log(model.state);

  // render markup with data from state
  destinationView.render(model.state);
}

const init = function () {
  // Controller funtcion will run when the hash is changed or page is loaded
  destinationView.addHandlerRender(controller);
};

init();
