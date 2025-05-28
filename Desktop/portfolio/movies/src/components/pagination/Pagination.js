import React from "react";
import "./PaginationStyle.css";
import { useCallback, useMemo } from "react";
import { useGlobalContext } from "./../../context";
const Pagination = () => {
  const { setIndex, index: value } = useGlobalContext();
  const Pages = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => index);
  }, []);
  const prevChange = useCallback(() => {
    setIndex((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage <= 1) prevPage = 1;
      return prevPage;
    });
  }, [setIndex]);
  const nextChange = useCallback(() => {
    setIndex((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > Pages.length) {
        nextPage = Pages.length;
      }
      return nextPage;
    });
  }, [setIndex, Pages.length]);
  const handlePage = useCallback(
    (page) => {
      setIndex(page + 1);
    },
    [setIndex]
  );

  return (
    <div className="pagination-container">
      <div className="pagination-wrapper">
        <button className="prev-btn" onClick={prevChange}>
          prev
        </button>
        <div className="page-btns">
          {Pages.map((page, index) => {
            let position = "";
            if (index === value - 1) {
              position = "active-page";
            }

            return (
              <button
                key={page}
                onClick={() => handlePage(index)}
                className={`index-page ${position}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <button className="next-btn" onClick={nextChange}>
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
