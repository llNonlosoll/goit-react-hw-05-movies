const MoviesPageComp = ({ handleSubmit, query, handleChange }) => {
  return (
    <div>
      <h2>Search Movies:</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          name="searchQuery"
          type="text"
          placeholder="Type here the movie title"
        />
        <button type="submit">Search movie</button>
      </form>
    </div>
  );
};

export default MoviesPageComp;
