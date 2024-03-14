import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [userName, setUserName] = useState("ojjoShop");
  const [password, setPassword] = useState("maksatovich02");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(3);
  const [time, setTime] = useState(15);
  const [red, setRed] = useState(false);
  const [color, setColor] = useState(false);

  const naviget = useNavigate();

  //beksultan

  function callTimes() {
    if (count == 0) {
      if (time > 0) {
        setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      } else {
        setCount(3);
        setName("");
        setNumber("");
        setTime(15);
      }
    }
  }

  useEffect(() => {
    callTimes();
  });

  return (
    <div id="password">
      <div className="container">
        <div className="password">
          <div className="inputs">
            <h1
              style={{
                display: count == 0 ? "none" : "block",
              }}
            >
              У вас есть {count} попытка
            </h1>
            <h1
              style={{
                display: count <= 0 ? "block" : "none",
              }}
            >
              Вы заблокированы на {time}s
            </h1>
            <input
              style={{
                border: red ? "solid 2px red" : "",
              }}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Имя пользователя"
              value={count == 0 ? "" : name}
            />

            <input
              style={{
                border: color ? "solid 2px red" : "",
              }}
              onChange={(e) => setNumber(e.target.value)}
              type="password"
              placeholder="Пароль"
              value={count == 0 ? "" : number}
            />

            <button
              onClick={() => {
                if (name == userName && number == password) {
                  return naviget("/admin");
                } else if (name == "" && number == "") {
                  return alert("напишите имя и пароль !!!");
                } else if (name !== userName) {
                  return setRed(true);
                } else if (number !== password) {
                  return setColor(true);
                } else if (name !== userName && number !== password) {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                  alert("неверный логин и пароль !!!");
                }
              }}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
