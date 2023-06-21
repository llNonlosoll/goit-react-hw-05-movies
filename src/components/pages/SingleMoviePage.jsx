import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import { getMovieById } from 'services/api';
import SingleMovieComp from 'components/SinglePageComponent/SingleMovie';

const SingleMovie = () => {
  //States
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  // Variable to save location.state or "/"
  const goBack = location.state?.from ?? '/';

  const { movieId } = useParams();

  // fetch request on movieId change
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const fetchedMovie = await getMovieById(movieId);

        setMovie(fetchedMovie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  //Render
  return (
    <>
      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}

      <SingleMovieComp movie={movie} goBack={goBack} />
    </>
  );
};

export default SingleMovie;
