import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MySlider from "../components/Slider";
import Triggers from "../components/Triggers";
import { useToolQuery } from "../store/tools/tools.api";
import { useOptionsQuery } from "../store/options/options.api";
export const Item = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = useToolQuery(id);
  const { data: options, isLoading } = useOptionsQuery();
  console.log(options);
  return isFetching || isLoading ? (
    <p>...Loaging</p>
  ) : (
    <section className="shop">
      <div className="container">
        <h3>
          {data.title} {data.name}
        </h3>
        <div className="subtitle-row">
          <div className="subtitle">
            Артикул для заказа&nbsp;{data.articul} <br /> Цена сНДС (без учета
            доставки)&nbsp;{data.price}
          </div>
        </div>
        <div className="shop__item">
          <div className="sliders">
            <MySlider slider={data.slider} />
          </div>
          <div className="text">
            <p>{data.discription}</p>

            <p>
              <strong>
                Приспособление &nbsp;{data.id}&nbsp; предназначено для патронов
                с посадочным конусом &nbsp;{data.cone}.
              </strong>
            </p>

            <p>
              Приспособление поставляется упакованным в пакет и картонную
              коробку
            </p>
            <p>
              Доставка до потребителя осуществляется курьером, транспортной
              компанией либо самовывозом со склада изготовителя.
            </p>
            <p>Масса приспособления &nbsp;{data.massa}&nbsp;кг</p>
            <div className="shop__price">
              <p> СКИДКА ДИЛЕРАМ -до 30 %</p>
              <p>ПРИ ПРИОБРЕТЕНИИ ОТ 3 -х шт - скидка</p>
              <p>ПРИ комплексных поставках цена обсуждается отдельно</p>
            </div>
          </div>
        </div>
        <Triggers data={data} options={options} />
      </div>
    </section>
  );
};
