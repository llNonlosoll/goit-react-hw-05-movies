import { Title, Input, Button } from './MoviesPageComp.styled';

const MoviesPageComp = ({ handleSubmit, query, handleChange }) => {
  return (
    <div>
      <Title>Search Movies:</Title>
      <form onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={handleChange}
          name="searchQuery"
          type="text"
          placeholder="Type here the movie title"
        />
        <Button type="submit">Search movie</Button>
      </form>
    </div>
  );
};

export default MoviesPageComp;
