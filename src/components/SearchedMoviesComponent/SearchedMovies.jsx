import { useLocation } from 'react-router-dom';
import { List, Item, FilmLink } from './SearchedMovies.styled';

const SearchedMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <FilmLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </FilmLink>
        </Item>
      ))}
    </List>
  );
};

export default SearchedMovies;
