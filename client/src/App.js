import React from "react";
import { Route, Routes } from "react-router-dom";
import { Item } from "./pages/Item";
import { Nav } from "./components/nav";
import Katalog from "./pages/Katalog";
import Basket from "./pages/basket/basket";
import PdfPrint from "./components/PdfPrint";
import Contakts from "./pages/Contakts";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path={"/"} exact element={<Header />} />
            <Route path={"/Katalog"} exact element={<Katalog />} />
            <Route path={"/Item/:id"} element={<Item />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path={"/PDF"} element={<PdfPrint />} />
            <Route path={"/Contakts"} element={<Contakts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
