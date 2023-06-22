import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 15px;

  margin-bottom: 10px;
`;

export const GoBackLink = styled(Link)`
  display: block;
  max-width: 80px;
  margin-bottom: 10px;
  padding: 10px;

  font-size: 20px;
  text-align: center;
  color: #111111;

  text-decoration: none;

  border: 2px solid #ffff62;
  border-radius: 5px;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #42aff3;
    background-color: #ffff62;
  }
`;

export const Image = styled.img`
  max-width: 350px;
`;

export const ItalicText = styled.p`
  font-style: italic;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 80px;
  margin-bottom: 10px;
  padding: 10px;

  font-size: 20px;
  text-align: center;
  color: #111111;

  text-decoration: none;

  border: 2px solid #ffff62;
  border-radius: 5px;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #42aff3;
    background-color: #ffff62;
  }
`;
