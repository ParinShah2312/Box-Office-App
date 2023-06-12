import { useReducer, useEffect } from 'react';
import ShowCard from './ShowCard';

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

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarrred] = usePersistedReducer(
    starredShowsReducer,
    [],
    'starredShows'
  );

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarrred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarrred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : 'not-found.png'}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
