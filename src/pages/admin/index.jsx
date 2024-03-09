import React, { useState } from "react";
import { UseMainContext } from "../../context/MainContext";

const Admin = () => {
  const { addInputChange } = UseMainContext();
  const [values, setValues] = useState({
    textName: "",
    price: "",
    comment: "",
    brand: "",
    img: "",
  });

  function getLableInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
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
                  onChange={getLableInput}
                  type="text"
                  placeholder="nameURL"
                  name="textName"
                />
                <input
                  onChange={getLableInput}
                  type="number"
                  placeholder="priceURL"
                  name="price"
                />
                <input
                  onChange={getLableInput}
                  type="text"
                  placeholder="commentURL"
                  name="comment"
                />
                <input
                  onChange={getLableInput}
                  type="text"
                  placeholder="brandURL"
                  name="brand"
                />
                <input
                  onChange={getLableInput}
                  type="text"
                  placeholder="imgURL"
                  name="img"
                />
              </div>
              <div className="admin-right">
                <input type="text" placeholder="priceSale" />
                <div className="admin-btns">
                  <select name="" id="">
                    <option value="">Категория</option>
                    <option value="">Кольца</option>
                    <option value="">серьги</option>
                    <option value="">Подвески</option>
                    <option value="">Часы</option>
                    <option value="">Браслеты</option>
                  </select>
                  <button
                    onClick={() => {
                      addInputChange(values);
                    }}
                  >
                    Add
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

export default Admin;