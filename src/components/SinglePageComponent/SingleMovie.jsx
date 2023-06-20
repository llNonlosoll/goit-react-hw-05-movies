import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import noImgAvailable from '../../images/no_image_available.jpg';

const SingleMovieComp = ({ movie, backButton }) => {
  if (!movie) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movie;

  return (
    <>
      <div>
        {poster_path ? (
          <img
            alt={original_title}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        ) : (
          <img src={noImgAvailable} alt="not available" />
        )}

        <div>
          <h1>
            {title} : {release_date}
          </h1>
          <p>User Score: {popularity}</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast" state={{ from: backButton }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backButton }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SingleMovieComp;
