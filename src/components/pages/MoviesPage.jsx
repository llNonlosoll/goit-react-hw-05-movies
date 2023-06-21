import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';

import { searchMovie } from 'services/api';
import MoviesPageComp from 'components/MoviesPageComponent/MoviesPageComp';
import FoundMovies from 'components/FoundMoviesComponent/FoundMovies';

const Movies = () => {
  //States
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Query string parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // The value of 'query' from the query string
  const searchQuery = searchParams.get('query');

  // Value from input or from searchQuery
  const [query, setQuery] = useState(() => searchQuery || '');

  const abortCtrl = useRef();

  // fetch request on searchQuery change
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
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  // Function for state change when the input value changes
  const handleChange = event => {
    setQuery(event.target.value);
  };

  // Function on form submit => write down the value of searchParams
  // => then value of searchQuery
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  //Render
  return (
    <>
      <MoviesPageComp
        handleSubmit={handleSubmit}
        query={query}
        handleChange={handleChange}
      ></MoviesPageComp>
      {/* <div>
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
      </div> */}

      {loading && <Loader />}
      {error && !loading && <p>Error: {error}</p>}

      {movies.length !== 0 && (
        <FoundMovies movies={movies} searchQuery={searchQuery} />
      )}

      {!error && !searchQuery && movies.length === 0 && (
        <p>Please enter movie title</p>
      )}

      {!error && !loading && searchQuery && movies.length === 0 && (
        <p>No movies found with this title</p>
      )}
    </>
  );
};

export default Movies;
