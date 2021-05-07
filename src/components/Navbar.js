import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list-items">
        <li className="navbar__item">Inicio</li>
        <li className="navbar__item">Productos</li>
        <li className="navbar__item">Sobre</li>
      </ul>
      <div className="navbar__logo">Razors</div>
      <ul className="navbar__list-items">
        <li className="navbar__item">Ingresar</li>
        <li className="navbar__item">Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
