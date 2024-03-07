import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Group 3.png";
import { RiAdminLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
            <nav>
              <NavLink to="/">Контрагентам</NavLink>
              <NavLink to="/disygner">Дизайнерам</NavLink>
              <NavLink to="/vacanse">Вакансии</NavLink>
            </nav>
            <img src={logo} alt="" />

            <div className="btns">
              <div className="input-btn">
                <input type="text" placeholder="Text ..." />
                <button>
                  {" "}
                  <IoMdSearch />
                </button>
              </div>
              <div className="icons">
                <RiAdminLine className="icons-admin" />
                <FaHeart className="icons-like" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
