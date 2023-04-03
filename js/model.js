import data from '../data.json';
export const state = { heading: '' };

// MODEL

export const setPageId = function (id) {
  state.pageId = id;
};

export const loadPageData = function (pageId, tabId) {
  console.log('load page data :', tabId);
  state[pageId] = data[pageId];

  const index = data[pageId]?.findIndex(content => content.name === tabId);
  state.tabContent = data[pageId][index];
};
