import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const bgImg = useSelector((state) => state.bgImg.value);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="min-h-screen bg-auto bg-center bg-no-repeat bg-fixed"
    >
      <div className="bg-customBlack min-h-screen bg-opacity-90">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
