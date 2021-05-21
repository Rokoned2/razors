import React from "react";

const Total = () => {
  return (
    <div className="cart__total">
      <h2 className="cart__total-title">Precio Total</h2>
      <div className="cart__total-general">
        <div className="cart__total-items">Items 3</div>
        <div className="cart__total-price">S/453.98</div>
      </div>
      <div className="cart__total-general">
        <div className="cart__total-items">COSTO TOTAL</div>
        <div className="cart__total-price">S/462.98</div>
      </div>
      <div className="btn">Comprar</div>
    </div>
  );
};

export default Total;
