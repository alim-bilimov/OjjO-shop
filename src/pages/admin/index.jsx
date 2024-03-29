import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { addInputChange, block, setBlock, dostup } = UseMainContext();
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
    brandy: "",
    count: 1,
  });

  function getLableInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function ExitAdmin() {
    let local = JSON.parse(localStorage.getItem("locals")) || [];
    local[0] = false;
    localStorage.setItem("locals", JSON.stringify(local));
  }

  return (
    <div>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <button
              onClick={() => {
                ExitAdmin();
                naviget("/password");
              }}
              className="btn-exit"
            >
              Выйти
            </button>
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
              <div className="admin-box">
                <div className="admin-right">
                  <input type="text" placeholder="Скидка" />
                  <div className="admin-btns">
                    <select onChange={getLableInput} name="category" id="">
                      <option value="">Категория</option>
                      <option value={getLableInput}>Кольца</option>
                      <option value={getLableInput}>Серьги</option>
                      <option value={getLableInput}>Подвески</option>
                      <option value={getLableInput}>Часы</option>
                      <option value={getLableInput}>Браслеты</option>
                      <option value={getLableInput}>Запонки</option>
                    </select>
                  </div>
                  <div className="admin-btns">
                    <select onChange={getLableInput} name="for" id="">
                      <option value="">Для Кого</option>
                      <option value={getLableInput}>Мужа</option>
                      <option value={getLableInput}>Жены</option>
                    </select>
                  </div>
                  <div className="admin-btns">
                    <select onChange={getLableInput} name="season" id="">
                      <option value="">Сезон</option>
                      <option value={getLableInput}>Зимние Украшения</option>
                      <option value={getLableInput}>Летние Украшения</option>
                    </select>
                  </div>
                  <div className="admin-btns">
                    <select onChange={getLableInput} name="brandy" id="">
                      <option value="">Бренды</option>
                      <option value={getLableInput}>Rolex</option>
                      <option value={getLableInput}>Maria & Angument</option>
                      <option value={getLableInput}>Richard & Milli</option>
                      <option value={getLableInput}>Patek Philippe</option>
                      <option value={getLableInput}>Baselworld</option>
                    </select>
                  </div>
                  <button
                    onClick={() => {
                      addInputChange(values);
                      naviget("/catalog");
                      if (values === "") {
                        alert("заполните все строки !!!");
                      }
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
