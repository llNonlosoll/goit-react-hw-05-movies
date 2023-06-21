import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import { getMovieById } from 'services/api';
import SingleMovieComp from 'components/SinglePageComponent/SingleMovie';

const SingleMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const { movieId } = useParams();

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

  const backButton = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backButton}>Go Back</Link>

      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}

      <SingleMovieComp movie={movie} backButton={backButton} />
    </div>
  );
};

export default SingleMovie;
