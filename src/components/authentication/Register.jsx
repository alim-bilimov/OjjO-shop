import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const naviget = useNavigate();

  async function handleSumbit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div id="password">
      <div className="container">
        <div className="password">
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
          <div className="passwordBlock">
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
