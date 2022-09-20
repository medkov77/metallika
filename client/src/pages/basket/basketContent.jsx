import React from "react";
import { useState } from "react";
import { abdateBasket } from "../../store/basket/basket.slice";
import { useDispatch } from "react-redux";
import * as images from "../../components/images/tools";
import { useEffect } from "react";

const BasketContent = ({ item, onDelete }) => {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(abdateBasket(item._id, count));
  }, [count, dispatch, item._id]);
  return (
    <tr className="basket__item" key={item._id}>
      <td>
        <img src={images[item.imgsrc]} alt="kartimage" />
      </td>

      <td className="buy__title">
        {item.title}
        <br />
        <span>Артикул для заказа {item.articul}</span>
      </td>
      <td>
        <div className="price">{item.price}</div>
      </td>
      <td>
        <div className="count">
          <button
            className="minus"
            onClick={() => {
              count > 0 ? setCount(count - 1) : setCount(count);
            }}
          >
            -
          </button>
          <input
            className="input"
            type="number"
            value={count}
            onChange={() => {}}
          />
          <button
            className="plus"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <div className="subtotal">
          {parseInt(item.price.replace(/\s/g, "")) * count}
        </div>
      </td>
      <td className="delite__wrapper">
        <button
          className="delite"
          onClick={() => {
            onDelete(item._id);
          }}
        >
          &#10006;
        </button>
      </td>
    </tr>
  );
};

export default BasketContent;
