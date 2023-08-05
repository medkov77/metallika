import React from "react";
import price from "../doc/price.docx";
import katalog from "../doc/tools1.pdf";
import { Link } from "react-router-dom";
import { ImFilePdf } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { FiFileText } from "react-icons/fi";
export default function Documents() {
  return (
    <div className="katalog__wrapper">
      <div className="passport">
        <Link to={katalog} target="_blank" download>
          <ImFilePdf />
          Каталог
        </Link>
      </div>
      <div className="passport">
        <Link to={katalog} target="_blank" download>
          <CgNotes />
          Скачать описание
        </Link>
      </div>
      <div className="price-list">
        <a href={price}>
          <FiFileText />
          Скачать Прайс-лист
        </a>
      </div>
    </div>
  );
}
