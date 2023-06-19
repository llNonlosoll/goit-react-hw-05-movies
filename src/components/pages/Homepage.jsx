import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

import { Loader } from 'components/LoaderComponent/Loader';
import FilmList from 'components/FilmListComponent/FilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setLoading(true);

        const fetchedFilms = await fetchTrendingMovies();

        setMovies(fetchedFilms);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error.message);
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

      {loading && <Loader />}
    </main>
  );
};

export default Home;
