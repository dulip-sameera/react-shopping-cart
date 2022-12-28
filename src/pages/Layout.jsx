import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { BG } from "../data/imgs";

const Layout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
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
