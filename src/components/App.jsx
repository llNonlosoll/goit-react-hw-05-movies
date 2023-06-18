import { Route, Routes } from 'react-router-dom';
import { Layout } from './LayoutComponent/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('components/pages/Homepage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
