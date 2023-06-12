import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowsReducer = (currenStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currenStarred.concat(action.showId);
    case 'UNSTAR':
      return currenStarred.filter(showId => showId !== action.showId);
    default:
      return currenStarred;
  }
};

export const useStarredShows = () => {
  return usePersistedReducer(starredShowsReducer, [], 'starredShows');
};
