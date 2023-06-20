import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import { Loader } from 'components/LoaderComponent/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Link to="/" end>
          HOME
        </Link>
        <Link to="/movies">MOVIES</Link>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
