import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, signInWithGoogle } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const naviget = useNavigate();

  async function handleLoginSumbit() {
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div id="register">
      <div className="container">
        <div className="register">
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
              <h2>Войти в аккаунт</h2>
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
            <button onClick={handleLoginSumbit}>войти</button>
            <div className="googleBox">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
                className="googleBtn"
                onClick={() => signInWithGoogle()}
              >
                <img
                  className="googleImg"
                  src="https://freepngimg.com/save/153886-logo-google-hq-image-free/1261x1280"
                  alt="logo"
                />
                войти через гугл
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
