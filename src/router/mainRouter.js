import React from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin";
import Catalog from "../pages/Catalog";
import Register from "../components/authentication/Register";
import Loggin from "../components/authentication/Loggin";
import Detail from "../pages/Detail";
import Heart from "../pages/heart";
import Basket from "../pages/Basket";
import Password from "../pages/Password/password";
import Search from "../pages/search";
import Watch from "../pages/Watch/watch";
import Ring from "../pages/Watch/ring";
import Sergi from "../pages/Watch/sergi";
import Podveski from "../pages/Watch/podveski";
import Braslety from "../pages/Watch/braslety";
import Zaponki from "../pages/Watch/zaponki";
import Edit from "../pages/editProduct";
import Exclusive from "../pages/exlusive";

const MainRouter = () => {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/catalog", element: <Catalog />, key: 2 },
    { path: "/register", element: <Register />, key: 3 },
    { path: "/login", element: <Loggin />, key: 3 },
    { path: "/detail/:id", element: <Detail />, key: 3 },
    { path: "/heart", element: <Heart />, key: 4 },
    { path: "/basket", element: <Basket />, key: 5 },
    { path: "/search", element: <Search />, key: 6 },
    { path: "/watch", element: <Watch />, key: 7 },
    { path: "/ring", element: <Ring />, key: 8 },
    { path: "/sergi", element: <Sergi />, key: 9 },
    { path: "/podveski", element: <Podveski />, key: 10 },
    { path: "/braslety", element: <Braslety />, key: 11 },
    { path: "/zaponki", element: <Zaponki />, key: 12 },
    { path: "/exclusive", element: <Exclusive />, key: 13 },
  ];

  const PRIVATE = [
    { path: "/admin", element: <Admin />, key: 1 },
    { path: "/password", element: <Password />, key: 2 },
    { path: "/edit/:id", element: <Edit />, key: 3 },
  ];

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
