import { useState, useEffect } from 'react';

import { Loader } from 'components/LoaderComponent/Loader';

import { fetchTrendingMovies } from 'services/api';
import FilmList from 'components/FilmListComponent/FilmList';

const Home = () => {
  //States
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetch request on first render
  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setLoading(true);

        const fetchedFilms = await fetchTrendingMovies();

        setMovies(fetchedFilms);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesList();
  }, []);

  //Render
  return (
    <main>
      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}

      <FilmList movies={movies} />
    </main>
  );
};

export default Home;
