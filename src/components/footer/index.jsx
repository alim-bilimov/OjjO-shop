import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer-div"></div>
            <div className="footer-all">
              <div className="footer-one">
                <h1>Полезные ссылки</h1>
                <nav>
                  <a href="#">Доставка</a>
                  <a href="#">Оплата </a>
                  <a href="#">Акции</a>
                  <a href="#">Политика конфиденциальности</a>
                </nav>
              </div>
              <div className="footer-one">
                <h1>оплата</h1>
                <nav>
                  <p>
                    Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                    elit. <br />
                    Possimus, ad?
                  </p>
                </nav>
                <div className="footer-img">
                  <img
                    src="https://media.licdn.com/dms/image/C4D0BAQHQQCFad4EpSQ/company-logo_200_200/0/1675943978852/bank_kyrgyzstan_logo?e=2147483647&v=beta&t=PBTjiyW6vD3mh3SmOUBBvWg4xsZmO0CUJqRQ7AVcUVY"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1758005126533439488/NR7MtP3__400x400.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="footer-one">
                <h1>контакты</h1>
                <div className="div-call">
                  <LuPhoneCall />
                  <a href="">+996 708 444 078</a>
                </div>
                <div className="div-call">
                  <LuPhoneCall />
                  <a href="">+996 708 444 078</a>
                </div>
                <div className="div-call">
                  <LuPhoneCall />
                  <a href="">+996 706 223 286</a>
                </div>
              </div>
              <div className="footer-one">
                <h1>социальные сети</h1>
                <div className="div">
                  <p className="footer-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    <br /> Magni expedita officia maxime autem omnis <br />{" "}
                    eaque placeat aspernatur obcaecati animi saepe.
                  </p>
                </div>

                <div className="sate">
                  <div>
                    <FaFacebookSquare
                      style={{ fontSize: "40px" }}
                      className="icons-fot"
                    />
                  </div>
                  <div>
                    <FaYoutube
                      style={{ fontSize: "40px" }}
                      className="icons-fot"
                    />
                  </div>
                  <div>
                    <FaInstagram
                      style={{ fontSize: "40px" }}
                      className="icons-fot"
                    />
                  </div>
                  <div>
                    <FaTelegram
                      style={{ fontSize: "40px" }}
                      className="icons-fot"
                    />
                  </div>
                  <div>
                    <FaGithub
                      style={{ fontSize: "40px" }}
                      className="icons-fot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
