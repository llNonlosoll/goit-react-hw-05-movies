import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';

import { searchMovie } from 'services/api';
import FilmList from 'components/FilmListComponent/FilmList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const [query, setQuery] = useState(() => searchQuery || '');

  const abortCtrl = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setLoading(true);

        const fetchedSearchedMovies = await searchMovie(
          searchQuery,
          abortCtrl.current.signal
        );

        setMovies(fetchedSearchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <div>
        {' '}
        <h2>Search Movies:</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={handleChange}
            name="searchQuery"
            type="text"
            placeholder="Type here the movie title"
          />
          <button type="submit">Search movie</button>
        </form>
      </div>

      {loading && <Loader />}

      {movies.length > 0 ? (
        <FilmList movies={movies} />
      ) : (
        <p>No movies with this title were found. Try entering another title</p>
      )}
    </div>
  );
};

export default Movies;
