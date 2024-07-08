import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getImageUrl } from '../utils/api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id);
        const credits = await getMovieCredits(id);
        setMovie({ details, credits });
        setLoading(false);
        console.log(credits)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src={getImageUrl(movie.details.poster_path)}
            className="img-fluid"
            alt={movie.details.title}
          />
        </div>
        <div className="col-md-8">
          <h2>{movie.details.title}</h2>
          <p>{movie.details.overview}</p>
          <h4>Cast:</h4>
          <ul className='d-flex flex-wrap gap-3 list'>
            {movie.credits.cast.slice(0, 5).map((cast) => (
                <li key={cast.cast_id}>
                    <p>{cast.name} as {cast.character}</p>
                    <img src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} alt="" width={100} />
                </li>
              
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
