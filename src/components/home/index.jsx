import React from "react";
import logoTwo from "../../images/home.png";

const Home = () => {
  return (
    <div>
      <div id="home">
        <div className="contaiener">
          <div className="home">
            <div className="home-div">
              <h1>Долго, дорого, богато!</h1>
              <button>каталог изделий </button>
            </div>
            <div className="div-one"></div>
            <div className="div-logo">
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
