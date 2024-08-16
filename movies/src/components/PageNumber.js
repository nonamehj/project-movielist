import { useCallback, useMemo } from "react";

import { useGlobalContext } from "../context";
import "./PageNumberStyle.css";
const PageNumber = () => {
  const { setIndex } = useGlobalContext();

  const Pages = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => index);
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
    <div className="page-container">
      <div className="page-btn">
        <button className="prev-btn" onClick={prevChange}>
          prev
        </button>
        <div className="newPage-btn">
          {Pages.map((page, index) => {
            return (
              <button
                key={page}
                onClick={() => handlePage(index)}
                className="newPage"
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

export default PageNumber;
