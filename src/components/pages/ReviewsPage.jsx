import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import { getReviews } from 'services/api';
import ReviewsComp from 'components/ReviewsComponent/Reviews';

const Reviews = () => {
  //States
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // destructuring "movieId" from URL parameters
  const { movieId } = useParams();

  // fetch request on movieId change
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const fetchedReviews = await getReviews(movieId);

        setMovieReviews(fetchedReviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  //Render
  return (
    <>
      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}

      <ReviewsComp movieReviews={movieReviews} />
    </>
  );
};

export default Reviews;
