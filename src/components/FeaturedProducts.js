import React from "react";
import ProductCard from "../components/ProductCard";
import Image1 from "../images/navajarazor.png";
import Image2 from "../images/maquinillagilletenaranja.png";
import Image3 from "../images/afeitadoraelectricapanasonic.png";
import Image4 from "../images/cuchilladeafeitar.png";

const products = [
  {
    name: "navaja razor",
    price: "7.99",
    image: Image1,
  },
  {
    name: "maquinilla gillete naranja",
    price: "7.99",
    image: Image2,
  },
  {
    name: "afeitadora eléctrica panasonic",
    price: "24.99",
    image: Image3,
  },

  {
    name: "cuchilla de afeitar",
    price: "7.99",
    image: Image4,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="section">
      <h2 className="heading__secondary">Featured Products</h2>
      <div className="featured__products">
        {products.map(({ name, price, image }) => (
          <ProductCard name={name} price={price} image={image} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
