import { useStarredShows } from '../lib/useStarredShows';
import ShowCard from './ShowCard';
import { FlexGrid } from '../common/FlexGrid';

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarrred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarrred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarrred({ type: 'STAR', showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : 'not-found.png'}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
