import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiBasket } from "react-icons/gi";
import { Link } from "react-router-dom";
import { UseMainContext } from "../../context/MainContext";

const Basket = () => {
  const [basket, setBasket] = useState([]);
  const { product, getProduct } = UseMainContext();

  const Dispatch = useDispatch();

  const counter = useSelector((state) => state.count);

  let random = product.filter((el) => {
    return el.id[Math.floor(Math.random() * product.length)];
  });

  function getRemoveData(id) {
    let remove = JSON.parse(localStorage.getItem("order")) || [];
    remove = remove.filter((el) => el.id !== id);
    localStorage.setItem("order", JSON.stringify(remove));
    getBasketData();
  }

  function getBasketData() {
    let products = JSON.parse(localStorage.getItem("order")) || [];
    setBasket(products);
  }

  const counte = basket.reduce((acc, el) => {
    return acc + el.price * el.count;
  }, 0);

  useEffect(() => {
    getBasketData();
    getProduct();
  }, []);

  return (
    <div>
      <div id="basket">
        <div className="container">
          <div className="basket">
            <h1 className="all-price">Общая Сумма:{counte}$</h1>
            {basket.length > 0 ? (
              basket.map((el) => (
                <div>
                  <div className="basket-div">
                    <img src={el.img} alt="" />
                    <div className="basket-text">
                      <h1>Название:{el.textName}</h1>
                      <p className="p-p">Цена:{el.price * el.count}$</p>
                      <h3>Количество:{el.count}</h3>
                      <h4
                        onClick={() => {
                          getRemoveData(el.id);
                        }}
                      >
                        Удалить Продукт
                      </h4>
                      <div className="basket-all">
                        <div className="basket-btn">
                          <button>купить</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="Basket-two">
                <h1>Корзина</h1>
                <GiBasket className="basket-icon" />
                <h1 className="h1-basket">Ваша Корзина Пуста</h1>
                <Link to="/catalog" className="link-basket">
                  Нажмите здесь, <span>Чтобы продолжить покупки</span>
                </Link>
              </div>
            )}

            <div className="foots">
              <div className="card-foots">
                {random.map((el) => (
                  <div>
                    <div className="div-foots">
                      <img src={el.img} alt="" />
                      <h2>Название:{el.textName}</h2>
                      <h3>Бренд:{el.brand}</h3>
                      <div className="foots-text">
                        <h3>Сумма:{el.price}$</h3>
                        <h4>купить</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
