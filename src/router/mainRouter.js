import React from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin";
import Catalog from "../pages/Catalog";
import Register from "../components/authentication/Register";
import Loggin from "../components/authentication/Loggin";

const MainRouter = () => {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/catalog", element: <Catalog />, key: 2 },
    { path: "/register", element: <Register />, key: 3 },
    { path: "/login", element: <Loggin />, key: 3 },
  ];

  const PRIVATE = [{ path: "/admin", element: <Admin />, key: 1 }];

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
