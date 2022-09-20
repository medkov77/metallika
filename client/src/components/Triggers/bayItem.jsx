import React, { useState, useEffect } from "react";
import * as images from "../images/tools/";
const BayItem = (props) => {
  const [count, setCount] = useState(0);
  const handleChange = () => {};
  useEffect(() => {
    props.onCount(props.katalog._id, count);
  }, [count, props]);

  let price = parseInt(props.katalog.price.replace(/\s/g, ""));
  return (
    <tr className="basket__item">
      <td>
        <img src={images[props.katalog.imgsrc]} alt="myimage" />
      </td>
      <td>
        <div className="buy__title">
          {props.katalog.title}
          <br />
          <span>Артикул для заказа {props.katalog.articul} </span>
        </div>
      </td>
      <td>
        <div className="price" data-price={props.katalog.price}>
          {props.katalog.price}
        </div>
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
            onChange={handleChange}
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
        <div className="subtotal">{price * count}</div>
      </td>
    </tr>
  );
};
export default BayItem;
