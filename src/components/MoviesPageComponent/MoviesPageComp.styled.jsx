import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 34px;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 5px;

  font-size: 16px;

  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 5px;

  font-weight: 600;
  font-size: 16px;

  background-color: #ffff62;
  border: 2px solid black;
  border-radius: 5px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ed982a;
  }
`;

export const TextMessage = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 26px;
`;
