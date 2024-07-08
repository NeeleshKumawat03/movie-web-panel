import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopRatedMovies, getImageUrl } from '../utils/api';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const data = await getTopRatedMovies();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-danger fw-bold">Top Rated Movies</h2>
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
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
