import React from "react";
import { Outlet } from "react-router-dom";
import { BG } from "../data/imgs";

const Layout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div>Head</div>
      <Outlet />
    </div>
  );
};

export default Layout;
