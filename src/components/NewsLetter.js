import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "../styles/NewsLetter.css";

const NewsLetter = () => {
  const [state, handleSubmit] = useForm("xyyvkpky");
  if (state.succeeded) {
    return <p>Gracias por unirte Espufi!</p>;
  }
  return (
    <div className="container">
      <div className="container">
        <p>NEWSLETTER</p>
        <h1>SUSCRIBETE</h1>
        <p>Y enterate de todas las novedades</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingresa tu email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
