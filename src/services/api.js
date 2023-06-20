import axios from 'axios';

// Base request params
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'efb2c1c3ed4f12e7da1417e145c2656a',
    language: 'en-US',
  },
});

// fetch functions
export async function fetchTrendingMovies() {
  try {
    const { data } = await instance.get(`/trending/movie/day`);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function searchMovie(queryString, signal) {
  try {
    const { data } = await instance.get(`/search/movie?query=${queryString}`, {
      signal,
    });
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}
