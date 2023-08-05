import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__text">
          <h1>ООО Металлика</h1>
          <p className="subtitle">
            Монтажно-сборочные устройства для сборки и монтажа металлорежущего
            инструмента, патронов, оправок, вспомогательная оснастка для рабочих
            мест от производителя.{" "}
          </p>
          <div className="offer">
            <NavLink to="/Basket" className="btn pulse" href="#">
              ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
            </NavLink>
            <p>Положите товар в корзину и</p>
            <span>Получите КП прямо на сайте!</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
