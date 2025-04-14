import "./SingleMovieStyle.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Loading from "../components/loading/Loading";
import NoResults from "../components/error/NoResults";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image+Available";
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
    return <Loading />;
  }
  if (!movie) {
    return <NoResults />;
  } else {
    const { img, title, date, average, overview, runtime, popularity } = movie;
    const imgeUrl = img ? `${IMAGE_BASE_URL}${img}` : PLACEHOLDER_IMAGE;
    return (
      <section className="section single-movie-section">
        <div className="single-container">
          <h2 className="single-title">{title}</h2>
          <div className="single-movie">
            <div className="single-center">
              <img src={imgeUrl} alt={title} className="single-img" />
            </div>
            <div className="single-movie-info">
              <p>
                date <span className="movie-data"> {date}</span>
              </p>
              <p>
                title <span className="movie-data">{title}</span>
              </p>
              <p>
                average <span className="movie-data">{average.toFixed(2)}</span>
              </p>
              <p>
                runtime <span className="movie-data">{runtime}m</span>
              </p>
              <p>
                popularity
                <span className="movie-data"> {Math.floor(popularity)}</span>
              </p>
              <p>
                overview <span className="movie-data overview">{overview}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
