import React from "react";

const ProductCard = ({ id, image, name, price }) => {
  // const { data: user } = useUser();
  return (
    <div className="product-card">
      <div className="product-card__img-container">
        <img src={image} alt={name} className="product-card__img" />
      </div>
      <div className="product-card__info">
        <div className="product-card__name">{name}</div>
        <div className="product-card__price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
