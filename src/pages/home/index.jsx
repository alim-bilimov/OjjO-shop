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
import { Link } from "react-router-dom";
const Home = () => {
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
                <img src={imgOne} alt="" />
              </div>
              <div>
                <img src={imgTwo} alt="" />
              </div>
              <div>
                <img src={imgThree} alt="" />
              </div>
              <div>
                <img src={imgFore} alt="" />
              </div>
              <div>
                <img src={imgfive} alt="" />
              </div>
              <div>
                <img src={imgSix} alt="" />
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
            <button>читать наш блог</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
