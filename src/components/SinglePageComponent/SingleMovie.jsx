import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Loader } from 'components/LoaderComponent/Loader';
import noImgAvailable from '../../images/no_image_available.jpg';
import {
  GoBackLink,
  Container,
  Image,
  ItalicText,
  LinkContainer,
  StyledLink,
} from './SingleMovie.styled';

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
      <GoBackLink to={goBack}>Go Back</GoBackLink>
      <Container>
        {poster_path ? (
          <Image
            alt={original_title}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        ) : (
          <Image src={noImgAvailable} alt="not available" />
        )}

        <div>
          <h2>"{title}"</h2>
          <ItalicText>Release date: {release_date}</ItalicText>
          <ItalicText>User Score: {popularity}</ItalicText>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </Container>
      <LinkContainer>
        <StyledLink to="cast" state={{ from: goBack }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: goBack }}>
          Reviews
        </StyledLink>
      </LinkContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SingleMovieComp;
