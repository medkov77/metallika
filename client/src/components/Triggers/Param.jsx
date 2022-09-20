import React from "react";
import { FiCheckSquare } from "react-icons/fi";
export default function Param(props) {
  return (
    <div>
      <ul>
        {props.katalog.specifications.map(function (item, index) {
          return (
            <div className="param-inner" key={"param" + index}>
              <FiCheckSquare className="check" />
              <li>{item}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
