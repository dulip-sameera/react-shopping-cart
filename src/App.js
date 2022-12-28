import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Store from "./pages/Store";

const App = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/store"} element={<Store />} />
        <Route path={"/store/:itemId"} element={"StoreItem"} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/cart"} element={"cart"} />
        <Route path={"*"} element={"Error"} />
      </Route>
    </Routes>
  );
};

export default App;
