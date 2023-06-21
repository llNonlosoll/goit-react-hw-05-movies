const ReviewsComp = ({ movieReviews }) => {
  if (!movieReviews) {
    return;
  }

  return (
    <ul>
      {movieReviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsComp;