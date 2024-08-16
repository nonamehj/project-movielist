import "./MainHomeStyle.css";
import { useGlobalContext } from "../context";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image+Available";
const MainHome = () => {
  const { movies, setIndex, loading } = useGlobalContext();
  const [ranValue, setRanValue] = useState(0);
  const randomNumber = useRef(10);

  useEffect(() => {
    let rNum = Math.floor(Math.random() * randomNumber.current);
    if (rNum === 0) {
      rNum = 1;
    } else if (rNum === randomNumber.current) {
      rNum += 1;
    }
    return setIndex(rNum);
  }, [setIndex]);

  const Pages = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => index);
  }, []);
  const handleClick = useCallback((page) => {
    setRanValue(page);
  }, []);
  const prevClick = useCallback(() => {
    setRanValue((prev) => {
      let prevNum = prev - 1;
      if (prevNum < 0) {
        prevNum = movies.length - 1;
      }
      return prevNum;
    });
  }, [movies.length]);
  const nextClick = useCallback(() => {
    setRanValue((next) => {
      let nextNum = next + 1;
      if (nextNum > movies.length - 1) {
        nextNum = 0;
      }
      return nextNum;
    });
  }, [movies.length]);
  useEffect(() => {
    const startId = setInterval(() => {
      setRanValue((prev) => {
        let numIndex = prev + 1;
        if (numIndex > movies.length - 1) {
          numIndex = 0;
        }
        return numIndex;
      });
    }, 3000);
    return () => clearInterval(startId);
  }, [movies]);
  if (loading) {
    return (
      <section className="section section-loading">
        <div className="loading"></div>
        <h2>loading</h2>
      </section>
    );
  } else {
    return (
      <div className="section-home">
        <div className="section-center">
          {movies.map((movie, movieIndex) => {
            const { id, original_title, poster_path } = movie;
            const imgeURL = poster_path
              ? `${IMAGE_BASE_URL}${poster_path}`
              : PLACEHOLDER_IMAGE;
            let position = "";
            if (movieIndex === ranValue) {
              position = "activeSlide";
            }
            if (
              movieIndex === ranValue - 1 ||
              (ranValue === 0 && movies.length - 1 === movieIndex)
            ) {
              position = "lastSlide";
            }
            if (
              movieIndex === ranValue + 1 ||
              (movies.length - 1 === ranValue && movieIndex === 0)
            ) {
              position = "nextSlide";
            }
            return (
              <article key={id} className={`${position} home-article`}>
                <div className="img-center">
                  <img
                    src={imgeURL}
                    alt={original_title}
                    className="home-img"
                  />
                </div>
                <h3 className="home-title">{original_title}</h3>
              </article>
            );
          })}
        </div>
        <div className="index-container">
          <button className="prev-indexbtn" onClick={prevClick}>
            <i className="fa-solid fa-angle-left left-btn"></i>
          </button>
          <div className="pages-btn">
            {Pages.map((page, index) => {
              return (
                <button
                  key={page}
                  onClick={() => handleClick(index)}
                  className="index-btn"
                >
                  {page + 1}
                </button>
              );
            })}
          </div>
          <button className="next-indexbtn" onClick={nextClick}>
            <i className="fa-solid fa-angle-right right-btn"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default MainHome;