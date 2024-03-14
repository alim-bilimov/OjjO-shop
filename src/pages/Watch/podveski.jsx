import React, { useEffect } from "react";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Podveski = () => {
  const { product, getProduct } = UseMainContext();

  let arr = product.filter((el) => {
    return el.category === "Подвески";
  });

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div id="watch">
      <div className="container">
        <div className="watch">
          {arr.map((el) => (
            <div className="watch-div">
              <img src={el.img} alt="" />
              <h3>{el.brand}</h3>
              <h1>{el.textName}</h1>
              <Link to={`/detail/${el.id}`}>
                <button>{el.price}$</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podveski;
