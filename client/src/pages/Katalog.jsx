import React, { useRef } from "react";
import { Kart } from "../components/Kart";
import { FaArrowCircleUp } from "react-icons/fa";
import { useToolsQuery } from "../store/tools/tools.api";

const Katalog = () => {
  const { data, isLoading } = useToolsQuery();

  const katalogRef = useRef(null);
  const scroll = () => {
    katalogRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return isLoading ? (
    "...loading"
  ) : (
    <div>
      <section className="katalog" id="katalog" ref={katalogRef}>
        <div className="uparrow" onClick={scroll}>
          <FaArrowCircleUp />
        </div>

        <div className="container">
          <h2>Каталог продукции</h2>
          <div className="karts">
            {data.map((kart) => (
              <Kart {...kart} key={kart._id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Katalog;
