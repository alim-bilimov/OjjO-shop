import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Heart = () => {
  const [state, setState] = useState([]);

  return (
    <div>
      <div id="heart">
        <div className="container">
          <div className="hearts">
            {state.map((el) => {
              return (
                <div>
                  <div className="heart-div">
                    <img src={el.img} alt="" />
                    <div className="heart-text">
                      <h1>Название: {el.textName}</h1>
                      <p>Бренд: {el.brand}</p>
                    </div>
                    <div className="heart-btn">
                      <button>Купить </button>
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
