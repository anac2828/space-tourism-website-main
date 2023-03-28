import data from '../data.json';
export const state = { heading: '' };

// MODEL
export const loadHeading = function (id, element) {
  if (element) {
    // Get inner HTML info from NAV LINK and save to state
    for (const link of element.children) {
      if (link.children[0].textContent === id) state.heading = link.children[0].innerHTML;
    }
  }
};

export const setPageId = function (id) {
  state.pageId = id;
};

export const loadPageData = function (id) {
  state[id] = data[id];
};

export const loadSelectedTab = function (id, index) {
  if (!state[id]) return;
  state.tabContent = state[id][index];
};
