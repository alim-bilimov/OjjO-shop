import React from "react";
import logoTwo from "../../images/home.png";
import imgOne from "../../images/second-screen__category-item.png";
import imgTwo from "../../images/second-screen__category-item (1).png";
import imgThree from "../../images/second-screen__category-item (2).png";
import imgFore from "../../images/second-screen__category-item (3).png";
import imgfive from "../../images/second-screen__category-item (4).png";
import imgSix from "../../images/second-screen__category-item (5).png";
import blogItem from "../../images/blog__item.png";
import blogItemTwo from "../../images/blog__item (1).png";
import blogItemThree from "../../images/blog__item (2).png";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <div id="home">
        <div className="contaiener">
          <div className="home">
            <div className="home-div">
              <h1>Долго, дорого, богато!</h1>
              <Link to="/catalog">
                {" "}
                <button>каталог изделий </button>
              </Link>
            </div>
            <div className="div-one"></div>
            <div className="div-logo">
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
              <img src={logoTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="hero">
        <div className="container">
          <div className="hero">
            <div className="hero-text">
              <h5>К мероприятиям</h5>
              <h1>Настоящая красота здесь!</h1>
            </div>
            <div className="btn-hero">
              <button>Свадьба</button>
              <button>МУЖУ</button>
              <button>жене</button>
              <button>партнеру</button>
              <button>коллекции</button>
              <button>редкость</button>
            </div>
            <div className="display-all">
              <div>
                <Link to={"/ring"}>
                  <img src={imgOne} alt="" />
                </Link>
              </div>
              <div>
                <Link to={"/sergi"}>
                  <img src={imgTwo} alt="" />
                </Link>
              </div>
              <div>
                <Link to={"/podveski"}>
                  <img src={imgThree} alt="" />
                </Link>
              </div>
              <div>
                <Link to={"/zaponki"}>
                  <img src={imgFore} alt="" />
                </Link>
              </div>
              <div>
                <Link to={"/braslety"}>
                  <img src={imgfive} alt="" />
                </Link>
              </div>
              <div>
                <Link to={"/watch"}>
                  <img src={imgSix} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="my-salone">
        <div className="container">
          <div className="my-salone">
            <div className="salone-text">
              <h5>Не знаете, что выбрать?</h5>
              <h1>Посетите наши салоны в Бишкеке</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
                tortor vitae pellentesque egestas quam pulvinar. Pellentesque
                porttitor velit sit pellentesque. Suspendisse donec pretium id
                dignissim. Dignissim ultrices eget orci viverra. Egestas quis et
                ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem
                purus nisi libero viverra ipsum.
              </p>
              <button>наши салоны</button>
            </div>
          </div>
        </div>
      </div>
      <div id="utility">
        <div className="container">
          <div className="utility">
            <div className="utility-text">
              <h3>Полезные статьи</h3>
              <h1>Лучшие советы по подбору дорогих подарков</h1>
            </div>
            <div className="card">
              <img src={blogItem} alt="" />
              <img src={blogItemTwo} alt="" />
              <img src={blogItemThree} alt="" />
            </div>
            <button
              onClick={() => {
                Navigate("/exclusive");
              }}
            >
              читать наш блог
            </button>
          </div>
        </div>
      </div>

      <div id="about-we">
        <div className="container">
          <div className="about">
            <div className="about-text">
              <h3>О Нас</h3>
              <h1>Наши странички в instagram</h1>
            </div>
            <div className="about-all">
              <div className="about-left">
                <a href="https://www.instagram.com/alimch1kl/">
                  Instagram: @alimch1k
                </a>
                <h3>О Себе:</h3>
                <nav>
                  <li>fullstack-разработчик JS</li>
                  <li>Предприниматель</li>
                  <li>бизнесмен и стратег</li>
                  <li>Team Lead команды БКШЧ</li>
                </nav>
              </div>
              <div className="about-right">
                <a href="https://www.instagram.com/maksat0vich02/">
                  Instagram: @maksat0vich02
                </a>
                <h3>О Себе:</h3>
                <nav>
                  <li>JS: Senior developer</li>
                  <li>Программист с 5-6 летним опытом</li>
                  <li>Пишет на 3 языках программирования</li>
                  <li>Помощник Team Lead</li>
                  <li></li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
