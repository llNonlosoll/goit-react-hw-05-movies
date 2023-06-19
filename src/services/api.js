import axios from 'axios';

// Base request params
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'ed30d82e5e7e2bb8ef0712ec8219f600',
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
