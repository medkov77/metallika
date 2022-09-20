import React, { useEffect, useRef } from "react";
import Buy from "./Triggers/Buy";
import Documents from "./Triggers/Documents";
import Param from "./Triggers/Param";

export default function Triggers({ data, options }) {
  const check = useRef(null);
  useEffect(() => {
    check.current.setAttribute("checked", true);
  }, []);
  return (
    <div className="trigers">
      <input
        type="radio"
        name="tabs"
        id="check1"
        className="triger"
        ref={check}
      />
      <label htmlFor="check1" className="triger tab">
        Купить
      </label>

      <input type="radio" name="tabs" id="check2" className="triger" />
      <label htmlFor="check2" className="triger tab">
        Характеристики
      </label>

      <input type="radio" name="tabs" id="check3" className="triger tab" />
      <label htmlFor="check3" className="triger">
        Документация
      </label>

      <div id="tab1">
        <Buy data={data} options={options} />
      </div>
      <div id="tab2">
        <Param katalog={data} />
      </div>
      <div id="tab3">
        <Documents />
      </div>
    </div>
  );
}
