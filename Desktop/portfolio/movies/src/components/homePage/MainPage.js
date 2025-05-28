import "./MainPageStyle.css";
import { useGlobalContext } from "./../../context";
import { useEffect, useRef, useState, useCallback } from "react";
import SlideMovies from "./SlideMovies";
import PreviewMovies from "./PreviewMovies";
import Loading from "../loading/Loading";
const MainPage = () => {
  const { movies, setIndex, loading } = useGlobalContext();
  const [pageValue, setPageValue] = useState(0);
  const randomNumber = useRef(10);

  const nextPage = useCallback(() => {
    setPageValue((prev) => (prev + 1) % movies.length);
  }, [movies.length]);
  const prevPage = useCallback(() => {
    setPageValue((prev) => (prev - 1 + movies.length) % movies.length);
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

  useEffect(() => {
    const timeId = setTimeout(() => {
      setPageValue((prev) => (prev === 20 ? 0 : prev + 1));
    }, 4000);
    return () => clearTimeout(timeId);
  }, [pageValue]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <section className="section-home">
        <div className="home-wrapper">
          <SlideMovies pageValue={pageValue} />
          <button className="prev-index-btn" name="prev">
            <i
              className="fa-solid fa-angle-left left-btn"
              onClick={prevPage}
            ></i>
          </button>
          <button className="next-index-btn" name="next">
            <i
              className="fa-solid fa-angle-right right-btn"
              onClick={nextPage}
            ></i>
          </button>
          <div className="preview-wrapper">
            <PreviewMovies setPageValue={setPageValue} pageValue={pageValue} />
          </div>
        </div>
      </section>
    );
  }
};
export default MainPage;
