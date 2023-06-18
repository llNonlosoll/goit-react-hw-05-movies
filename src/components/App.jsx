import { Route, Routes } from 'react-router-dom';
import { Layout } from './LayoutComponent/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};
