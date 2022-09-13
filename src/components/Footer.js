import React from "react";
import "../styles/Footer.css";
import garantia from "../components/assets/garantia.png";

const Footer = () => {
  return (
    <div className="footer border-top">
      <div className="container-footer">
        <div>
          <h4 className="logo-footer">Pufi</h4>
        </div>
        <div className="footer-right-border">
          <p>PUFI RAIN</p>
          <p>PUFI PUFF</p>
          <p>PUFI CART</p>
          <p>PUFI NAP</p>
        </div>
        <div className="footer-right-border">
          <p>CONTACTO</p>
          <p>AYUDA</p>
          <p>CÓMO COMPRAR</p>
          <p>TÉRMINOS & CONDICIONES</p>
        </div>
        <div className="footer-right-border">
          <p>COMPRA 100% SEGURA</p>
          <img src={garantia} alt="garantia" />
        </div>
        <div className="follow-sm">
          <p>SIGUENOS EN </p>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-instagram"></i>
        </div>
      </div>
      <hr />
      <div>
        <p className="copyright">
          PUFI Copyright 2017 - Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
