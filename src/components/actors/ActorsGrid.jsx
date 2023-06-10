import ActorsCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          image={data.person.image ? data.person.image.medium : 'not-found.png'}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
