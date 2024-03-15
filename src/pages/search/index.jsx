import React, { useEffect } from "react";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Search = ({ addData }) => {
  const { product, getProduct, value } = UseMainContext();

  let Inputs = product.filter((el) => {
    return el.textName.toLowerCase().includes(value.toLowerCase());
  });
  console.log(value);

  useEffect(() => {
    getProduct();
  }, [value]);

  return (
    <div>
      <div id="search">
        <div className="container">
          <div className="search">
            <div className="home-detail">
              <Link to="/">Главная /</Link>
              <Link to="/catalog">Каталог /</Link>
              <Link to="/">Категория /</Link>
            </div>
            {Inputs.length > 0 ? (
              Inputs.map((el) => (
                <div>
                  <div className="search-card">
                    <img src={el.img} alt="" />
                    <div className="search-text">
                      <h1>
                        Название:
                        {el.textName}
                      </h1>
                      <p>
                        Цена:
                        {el.price}
                      </p>
                      <h2>
                        Бренд:
                        {el.brand}
                      </h2>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>dsfsf</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
