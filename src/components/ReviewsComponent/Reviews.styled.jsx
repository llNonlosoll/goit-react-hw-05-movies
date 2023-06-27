import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 500px;

  padding: 10px;

  list-style: none;

  overflow: auto;

  border-left: 1px solid #111111;
  border-top: 1px solid #111111;
  border-bottom: 1px solid #111111;

  border-radius: 5px 0 0 5px;

  &::-webkit-scrollbar {
    background-color: #ffff62;

    border-left: 1px solid #111111;
    border-right: 1px solid #111111;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #42aff3;

    border: 1px solid #111111;
    border-radius: 3px;
  }
`;

export const ReviewsItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid #111111;
  }
`;

export const ReviewsText = styled.p`
  text-align: justify;
`;

export const ItalicText = styled.p`
  font-style: italic;
`;
