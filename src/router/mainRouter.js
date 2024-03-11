import React from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Heart from "../pages/heart";
import Basket from "../pages/Basket";

const MainRouter = () => {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/catalog", element: <Catalog />, key: 2 },
    { path: "/detail/:id", element: <Detail />, key: 3 },
    { path: "/heart", element: <Heart />, key: 4 },
    { path: "/basket", element: <Basket />, key: 5 },
  ];

  const PRIVATE = [{ path: "/admin", element: <Admin />, key: 2 }];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
      {PRIVATE.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRouter;
