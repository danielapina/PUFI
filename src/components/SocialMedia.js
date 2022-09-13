import React from "react";
import insta from "./assets/instagram.png";

import Newsletter from "./NewsLetter";

const SocialMedia = () => {
  return (
    <div className="container margin">
      <p>INSTAGRAM</p>
      <h2>#ESPUFI</h2>
      <img src={insta} alt="instagram" />
      <Newsletter />
    </div>
  );
};

export default SocialMedia;
