import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  color: #111111;

  &:hover {
    color: #ffff62;
  }
`;
