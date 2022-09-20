import React from "react";
import { List } from "./List";
import { Link } from "react-router-dom";
import DownloadLink from "react-download-link";
import * as images from "./images/tools";
import passport from "../components/doc/tools1.pdf";
import priceList from "../components/doc/price.docx";
export const Kart = (kart) => {
  return (
    <div className="kart">
      <div className="kart-wrapper">
        <Link to={`/Item/${kart._id}`}>
          <img src={images[kart.imgsrc]} alt="kart-1" />
          <h3>{kart.title}</h3>
          <h3>тип:&nbsp;{kart.name}</h3>

          {/*<h3>{kart.id}</h3>*/}
          <h4>{kart.subTitle}</h4>
          <div className="katalog__wrapper">
            <ul>
              {kart.specifications.map(function (item, index) {
                return <List item={item} key={"kart" + index} />;
              })}
            </ul>
            <div className="price">
              <span>
                Цена сНДС <br /> (без учета доставки)
              </span>
              <br />
              {kart.price}
            </div>
          </div>
        </Link>
        <div className="links">
          <DownloadLink
            label="Скачать паспорт"
            filename={passport}
            exportFile={() => "паспорт"}
          />

          <DownloadLink
            label="Скачать описание"
            filename={priceList}
            exportFile={() => "описание"}
          />
        </div>
      </div>
      <div className="com-offer">
        <Link to={`/Item/${kart._id}`}>ПОДРОБНО</Link>
      </div>
    </div>
  );
};
