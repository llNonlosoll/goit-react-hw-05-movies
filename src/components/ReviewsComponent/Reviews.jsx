import {
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ItalicText,
} from './Reviews.styled';

const ReviewsComp = ({ movieReviews }) => {
  if (!movieReviews) {
    return;
  }

  return (
    <>
      {movieReviews.length === 0 && (
        <ItalicText>We have no reviews for this movie</ItalicText>
      )}

      {movieReviews.length > 0 && (
        <ReviewsList>
          {movieReviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <h4>Author: {author}</h4>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default ReviewsComp;
