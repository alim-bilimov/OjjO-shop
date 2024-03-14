import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../context/MainContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import iconTwo from "../../images/icon__item.png";
import iconThree from "../../images/icon__item (1).png";
import iconFor from "../../images/icon__item (2).png";
import iconFive from "../../images/icon__item (3).png";
import { FaHeart } from "react-icons/fa";

let likes = JSON.parse(localStorage.getItem("heart"));
const Detail = () => {
  const { product, getProduct, setCount, count } = UseMainContext();
  const [click, setClick] = useState(false);
  const [heart, setHeart] = useState(likes || false);
  const [mouse, setMouse] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  function getHearts() {
    localStorage.setItem("heart", JSON.stringify(heart));
  }

  function getLikeData() {
    let product = JSON.parse(localStorage.getItem("like")) || [];
    let res = product.some((el) => {
      let arr = sortProduct.some((il) => {
        return el.id == il.id;
      });
      return arr;
    });
    if (res == false) {
      product.push(sortProduct[0]);
      localStorage.setItem("like", JSON.stringify(product));
    } else {
      alert("Этот товар в списке Понравившиехся!!!");
    }
  }

  function getOrderData() {
    let products = JSON.parse(localStorage.getItem("order")) || [];
    let res = products.some((el) => {
      let arr = sortProduct.some((il) => {
        return el.id == il.id;
      });
      return arr;
    });
    if (res == false) {
      products.push(sortProduct[0]);
      localStorage.setItem("order", JSON.stringify(products));
    } else {
      alert("Этот продукт уже добавлен!!!");
    }
  }

  let sortProduct = product.filter((el) => {
    return id == el.id;
  });

  useEffect(() => {
    getProduct();
    getHearts();
  }, []);

  return (
    <div>
      <div id="detail">
        <div className="container">
          <div className="detail">
            <div className="home-detail">
              <Link to="/">Главная /</Link>
              <Link to="/catalog">Каталог /</Link>
              <Link to="/">Категория /</Link>
            </div>
            {sortProduct.map((el) => (
              <div>
                <div className="all-detail">
                  <div className="detail-div">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="detail-divTwo">
                    <div className="detail-right">
                      <h1>{el.textName}</h1>
                      <div className="detail-text">
                        <p>Категория: {el.category}</p>
                        <p>Бренд: {el.brand}</p>
                        <FaHeart
                          style={{
                            color: heart ? "red" : "black",
                          }}
                          onClick={() => {
                            setHeart(true);
                            getLikeData();
                          }}
                          className="heart"
                        />
                      </div>
                      <div className="detail-price">
                        <p>{el.comment.slice(0, 450)}</p>

                        <h1>{el.price}сом</h1>
                      </div>
                      <div className="detail-btn">
                        <button>купить</button>
                        <button
                          onClick={() => {
                            getOrderData();
                            navigate("/basket");
                          }}
                        >
                          добавить в корзину
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="just-display">
                  <div className="detail-left">
                    <h1>Полное описание товара</h1>
                    <p>{click ? el.comment : el.comment.slice(0, 380)}</p>
                    <h1
                      style={{
                        display: click ? "none" : "block",
                      }}
                      onClick={() => {
                        setClick(!click);
                      }}
                    >
                      читать полностью
                    </h1>
                    <h1
                      style={{
                        display: click ? "block" : "none",
                      }}
                      onClick={() => {
                        setClick(!click);
                      }}
                    >
                      Закрыть
                    </h1>
                  </div>
                  <div className="just">
                    <img src={iconTwo} alt="" />
                    <img src={iconFor} alt="" />

                    <img src={iconThree} alt="" />
                    <img src={iconFive} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
