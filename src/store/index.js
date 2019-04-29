import createStore from 'storeon';

export default createStore([data]);

function data(store) {
  store.on('@init', () => {
    return {
      deepdive: JSON.parse(readCached('deepdive_mock')) || {},
      relationship: JSON.parse(readCached('relationship_mock')) || {}
    };
  });

  store.on('deepdive/update', (state, value) => {
    return { deepdive: value };
  });
  store.on('relatonship/update', (state, value) => {
    return { relationship: value };
  });
  store.on('@changed', ({ deepdive, relationship }) => {
    try {
      localStorage.setItem('relationship_mock', JSON.stringify(relationship));
      localStorage.setItem('deepdive_mock', JSON.stringify(deepdive));
    } catch (e) {
      console.error(e);
    }
  });
}

function readCached(key = '') {
  try {
    return localStorage.getItem(key) || null;
  } catch (e) {
    return null;
  }
}
