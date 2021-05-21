import React from "react";

const CartItem = ({ dispatch, product, decrease, increase, amount, id }) => (
  <tr className="table__row">
    <td className="table__data">
      <img style={{ width: "70px" }} alt="product" src={product.image} />
    </td>
    <td className="table__data">
      <div className="counter">
        <div
          className="counter__btn"
          onClick={
            () => dispatch(decrease(id))
            // dispatch("inc")
          }
        >
          -
        </div>
        <div className="counter__number">{amount}</div>
        <div className="counter__btn" onClick={() => increase(id)}>
          +
        </div>
      </div>
    </td>
    <td className="table__data">$ {product.price} </td>
    <td className="table__data">
      <button>Remove</button>
    </td>
  </tr>
);

export default CartItem;
