import "./SingleMovieStyle.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSingleMovie = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`
    );
    const data = await response.json();

    if (data) {
      const {
        poster_path: img,
        title,
        release_date: date,
        vote_average: average,
        overview,
        runtime,
        popularity,
      } = data;
      const newMovie = {
        img,
        title,
        date,
        average,
        overview,
        runtime,
        popularity,
      };
      setMovie(newMovie);
    } else {
      setMovie(null);
    }
    setLoading(false);
  }, [id]);
  useEffect(() => {
    fetchSingleMovie();
  }, [id, fetchSingleMovie]);
  if (loading) {
    return (
      <section className="section section-loading">
        <div className="loading"></div>
        <h2>loading</h2>
      </section>
    );
  }
  if (!movie) {
    <section className="section no-display">
      <h3>표시할 영화가 없습니다.</h3>
    </section>;
  } else {
    const { img, title, date, average, overview, runtime, popularity } = movie;

    return (
      <section className="section single-movie-section">
        <h2 className="single-title">{title}</h2>
        <div className="single-movie">
          <div className="single-center">
            <img
              src={`${IMAGE_BASE_URL}${img}`}
              alt="img"
              className="single-img"
            />
          </div>
          <div className="movie-info">
            <p>
              date : <span className="movie-data">{date}</span>
            </p>
            <p>
              title : <span className="movie-data">{title}</span>
            </p>
            <p>
              average : <span className="movie-data">{average.toFixed(2)}</span>
            </p>
            <p>
              runtime : <span className="movie-data">{runtime}m</span>
            </p>
            <p>
              popularity :
              <span className="movie-data">{Math.floor(popularity)}</span>
            </p>
            <p>
              overview : <span className="movie-data overview">{overview}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleMovie;