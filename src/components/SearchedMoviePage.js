// src/pages/SearchedMoviePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies, getImageUrl } from '../utils/api';

const SearchedMoviePage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchSearchedMovies();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-danger fw-bold">Search Results for "{query}"</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-3" key={movie.id}>
            <div className="card">
              <img
                src={getImageUrl(movie.poster_path)}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.slice(0, 100) + "..."}</p>
                <a href={`/movie/${movie.id}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedMoviePage;
