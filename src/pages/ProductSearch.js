import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";

const ProductSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => Object.values(state.products));

  return (
    <div className="product-search section">
      <div className="heading-secondary text-center">Nuestros Productos</div>
      <div className="product-search__list">
        {products.map(({ id, name, price, image }) => (
          <Link to={`/productos/${id}`} key={id}>
            <ProductCard key={id} name={name} price={price} image={image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
