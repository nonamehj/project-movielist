import "./SingleMovieStyle.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Loading from "../components/loading/Loading";
import PLACEHOLDER_IMAGE from "../noImage.webp";
import NoSearchResult from "./../components/messages/NoSearchResult";
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const getMaxChars = () => {
  const width = window.innerWidth;
  if (width <= 479) return 150;
  if (width <= 767) return 180;
  if (width <= 1023) return 220;
  if (width <= 1279) return 260;
  if (width <= 1439) return 300;
  return 340;
};

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [maxChars, setMaxChars] = useState(getMaxChars());

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
  useEffect(() => {
    const handleResize = () => setMaxChars(getMaxChars());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!movie) {
    return <NoSearchResult />;
  } else {
    const { img, title, date, average, overview, runtime, popularity } = movie;
    const imgeUrl = img ? `${IMAGE_BASE_URL}${img}` : PLACEHOLDER_IMAGE;
    const isLong = overview.length >= maxChars;
    const shortText = overview.slice(0, maxChars);
    return (
      <section className="section single-movie-section">
        <div className="single-container">
          <h2 className="single-title">{title}</h2>
          <div className="single-movie">
            <div className="single-image-wrapper">
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
                overview{" "}
                <span className="movie-data overview">
                  {isLong && !isOpen ? (
                    <>
                      {shortText}{" "}
                      <button
                        className="btn-readmore"
                        onClick={() => setIsOpen(true)}
                      >
                        더보기
                      </button>
                    </>
                  ) : (
                    overview
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
