import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 10px;
  padding: 10px;

  text-decoration: none;

  border: 2px solid #111111;
  cursor: pointer;
`;
