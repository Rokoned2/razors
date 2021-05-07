import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={image} alt={name} className="product-card__card" />
      </div>
      <div className="product-card__name">{name}</div>
      <div className="product-card__price">{price}</div>
    </div>
  );
};

export default ProductCard;
