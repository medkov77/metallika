import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  getBasket,
  deleteItem,
  getTotalPrice,
} from "../../store/basket/basket.slice";
import { useSelector, useDispatch } from "react-redux";
import BasketContent from "./basketContent";
const ref = React.createRef();

export default function Basket(props) {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice());
  const basket = useSelector(getBasket());
  const handleDelelte = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <div className="container" ref={ref}>
      <div className="final-basket">
        <h3>Корзина товаров</h3>
        <table id="basket">
          <thead className="head">
            <tr>
              <td></td>
              <td>Наименование</td>
              <td>Цена</td>
              <td>Количество</td>
              <td>Стоимость</td>
              <td>Удалить</td>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <BasketContent
                key={item._id}
                item={item}
                onDelete={handleDelelte}
              />
            ))}
          </tbody>
        </table>

        <div className="total">
          <div className="total-price">
            <div className="summa-wrapper">
              <div className="summa">{totalPrice} p</div>
              <div className="nds">С учетом НДС (20%)</div>
            </div>

            <NavLink to="/PDF">
              <button className="to-basket">Сформировать КП</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
