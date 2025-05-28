import React from "react";
import "./NoSearchResultStyle.css";

const NoSearchResult = () => {
  return (
    <section className="section message-display">
      <div className="message-wrapper">
        <h3>표시할 영화가 없습니다</h3>
      </div>
    </section>
  );
};

export default NoSearchResult;
