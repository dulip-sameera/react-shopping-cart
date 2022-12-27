import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={"Home"} />
        <Route path={"/store"} element={"Store"} />
        <Route path={"/store/:itemId"} element={"StoreItem"} />
        <Route path={"/about"} element={"About"} />
        <Route path={"*"} element={"Error"} />
      </Route>
    </Routes>
  );
};

export default App;
