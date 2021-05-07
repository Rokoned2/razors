import React from "react";
import banner from "../images/mainBcg.jpeg";

const Header = () => {
  return (
    <div className="header">
      {/* <img src={banner} alt="alt" className="header__banner" /> */}
      <div className="header__banner-text">
        <h1>Espumea, afeita, crece</h1>
        <h2>Corta el ciclo</h2>
        <div className="btn">Comprar ahora</div>
      </div>
    </div>
  );
};

export default Header;
