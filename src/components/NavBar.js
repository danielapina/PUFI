import React from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import "../styles/nav.css";

const NavBar = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div className="nav-bar">
      <h1 className="main-logo">Pufi</h1>
      <div className="main-nav">
        <div className="sub-nav border-right">
          <i className="bi bi-square icon-white"></i>
          <p>PUFI PUFF</p>
        </div>
        <div className="sub-nav border-right">
          <i className="bi bi-umbrella icon-white"></i>
          <p>PUFI RAIN</p>
        </div>
        <div className="sub-nav border-right">
          <i className="bi bi-bag icon-white"></i>
          <p>PUFI CART</p>
        </div>
        <div className="sub-nav">
          <i className="bi bi-alexa icon-white"></i>
          <p>PUFI NAP</p>
        </div>
      </div>

      <div className="nav-right">
        <p className="border-right">
          MI CUENTA <i className="bi bi-caret-down"></i>
        </p>
        <p>MI COMPRA</p>
        <Badge bg="warning" text="dark">{data}</Badge>
      </div>
    </div>
  );
};

export default NavBar;
