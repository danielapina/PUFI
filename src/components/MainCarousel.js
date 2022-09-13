import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/slide1.jpeg";
import slide2 from "./assets/slide22.jpg";
import slide3 from "./assets/slide33.jpg";

import "../styles/MainCarousel.css";

const MainCarousel = ({ handleAdd }) => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 h" src={slide1} alt="First" />
        <Carousel.Caption>
          <h1 className="slogan">
            ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL
          </h1>
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 h" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="slogan">
            ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL
          </h1>
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img className="d-block w-100 h" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h1 className="slogan">
            ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL
          </h1>
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
