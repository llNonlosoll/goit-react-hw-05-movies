import axios from 'axios';

// Base URL
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// API-key
const API_KEY = 'ed30d82e5e7e2bb8ef0712ec8219f600';

// fetch function
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};
