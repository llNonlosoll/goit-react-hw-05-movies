import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import { getCast } from 'services/api';
import CastComp from 'components/CastComponent/Cast';

const Cast = () => {
  //States
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // destructuring "movieId" from URL parameters
  const { movieId } = useParams();

  // fetch request on movieId change
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);

        const fetchedCast = await getCast(movieId);

        setMovieCast(fetchedCast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  //Render
  return (
    <>
      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}

      <CastComp movieCast={movieCast} />
    </>
  );
};

export default Cast;
