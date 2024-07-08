import React, { useEffect, useState } from 'react';
import { getPopularMovies, getImageUrl } from '../utils/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <h2 className="mt-4 mb-4 text-danger fw-bold">Popular Movies</h2>
            <div className='d-flex gap-2'>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
      
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

export default HomePage;
