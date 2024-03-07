import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="heroSubject">
            <p>К мероприятиям</p>
            <h1>Настоящая красота здесь!</h1>
          </div>
          <div className="heroBtns">
            <button>Свадьба</button>
            <button>МУЖУ</button>
            <button>жене</button>
            <button>партнеру</button>
            <button>коллекции</button>
            <button>редкость</button>
          </div>
          <div className="heroBlock">
            <div className="box-1">
              <h1>Кольца</h1>
            </div>
            <div className="box-2">
              <h1>серьги</h1>
            </div>
            <div className="box-3">
              <h1>подвески</h1>
            </div>
            <div className="box-4">
              <h1>запонки</h1>
            </div>
            <div className="box-5">
              <h1>браслеты</h1>
            </div>
            <div className="box-6">
              <h1>часы</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
