import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  const product = useSelector((state) => {
    return state.products[id];
  });

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, price, image } = product;
  console.log("image ", image);

  return (
    <div className="product-details">
      <div className="product-details__img">
        <img src={image} alt="" />
      </div>
      <div className="product-details__info">
        <h2 className="heading__secondary">{name}</h2>
        <p>{price}</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>

        <button className="product-details__btn btn">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetails;
