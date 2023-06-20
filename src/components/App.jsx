import { Route, Routes } from 'react-router-dom';
import { Layout } from './LayoutComponent/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('components/pages/Homepage'));
const Movies = lazy(() => import('components/pages/MoviesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId">
          <Route path="movies/:movieId/cast" />
          <Route path="movies/:movieId/reviews" />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
