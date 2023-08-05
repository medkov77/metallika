import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { getBasketCount } from "../store/basket/basket.slice";
export const Nav = () => {
  const [active, setActive] = useState("home");
  const basketCount = useSelector(getBasketCount());
  const handleActive = (menuItem) => {
    setActive(menuItem);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <Link
            to="/"
            onClick={() => handleActive("home")}
            className={active === "home" ? "active" : ""}
          >
            <div className="mail-wrapper">
              <FaRegEnvelope className="icon" />
              <div>metallika-2017@mail.ru</div>
            </div>
          </Link>

          <Link
            to="/Katalog"
            onClick={() => handleActive("katalog")}
            className={active === "katalog" ? "active" : ""}
          >
            КАТАЛОГ
          </Link>

          <Link
            to={"/Contakts"}
            onClick={() => handleActive("contakts")}
            className={active === "contakts" ? "active" : ""}
          >
            КОНТАКТЫ
          </Link>

          <Link
            to={"/Basket"}
            className={`cart ${active === "basket" ? "active" : ""}`}
            onClick={() => handleActive("basket")}
          >
            <GiShoppingCart className="icon-cart" />
            <span className="cart-number">{basketCount}</span>
            КОРЗИНА
          </Link>

          <Link
            to="/"
            className={`nav__tel  ${active === "phone" ? "active" : ""} `}
            onClick={() => handleActive("phone")}
          >
            <FaPhone className="icon" />
            +7-495-777-27-27
          </Link>
        </div>
      </div>
    </nav>
  );
};
