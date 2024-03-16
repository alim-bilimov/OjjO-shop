import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/Group 3.png";
import { RiAdminLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { UseMainContext } from "../../context/MainContext";
const Header = () => {
  const navigate = useNavigate();
  const { setValues } = UseMainContext();
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
              <img src={logo} alt="" />
            </Link>

            <div className="btns">
              <div className="input-btn">
                <input
                  onClick={() => navigate("/search")}
                  onChange={(e) => setValues(e.target.value)}
                  type="text"
                  placeholder="Text ..."
                />
                <button
                  onClick={() => {
                    navigate("/search");
                  }}
                >
                  {" "}
                  <IoMdSearch />
                </button>
              </div>
              <div className="icons">
                <Link to="password">
                  <RiAdminLine className="icons-admin" />
                </Link>
                <div className="login">
                  <Link to={"login"}>
                    <p>Вход/Регистрация</p>
                  </Link>
                </div>

                <FaHeart
                  onClick={() => {
                    navigate("/heart");
                  }}
                  className="icons-like"
                />
                <RiShoppingBasket2Line
                  onClick={() => {
                    navigate("/basket");
                  }}
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
