import React from "react";
import "./ErrorPageStyle.css";
import { useNavigate } from "react-router";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="section error-page">
      <div className="error-page-wrapper">
        <h2 className="error-title">요청하신 페이지를 찾을 수 없습니다</h2>
        <button className="error-btn" onClick={() => navigate("/")}>
          되돌아가기
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
