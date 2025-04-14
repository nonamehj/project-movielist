import "./MainHomeStyle.css";
import { useGlobalContext } from "../context";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import SlideMovies from "./homePage/SlideMovies";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
// const PLACEHOLDER_IMAGE =
//   "https://via.placeholder.com/500x750?text=No+Image+Available";
const MainHome = () => {
  const { movies, setIndex, loading } = useGlobalContext();
  const [pageValue, setPageValue] = useState(0);
  const randomNumber = useRef(10);
  // const navigate = useNavigate();

  // const pageMoveClick = useCallback(
  //   (id) => {
  //     navigate(`/search/${id}`);
  //   },
  //   [navigate]
  // );

  const prevPage = useCallback(() => {
    setPageValue((prev) => {
      let prevNum = prev - 1;
      if (prevNum < 0) {
        prevNum = movies.length - 1;
      }
      return prevNum;
    });
  }, [movies.length]);
  const nextPage = useCallback(() => {
    setPageValue((next) => {
      let nextNum = next + 1;
      if (nextNum > movies.length - 1) {
        nextNum = 0;
      }
      return nextNum;
    });
  }, [movies.length]);
  /*잠시 주석 */
  // useEffect(() => {
  //   const startId = setInterval(() => {
  //     setPageValue((prev) => {
  //       let numIndex = prev + 1;
  //       if (numIndex > movies.length - 1) {
  //         numIndex = 0;
  //       }
  //       return numIndex;
  //     });
  //   }, 5000);
  //   return () => clearInterval(startId);
  // }, [movies]);

  useEffect(() => {
    let pageNum = Math.floor(Math.random() * randomNumber.current);
    if (pageNum === 0) {
      pageNum = 1;
    } else if (pageNum === randomNumber.current) {
      pageNum += 1;
    }
    return setIndex(pageNum);
  }, [setIndex]);

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
        <SlideMovies pageValue={pageValue} />
        {/* <div className="section-center">
          {movies.map((movie, movieIndex) => {
            const { id, original_title, poster_path } = movie;
            const imgeURL = poster_path
              ? `${IMAGE_BASE_URL}${poster_path}`
              : PLACEHOLDER_IMAGE;
            let position = "hiddenSlide";
            if (movieIndex === pageValue) {
              position = "activeSlide";
            }
            if (
              movieIndex === pageValue - 1 ||
              (pageValue === 0 && movies.length - 1 === movieIndex)
            ) {
              position = "lastSlide";
            }
            if (
              movieIndex === pageValue + 1 ||
              (movies.length - 1 === pageValue && movieIndex === 0)
            ) {
              position = "nextSlide";
            }
            return (
              <article key={id} className={`${position} home-article`}>
                <div
                  className="img-center"
                  onClick={
                    position === "activeSlide"
                      ? () => pageMoveClick(id)
                      : undefined
                  }
                >
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
        </div> */}
        <div className="index-container">
          <button className="prev-indexbtn" name="prev" onClick={prevPage}>
            <i className="fa-solid fa-angle-left left-btn"></i>
          </button>
          <button className="next-indexbtn" name="next" onClick={nextPage}>
            <i className="fa-solid fa-angle-right right-btn"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default MainHome;
