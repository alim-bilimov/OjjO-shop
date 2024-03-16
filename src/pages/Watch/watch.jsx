import React, { useEffect } from "react";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Watch = () => {
  const { product, getProduct } = UseMainContext();

  let arr = product.filter((el) => {
    return el.category === "Часы";
  });

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div id="watch">
      <div className="container">
        <div className="home-detail">
          <Link to="/">Главная /</Link>
          <Link to="/catalog">Каталог /</Link>
          <Link to="/">Категория /</Link>
        </div>
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

export default Watch;
