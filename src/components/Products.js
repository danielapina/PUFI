import React from "react";

import umbrella from "./assets/umbrella-svg.png";
import puff from "./assets/puf-svg.png";
import bag from "./assets/bag-svg.png";
import pillow from "./assets/pillow-svg.png";

import "../styles/Products.css";

const Products = ({ handleAdd }) => {
  return (
    <>
      <div className="landing-squares">
        <div className="banner1 banner">
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </div>
        <div className="side-info">
          <img src={umbrella} alt="umbrella-svg" className="svg" />
          <h3>Pufi RAIN</h3>
          <hr />
          <p>Descripción del producto.Este es un texto simulado</p>
          <a> &gt; VER MAS</a>
        </div>
      </div>
      <div className="landing-squares">
        <div className="side-info">
          <img src={puff} alt="puff-svg" className="svg" />
          <h3>Pufi PUFF</h3>
          <hr />
          <p>Descripción del producto.Este es un texto simulado</p>
          <a> &gt; VER MAS</a>
        </div>
        <div className="banner2 banner">
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </div>
      </div>
      <div className="landing-squares">
        <div className="banner3 banner">
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </div>
        <div className="side-info">
          <img src={bag} alt="bag-svg" className="svg" />
          <h3>Pufi CART</h3>
          <hr />
          <p>Descripción del producto.Este es un texto simulado</p>
          <a> &gt; VER MAS</a>
        </div>
      </div>
      <div className="landing-squares">
        <div className="side-info">
          <img src={pillow} alt="pillow-svg" className="svg" />
          <h3>Pufi NAP</h3>
          <hr />
          <p>Descripción del producto.Este es un texto simulado</p>
          <a> &gt; VER MAS</a>
        </div>
        <div className="banner4 banner">
          <button onClick={handleAdd} className="btn-shop">
            SHOP
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
