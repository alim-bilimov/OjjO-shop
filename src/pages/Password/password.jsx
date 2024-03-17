import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseMainContext } from "../../context/MainContext";

const Password = () => {
  const [userName, setUserName] = useState("ojjoShop");
  const [password, setPassword] = useState("ojjo");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(3);
  const [time, setTime] = useState(15);
  const [red, setRed] = useState(false);
  const [color, setColor] = useState(false);
  const { block, setBlock } = UseMainContext();

  const naviget = useNavigate();

  function getDostup() {
    let localiz = JSON.parse(localStorage.getItem("locals")) || [];
    if (localiz.length > 0) {
      localiz[0] = true;
    } else {
      localiz.push(true);
    }
    localStorage.setItem("locals", JSON.stringify(localiz));
  }

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
  }, []);

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
              У вас есть {count} попытки
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
                  return naviget("/admin"), getDostup();
                } else if (name == "" && number == "") {
                  return alert("напишите имя и пароль !!!");
                } else if (name !== userName && number !== password) {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                  return alert("неверный логин и пароль !!!");
                } else if (name !== userName && number == password) {
                  return setRed(true);
                } else if (name == userName && number !== password) {
                  return setColor(true);
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
