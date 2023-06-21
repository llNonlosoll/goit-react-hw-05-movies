import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import noImgAvailable from '../../images/no_image_available.jpg';
import { StyledLink, Container } from './SingleMovie.styled';

const SingleMovieComp = ({ movie, goBack }) => {
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
      <Container>
        <StyledLink to={goBack}>Go Back</StyledLink>

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
      </Container>
      <div>
        <ul>
          <li>
            <Link to="cast" state={{ from: goBack }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBack }}>
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
