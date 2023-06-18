import { Container, Header, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">HOME</Link>
        <Link to="/movies">MOVIES</Link>
      </Header>
    </Container>
  );
};
