import React, { useRef } from "react";
import logo from "./images/logo.png";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";
import { useSelector } from "react-redux";
import { getBasket, getTotalPrice } from "../store/basket/basket.slice";
import * as images from "../components/images/tools/";
export default function PdfPrint(props) {
    const basket = useSelector(getBasket());
    const totalPrice = useSelector(getTotalPrice());
    const pdfRef = useRef(null);
    let Data = new Date();
    let month = Number(Data.getMonth()) + 1;
    let day = Data.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    const pdf = new jsPDF({
        mardgin: 1,
        orientation: "portrait",
        unit: "mm",
        format: "a4",
    });
    function print() {
        const opt = {
            margin: 0,
            filename: "kp.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                x: 0,
                y: 0,
                unit: "mm",
                format: "a4",
                orientation: "portrait",
            },
        };

        if (pdf) {
            domtoimage.toPng(pdfRef.current).then(imgData => {
                pdf.addImage(imgData, "JPG", 10, 10);
                pdf.save("metallika.pdf");
            });
        }
    }
    return (
        <div className="pdf-container">
            <div className="pdf-wrapper " id="divToOfferInfo" ref={pdfRef}>
                <div className="pdf-head">
                    <div className="pdf-mail">metallika-2017@mail.ru</div>
                    <div className="pdf-mail">Тел.+7-495-777-27-27</div>
                </div>
                <h4>ООО «МЕТАЛЛИКА»</h4>

                <div className="pdf__head">
                    <img src={logo} alt="logo" className="pdf-logo" />
                    <div className="head-text">
                        <p>
                            ИНН 3305796826 КПП 330501001 ОГРН 1173328002605
                            р/счет: 40702810011410000500 в Московском филиале
                            ПАО «Восточный экспресс банк», к/счет:
                            30101810945250000682, БИК: 044525682, Почтовый
                            адрес: 601902, Россия, Владимирская область, г.
                            Ковров, ул.Гагарина, 10-1.
                        </p>
                    </div>
                </div>

                <h4>
                    Коммерческое предложение от{" "}
                    {day + "." + month + "." + Data.getFullYear() + "г."}
                </h4>
                <table className="pdf-table">
                    <thead className="head">
                        <tr>
                            <td>№</td>
                            <td></td>
                            <td>Наименование</td>
                            <td>Цена</td>
                            <td>Кол.</td>
                            <td>Стоимость</td>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map(function (item, index) {
                            return (
                                <tr className="basket__item" key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={images[item.imgsrc]}
                                            alt="pdfimage"
                                        />
                                    </td>

                                    <td className="buy__title">
                                        {item.title}
                                        <br />
                                        <span>
                                            Артикул для заказа {item.articul}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="price">
                                            {item.price}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="count">
                                            {item.count}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="subtotal">
                                            {parseInt(
                                                item.price.replace(/\s/g, "")
                                            ) * item.count}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="summa-wrapper">
                    <div className="all">ИТОГО:&#160;</div>

                    <div className="summa">{totalPrice} p</div>
                    <div className="nds">С учетом НДС (20%)</div>
                </div>
            </div>

            <button className="to-basket" onClick={print}>
                Скачать
            </button>
        </div>
    );
}
// function print() {
//     const input = document.getElementById("divToOfferInfo");
//     const pdf = new jsPDF({
//         mardgin: 1,
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//     });
//     const opt = {
//         margin: 0,
//         filename: "kp.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: {
//             x: 0,
//             y: 0,
//             unit: "mm",
//             format: "a4",
//             orientation: "portrait",
//         },
//     };

//     if (pdf) {
//         domtoimage.toPng(input).then(imgData => {
//             pdf.addImage(imgData, "JPG", 10, 10);
//             pdf.save("metallika.pdf");
//         });
//     }
// }
