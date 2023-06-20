import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './LayoutComponent/Layout';

const Home = lazy(() => import('components/pages/Homepage'));
const Movies = lazy(() => import('components/pages/MoviesPage'));
const SingleMovie = lazy(() => import('components/pages/SingleMoviePage'));
const Cast = lazy(() => import('components/pages/CastPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<SingleMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
