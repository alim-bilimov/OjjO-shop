import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { product, getProduct, deleteProduct } = UseMainContext();
  const [states, setStates] = useState("");
  const [man, setMan] = useState("");
  const [seasonn, setSeasonn] = useState("");
  const [brand, setBrand] = useState("");
  const [value, setValue] = useState([]);

  function getEditData() {
    let local = JSON.parse(localStorage.getItem("locals")) || [];
    local.map((el) => {
      setValue(el);
    });
  }

  let arr = product.filter((el) => {
    return (
      el.category == states &&
      el.for == man &&
      el.season == seasonn &&
      el.brandy == brand
    );
  });

  useEffect(() => {
    getProduct();
    getEditData();
  }, []);

  return (
    <div>
      <div id="catalog">
        <div className="container">
          <div className="catalog">
            <div className="selection">
              <select onChange={(e) => setBrand(e.target.value)} name="" id="">
                <option value="">Бренд </option>
                <option value="Rolex">Rolex </option>
                <option value="Maria">Maria & Angument </option>
                <option value="Richard">Richard & Milli </option>
                <option value="Patek">Patek Philippe </option>
                <option value="Baselworld">Baselworld </option>
              </select>
              <select onChange={(e) => setStates(e.target.value)} name="" id="">
                <option value="">Цена</option>
              </select>
              <select onChange={(e) => setMan(e.target.value)} name="" id="">
                <option value="">Для кого</option>
                <option value="Для Мужчины">Мужа</option>
                <option value="Для Женщины">Жены</option>
              </select>
              <select onChange={(e) => setStates(e.target.value)} name="" id="">
                <option>Категория </option>
                <option value="all">Все Продукты</option>
                <option value="серьги">Серьги</option>
                <option value="Подвески">Подвески</option>
                <option value="Часы">Часы</option>
                <option value="Браслеты">Браслеты</option>
                <option value="кольца">Кольца</option>
                <option value="Запонки">Запонки</option>
              </select>
              <select
                onChange={(e) => setSeasonn(e.target.value)}
                name=""
                id=""
              >
                <option value="">Сезон</option>
                <option value="Зимние Украшения">Зимние Украшения</option>
                <option value="Летние Украшения">Летние Украшения</option>
              </select>
            </div>

            <div className="card-div">
              {value == true
                ? product.map((el) => (
                    <div className="product-div">
                      <img src={el.img} alt="" />
                      <h1>{el.textName}</h1>
                      <h3>{el.brand}</h3>

                      <Link to={`/detail/${el.id}`}>
                        <button>{el.price}$</button>
                      </Link>
                      <div className="btn-edits">
                        <Link to={`/edit/${el.id}`}>
                          {" "}
                          <button className="edit">Edit</button>
                        </Link>
                        <button
                          onClick={() => deleteProduct(el.id)}
                          className="delete"
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  ))
                : states === "all"
                ? product.map((el) => (
                    <div className="product-div">
                      <img src={el.img} alt="" />
                      <h3>{el.brand}</h3>
                      <h1>{el.textName}</h1>
                      <Link to={`/detail/${el.id}`}>
                        <button>{el.price}$</button>
                      </Link>
                    </div>
                  ))
                : arr.map((el) => (
                    <div className="product-div">
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
      </div>
    </div>
  );
};

export default Catalog;
