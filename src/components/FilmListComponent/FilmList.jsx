import { useLocation } from 'react-router-dom';
import { List, Item, FilmLink } from './FilmList.styled';

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <FilmLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </FilmLink>
        </Item>
      ))}
    </List>
  );
};

export default FilmList;
