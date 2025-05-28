import "./SlideMoviesStyle.css";
import React, { memo, useCallback } from "react";
import { useGlobalContext } from "./../../context";
import { useNavigate } from "react-router";
import PLACEHOLDER_IMAGE from "../../noImage.webp";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
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
    const activeIndex = pageValue;
    const lastIndex = (activeIndex - 1 + movies.length) % movies.length;
    const nextIndex = (activeIndex + 1) % movies.length;
    if (movieIndex === lastIndex) return "lastSlide";
    if (movieIndex === activeIndex) return "activeSlide";
    if (movieIndex === nextIndex) return "nextSlide";
    return null;
  };

  return (
    <div className="section-center">
      {movies.map((movie, movieIndex) => {
        const position = getSlidePosition(movieIndex, pageValue);
        if (!position) return null;
        const { id, original_title, poster_path } = movie;
        const imageURL = poster_path
          ? `${IMAGE_BASE_URL}${poster_path}`
          : PLACEHOLDER_IMAGE;

        return (
          <React.Fragment key={id}>
            <article className={`${position} home-article`}>
              <div
                className="img-center"
                onClick={
                  position === "activeSlide" ? () => pageMoveClick(id) : null
                }
              >
                <img src={imageURL} alt={original_title} className="home-img" />
              </div>
            </article>
            {position === "activeSlide" && (
              <div className={`${position} home-title-center`}>
                <h3 className="home-title">{original_title}</h3>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default memo(SlideMovies);
