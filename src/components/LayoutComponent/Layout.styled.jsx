import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;

  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #ffff62;

  border-radius: 5px;
`;

export const Link = styled(NavLink)`
  display: inline-block;

  padding: 10px;

  font-weight: 600;
  font-size: 22px;

  color: #111111;
  text-decoration: none;

  &:hover {
    color: #42aff3;
  }

  &.active {
    background-color: #ed982a;

    border-radius: 5px;
  }
`;
