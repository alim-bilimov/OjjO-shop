import React, { useEffect, useState } from "react";

const Basket = () => {
  const [basket, setBasket] = useState([]);

  function getBasketData() {
    let product = JSON.parse(localStorage.getItem("order")) || [];
    setBasket(product);
  }

  useEffect(() => {
    getBasketData();
  }, []);

  return (
    <div>
      <div id="basket">
        <div className="container">
          <div className="basket">
            {basket.map((el) => (
              <div>
                <img src={el.img} alt="" />
                <h1>{el.textName}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
