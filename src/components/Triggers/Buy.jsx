import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BayItem from "./bayItem";
import { useDispatch, useSelector } from "react-redux";
import { getBasket, addTobasket } from "../../store/basket/basket.slice";
export default function Buy({ data, options }) {
  const [accordionActive, setAccordionActive] = useState(false);
  const [total, setTotal] = useState(0);
  const optionsWithData = [...options, data].map((item) => ({
    ...item,
    count: 0,
  }));
  const dispatch = useDispatch();
  const basket = useSelector(getBasket());
  const handleCount = (id, count) => {
    optionsWithData.find((item) => item._id === id).count = count;
    setTotal(
      optionsWithData.reduce((sum, cur) => {
        return sum + parseInt(cur.price.replace(/\s/g, "")) * cur.count;
      }, 0)
    );
  };
  const handleToBasket = () => {
    optionsWithData.map((item) => {
      if (item.count !== 0 && basket.length === 0) {
        dispatch(addTobasket(item));
      }
      if (item.count !== 0 && basket.length !== 0) {
        if (basket.findIndex((tool) => tool._id === item._id) === -1) {
          dispatch(addTobasket(item));
        } else {
          console.log("уже в корзине");
        }
      }
    });
  };

  return (
    <div>
      <table id="basket">
        <thead className="head">
          <tr>
            <td></td>
            <td>Наименование</td>
            <td>Цена</td>
            <td>Количество</td>
            <td>Стоимость</td>
          </tr>
        </thead>
        <tbody>
          <BayItem katalog={data} onCount={handleCount} />
          <tr>
            <td></td>
            <td>
              <div
                className="accordion"
                onClick={() => setAccordionActive(!accordionActive)}
              >
                Дополнительные опции рекомендуем с данным товаром
                <span
                  className={
                    accordionActive
                      ? "accordion__marker active"
                      : "accordion__marker"
                  }
                ></span>
              </div>
            </td>
          </tr>

          {options.map(function (item) {
            return (
              accordionActive && (
                <BayItem
                  key={item._id}
                  katalog={item}
                  onCount={handleCount}
                ></BayItem>
              )
            );
          })}
        </tbody>
      </table>

      {total !== 0 && (
        <div className="total">
          <div className="total-price">
            <div className="summa-wrapper">
              <div className="summa">Сумма {total}</div>
              <div className="nds">С учетом НДС (20%)</div>
            </div>
            <button className="to-basket" onClick={handleToBasket}>
              В корзину
            </button>
            <NavLink to="/PDF">
              <button className="to-basket hidden" id="kp">
                Получить КП
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
