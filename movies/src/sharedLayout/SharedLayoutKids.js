import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayoutKids = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SharedLayoutKids;
