import axios from 'axios';

const API_KEY = 'f3f83949c8abc4a182528265f2df7398';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    throw error;
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getImageUrl = (path) => {
  return `${IMAGE_BASE_URL}/${path}`;
};
