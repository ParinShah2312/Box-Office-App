import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
import NotFoundImgSrc from '../lib/not-found.png';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          image={data.person.image ? data.person.image.medium : NotFoundImgSrc}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
