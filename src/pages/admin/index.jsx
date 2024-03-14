import React, { useState } from "react";
import { UseMainContext } from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { addInputChange } = UseMainContext();
  const naviget = useNavigate();
  const [values, setValues] = useState({
    textName: "",
    price: "",
    comment: "",
    brand: "",
    img: "",
    category: "",
    for: "",
    season: "",
    count: 1,
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
                  placeholder="Названия"
                  name="textName"
                />
                <input
                  onChange={getLableInput}
                  type="number"
                  placeholder="Цена"
                  name="price"
                />
                <input
                  onChange={getLableInput}
                  type="text"
                  placeholder="Описания"
                  name="comment"
                />
                <input
                  onChange={getLableInput}
                  type="text"
                  placeholder="Бренды"
                  name="brand"
                />
                <input
                  onChange={getLableInput}
                  type="text"
                  placeholder="Фото"
                  name="img"
                />
              </div>
              <div className="admin-right">
                <input type="text" placeholder="Скидка" />
                <div className="admin-btns">
                  <select onChange={getLableInput} name="category" id="">
                    <option value="">Категория</option>
                    <option value={getLableInput}>Кольца</option>
                    <option value={getLableInput}>серьги</option>
                    <option value={getLableInput}>Подвески</option>
                    <option value={getLableInput}>Часы</option>
                    <option value={getLableInput}>Браслеты</option>
                  </select>
                  <div className="admin-btns">
                    <select onChange={getLableInput} name="for" id="">
                      <option value="">Для Кого</option>
                      <option value={getLableInput}>Для Мужчины</option>
                      <option value={getLableInput}>Для Женщины</option>
                    </select>
                  </div>
                  <div className="admin-btns">
                    <select onChange={getLableInput} name="season" id="">
                      <option value="">Сезон</option>
                      <option value={getLableInput}>Зимние Украшения</option>
                      <option value={getLableInput}>Летние Украшения</option>
                    </select>
                  </div>
                  <button
                    onClick={() => {
                      addInputChange(values);
                      naviget("/catalog");
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
