import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

const Register = () => {
  const { register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [block, setBlock] = useState(false);
  const [par, setPar] = useState(false);

  // beksultan

  function blockData() {
    if (!!auth.currentUser) {
      return setBlock("вы уеспешно зарегистрироавались");
    } else {
      return setPar("вы еще не зарегистрироавались");
    }
  }
  useEffect(() => {
    blockData();
  }, [block, par]);

  const naviget = useNavigate();

  async function handleSumbit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div id="register">
      <div className="container">
        <div className="register">
          <div className="block">
            <div className="blockOne">
              <h1 style={{}}>{block}</h1>
            </div>
            <div
              style={{
                display: par ? "block" : "none",
              }}
              className="blockTwo"
            >
              <h1 style={{}}>{par}</h1>
            </div>
          </div>
          <div className="box">
            <div className="boxx">
              <p
                className="pp"
                onClick={() => {
                  naviget("/login");
                }}
              >
                Вход
              </p>
              <p
                onClick={() => {
                  naviget("/register");
                }}
                className="p"
              >
                Регистрация
              </p>
            </div>
            <div className="ppp">
              <h2>Создать аккаунт</h2>
            </div>
          </div>
          <div className="registerBlock">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Имя пользователя"
              className="input"
              name="email"
              type="email"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="input"
              name="password"
              type="password"
            />
            <button onClick={handleSumbit}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
