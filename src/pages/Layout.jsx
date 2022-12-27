import React from "react";
import { Outlet } from "react-router-dom";
import { BG } from "../data/imgs";

const Layout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
      }}
      className="min-h-screen bg-cover bg-center"
    >
      <div className="bg-customBlack min-h-screen opacity-90">
        <div>Head</div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
