import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "reactfire";
import products from "../../data";
import Total from "./Total";
import {
  decrease,
  increase,
  clearCart,
  remove,
  getTotals,
  toggleAmount,
  getCartItems,
} from "../../redux/actions";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();

  // const { data: user } = useUser();

  const cartItems = useSelector((state) => {
    return state.cart;
  });

  // useEffect(() => {
  //   dispatch(getCartItems(user.uid));
  // }, [user, dispatch]);

  // console.log("user ", user.uid);
  // useEffect(() => {
  //   dispatch(fetchProduct(id));
  // }, [id, dispatch]);

  // const product = useSelector((state) => {
  //   return state.products[id];
  // });

  return (
    <div className="cart">
      <table className="table">
        <thead className="table__heading">
          <tr className="table__row">
            <th>Detalles</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ amount, id }) => (
            <CartItem amount={amount} id={id} />
          ))}
          {/* 
          <tr className="table__row">
            <td className="table__data">
              <img
                style={{ width: "70px" }}
                alt="product"
                src={products[0].image}
              />
            </td>
            <td className="table__data">
              <div className="counter">
                <div
                  className="counter__btn"
                  onClick={() => console.log("decrease")}
                >
                  -
                </div>
                <div className="counter__number">{products[0].cantidad}</div>
                <div
                  className="counter__btn"
                  onClick={() => console.log("increase")}
                >
                  +
                </div>
              </div>
            </td>
            <td className="table__data">$ {products[0].price} </td>
            <td className="table__data">
              <button>Remove</button>
            </td>
          </tr> */}
        </tbody>
      </table>
      <Total />
    </div>
  );
};

export default Cart;
