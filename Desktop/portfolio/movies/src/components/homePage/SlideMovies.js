import { useGlobalContext } from "./../../context";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import "./SlideMoviesStyle.css";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image+Available";
const SlideMovies = ({ pageValue }) => {
  const { movies } = useGlobalContext();
  const navigate = useNavigate();
  const pageMoveClick = useCallback(
    (id) => {
      navigate(`/search/${id}`);
    },
    [navigate]
  );
  const getSlidePosition = (movieIndex, pageValue) => {
    if (movieIndex === pageValue) return "activeSlide";
    if (
      movieIndex === pageValue - 1 ||
      (pageValue === 0 && movieIndex === movies.length - 1)
    )
      return "lastSlide";
    if (
      movieIndex === pageValue + 1 ||
      (pageValue === movies.length - 1 && movieIndex === 0)
    )
      return "nextSlide";
    return "hiddenSlide";
  };
  return (
    <div className="section-center">
      {movies.map((movie, movieIndex) => {
        const { id, original_title, poster_path } = movie;
        const imageURL = poster_path
          ? `${IMAGE_BASE_URL}${poster_path}`
          : PLACEHOLDER_IMAGE;
        const position = getSlidePosition(movieIndex, pageValue);
        // let position = "hiddenSlide";
        // if (movieIndex === pageValue) {
        //   position = "activeSlide";
        // }
        // if (
        //   movieIndex === pageValue - 1 ||
        //   (pageValue === 0 && movies.length - 1 === movieIndex)
        // ) {
        //   position = "lastSlide";
        // }
        // if (
        //   movieIndex === pageValue + 1 ||
        //   (movies.length - 1 === pageValue && movieIndex === 0)
        // ) {
        //   position = "nextSlide";
        // }
        return (
          <article key={id} className={`${position} home-article`}>
            <div
              className="img-center"
              onClick={
                position === "activeSlide" ? () => pageMoveClick(id) : undefined
              }
            >
              <img src={imageURL} alt={original_title} className="home-img" />
            </div>

            <h3 className="home-title">{original_title}</h3>
          </article>
        );
      })}
    </div>
  );
};

export default SlideMovies;
