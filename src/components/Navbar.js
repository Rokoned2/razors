import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__nav">
        <ul className="navbar__list-items">
          <li className="navbar__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="navbar__item">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="navbar__item">
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
        <div className="navbar__logo">
          <Link to="/" className="heading-secondary">
            Razors
          </Link>
        </div>
        <ul className="navbar__list-items">
          <li className="navbar__item">
            <Link to="/login">Ingresar</Link>
          </li>
          <li className="navbar__item">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
