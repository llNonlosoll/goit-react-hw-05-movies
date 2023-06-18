import { useState, useEffect, useRef } from 'react';
import { fetchTrendingMovies } from 'services/api';

import { Loader } from 'components/LoaderComponent/Loader';
import FilmList from 'components/FilmListComponent/FilmList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const abortCtrl = useRef();

  useEffect(() => {
    const fetchFilms = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setLoading(true);
        setErrorMsg(null);
        const fetchedFilms = await fetchTrendingMovies({
          abortCtrl: abortCtrl.current,
        });
        setFilms(fetchedFilms);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setErrorMsg(error.message);
          console.log(errorMsg);
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

      {loading && <Loader />}
    </main>
  );
};

export default Home;
