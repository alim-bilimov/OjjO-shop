import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { product, getProduct } = UseMainContext();
  const [states, setStates] = useState(false);

  let arr = product.splice();

  useEffect(() => {
    getProduct();
  }, []);

  console.log(states);

  return (
    <div>
      <div id="catalog">
        <div className="container">
          <div className="catalog">
            <div className="selection">
              <select name="" id="">
                <option value="">Бренд </option>
              </select>
              <select name="" id="">
                <option value="">Цена</option>
              </select>
              <select name="" id="">
                <option value="">Для кого</option>
              </select>
              <select name="" id="">
                <option value="">Коллекция </option>
              </select>
              <select name="" id="">
                <option value="">Сезон</option>
              </select>
            </div>

            <div className="card-div">
              {product.map((el) => (
                <div className="product-div">
                  <img src={el.img} alt="" />
                  <h3>{el.brand}</h3>
                  <h1>{el.textName}</h1>
                  <Link to={`/detail/${el.id}`}>
                    <button>{el.price}сом</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
