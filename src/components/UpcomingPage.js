import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUpcomingMovies, getImageUrl } from '../utils/api';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const data = await getUpcomingMovies();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-danger fw-bold">Upcoming Movies</h2>
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

export default UpcomingPage;
