import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/Group 3.png";
import { RiAdminLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { UseMainContext } from "../../context/MainContext";
const Header = () => {
  const navigate = useNavigate();
  const { count, setValues } = UseMainContext();
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
                <button onClick={() => {}}>
                  {" "}
                  <IoMdSearch />
                </button>
              </div>
              <div className="icons">
                <Link to="password">
                  <RiAdminLine className="icons-admin" />
                </Link>
                <Link to={"login"}>
                  <img
                    src="https://freepngimg.com/save/153886-logo-google-hq-image-free/1261x1280"
                    alt=""
                  />
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
