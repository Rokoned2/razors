import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { fetchFeatProducts } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatProducts());
  }, [dispatch]);

  const featProducts = useSelector((state) =>
    Object.values(state.feat_products)
  );

  if (!featProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section featured-products">
      <h2 className="heading-secondary">Featured Products</h2>
      <div className="featured-products__list">
        {featProducts.map(({ id, name, price, image }) => {
          return (
            <Link to={`/productos/${id}`} key={id}>
              <ProductCard name={name} price={price} image={image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
