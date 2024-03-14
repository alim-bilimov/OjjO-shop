import React, { useEffect } from "react";
import { UseMainContext } from "../../context/MainContext";

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
                    <div className="btn-search">
                      <button></button>
                      <button></button>
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
