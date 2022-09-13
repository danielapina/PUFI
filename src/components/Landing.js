import React from "react";
import { addArticle } from "../state/actions";
import { useDispatch } from "react-redux";

import MainCarousel from "./MainCarousel";
import Products from "./Products";
import SocialMedia from "./SocialMedia";

import "../styles/Landing.css";

const Landing = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addArticle());
  };
  return (
    <>
      <MainCarousel handleAdd={handleAdd} />
      <Products handleAdd={handleAdd} />
      <SocialMedia />
    </>
  );
};

export default Landing;
