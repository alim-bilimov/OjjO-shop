import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../context/MainContext";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { addInputChange, block, oneProduct, getChangeProduct, getOneProduct } =
    UseMainContext();
  const naviget = useNavigate();
  const [textName, setTextName] = useState("");
  const [price, setPrice] = useState("");
  const [comment, setComment] = useState("");
  const [brand, setBrand] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getChangeProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTextName(oneProduct.textName);
      setPrice(oneProduct.price);
      setComment(oneProduct.comment);
      setBrand(oneProduct.brand);
    }
  }, [oneProduct]);

  function handleInputChange() {
    let newObj = {
      textName: textName,
      price: price,
      comment: comment,
      brand: brand,
    };
    getOneProduct(id, newObj);
  }

  return (
    <div>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h1>Добавление Продукции:</h1>
            <div className="admin-all">
              <div className="admin-left">
                <input
                  onChange={(e) => setTextName(e.target.value)}
                  type="text"
                  placeholder="Названия"
                  name="textName"
                  value={textName}
                />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Цена"
                  name="price"
                  value={price}
                />
                <input
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Описания"
                  name="comment"
                  value={comment}
                />
                <input
                  onChange={(e) => setBrand(e.target.value)}
                  type="text"
                  placeholder="Бренды"
                  name="brand"
                  value={brand}
                />
                <input type="text" placeholder="Фото" name="img" />
              </div>
              <div className="admin-box">
                <div className="admin-right">
                  <input type="text" placeholder="Скидка" />

                  <button
                    onClick={() => {
                      handleInputChange();
                      naviget("/catalog");
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
