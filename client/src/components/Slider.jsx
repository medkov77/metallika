import React from "react";
import Slider from "react-slick";
import * as images from "../components/images/tools/";
import next from "../components/images/shop/next.svg";
import prev from "../components/images/shop/prev.svg";
export default function MySlider({ slider }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: 0,
          bottom: "60%",
        }}
        onClick={onClick}
      >
        <img src={next} alt="next" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: 0,
          bottom: "60%",
        }}
        onClick={onClick}
      >
        <img src={prev} alt="next" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",

            marginTop: "1rem",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {slider.map((imgSrc) => (
        <img
          src={images[imgSrc]}
          key={imgSrc}
          alt="slider"
          className="slider-image"
        />
      ))}
    </Slider>
  );
}
