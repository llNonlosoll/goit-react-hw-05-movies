import { useLocation } from 'react-router-dom';
import { List, Item, FilmLink, Title } from './FilmList.styled';

const FilmList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Title>TRENDING FILMS TODAY</Title>
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

export default FilmList;
