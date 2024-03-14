import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Heart = () => {
  const [state, setState] = useState([]);

  function getHeartData() {
    let products = JSON.parse(localStorage.getItem("order")) || [];
    setState(products);
  }

  useEffect(() => {
    getHeartData();
  }, []);

  return (
    <div>
      <div id="heart">
        <div className="container">
          <center>
            <h1 className="heart-h1">Товары которые понравились вам:</h1>
          </center>
          <div className="hearts">
            {state.map((el) => {
              return (
                <div className="heart-all">
                  <div className="heart-div">
                    <img src={el.img} alt="" />
                    <div className="heart-text">
                      <h1>Название: {el.textName}</h1>
                      <p>Бренд: {el.brand}</p>
                    </div>
                    <div className="heart-btn">
                      <FaHeart className="f" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
