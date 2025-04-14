import "./MainPageStyle.css";
import { useGlobalContext } from "./../../context";
import { useEffect, useRef, useState, useCallback } from "react";
import SlideMovies from "./SlideMovies";
import Loading from "../loading/Loading";
const MainPage = () => {
  const { movies, setIndex, loading } = useGlobalContext();
  const [pageValue, setPageValue] = useState(0);
  const randomNumber = useRef(10);
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
    return <Loading />;
  } else {
    return (
      <section className="section-home">
        <SlideMovies pageValue={pageValue} />
        <div className="index-container">
          <button className="prev-index-btn" name="prev" onClick={prevPage}>
            <i className="fa-solid fa-angle-left left-btn"></i>
          </button>
          <button className="next-index-btn" name="next" onClick={nextPage}>
            <i className="fa-solid fa-angle-right right-btn"></i>
          </button>
        </div>
      </section>
    );
  }
};
export default MainPage;
