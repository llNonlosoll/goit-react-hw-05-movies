import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import { getCast } from 'services/api';
import noImgAvailable from '../../images/no_image_available.jpg';
// import CastComp from 'components/CastComponent/Cast';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

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

  if (!movieCast) {
    return;
  }

  return (
    <div>
      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}
      {/* {movieCast.length > 0 && <CastComp movieCast={movieCast} />} */}
      {/* <CastComp movieCast={movieCast} /> */}

      <ul>
        {movieCast.map(
          ({ id, profile_path, original_name, name, character }) => (
            <li key={id}>
              <img
                width="200px"
                src={
                  profile_path ? (
                    `https://image.tmdb.org/t/p/w500${profile_path}`
                  ) : (
                    <img src={noImgAvailable} alt="not available" />
                  )
                }
                alt={original_name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Cast;
