import { useState, useEffect } from 'react';

import { Loader } from 'components/LoaderComponent/Loader';

import { fetchTrendingMovies } from 'services/api';
import FilmList from 'components/FilmListComponent/FilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <main>
      <h1>TRENDING FILMS TODAY</h1>
      <FilmList movies={movies} />

      {error && !loading && <p>Error: {error}</p>}

      {loading && <Loader />}
    </main>
  );
};

export default Home;
