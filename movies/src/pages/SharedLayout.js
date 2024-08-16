import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Outlet />
    </>
  );
};

export default SharedLayout;
