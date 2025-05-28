import React, { memo } from "react";
import "./PreviewMoviesStyle.css";
import { useGlobalContext } from "./../../context";
import PLACEHOLDER_IMAGE from "../../noImage.webp";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PreviewMovies = ({ setPageValue, pageValue }) => {
  const { movies } = useGlobalContext();
  return (
    <div className="preview-container">
      <div className="preview-center">
        {movies.map((movie, index) => {
          const { id, original_title, poster_path } = movie;
          const imageURL = poster_path
            ? `${IMAGE_BASE_URL}${poster_path}`
            : PLACEHOLDER_IMAGE;
          const position = pageValue === index ? "active-preview" : null;
          return (
            <article
              key={id}
              className={`preview-item ${position}`}
              onClick={() => {
                setPageValue(index);
              }}
            >
              <div className="preview-info">
                <img
                  src={imageURL}
                  alt={original_title}
                  className="preview-img"
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default memo(PreviewMovies);
