import data from '../data.json';
export const state = { heading: '' };

// MODEL

export const setPageId = function (id) {
  state.pageId = id;
};

export const loadPageData = function (pageId, tabId) {
  if (pageId === 'home') return;
  state[pageId] = data[pageId];

  const index = data[pageId]?.findIndex(content => content.name === tabId);
  state.tabContent = data[pageId][index];
};
