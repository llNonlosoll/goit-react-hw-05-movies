import { useLocation } from 'react-router-dom';
import { List, Item, FilmLink, Title } from './FoundMovies.styled';

const FoundMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Title>We have found the movies for your request:</Title>
      <List>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <FilmLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </FilmLink>
          </Item>
        ))}
      </List>
    </>
  );
};

export default FoundMovies;
