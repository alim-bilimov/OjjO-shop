import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/Group 3.png";
import { RiAdminLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { UseMainContext } from "../../context/MainContext";
const Header = () => {
  const navigate = useNavigate();
  const { count, setValues, dostup, block, setBlock } = UseMainContext();

  function navAdmin() {
    let local = JSON.parse(localStorage.getItem("locals")) || [];
    setBlock(local);
  }

  useEffect(() => {
    navAdmin();
  }, []);
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
            <nav>
              <NavLink to="/a">Контрагентам</NavLink>
              <NavLink to="/disygner">Дизайнерам</NavLink>
              <NavLink to="/vacanse">Вакансии</NavLink>
            </nav>
            <Link to="/">
              <img className="logo-one" src={logo} alt="" />
            </Link>

            <div className="btns">
              <div className="input-btn">
                <input
                  onClick={() => navigate("/search")}
                  onChange={(e) => setValues(e.target.value)}
                  type="text"
                  placeholder="Text ..."
                />
                <button onClick={() => {}}>
                  {" "}
                  <IoMdSearch />
                </button>
              </div>
              <div className="icons">
                <RiAdminLine
                  onClick={() => {
                    if (block == true) {
                      navigate("/admin");
                    } else if (block == false) {
                      navigate("/password");
                    }
                  }}
                  className="icons-admin"
                />

                <Link to={"login"}>
                  <p>Вход/Регистрация</p>
                </Link>

                <FaHeart
                  onClick={() => {
                    navigate("/heart");
                  }}
                  className="icons-like"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
