import { Route, Routes } from 'react-router-dom';
import { Layout } from './LayoutComponent/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('components/pages/HomePage'));
const Movies = lazy(() => import('components/pages/MoviesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:filmId">
          <Route path="/movies/:filmId/cast" />
          <Route path="/movies/:filmId/reviews" />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
