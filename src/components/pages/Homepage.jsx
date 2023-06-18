import { useState, useEffect, useRef } from 'react';
import { fetchTrendingMovies } from 'services/api';
import FilmList from 'components/FilmListComponent/FilmList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    const fetchFilms = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setLoading(true);
        setError(null);
        const fetchedFilms = await fetchTrendingMovies({
          abortCtrl: abortCtrl.current,
        });
        setFilms(fetchedFilms);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return (
    <main>
      <h1>TRENDING FILMS TODAY</h1>
      <FilmList films={films} />
    </main>
  );
};

export default Home;
