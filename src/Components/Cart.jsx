import React from "react";
import CartProduct from "./CartProduct";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  resetCartItems,
  resetTotal,
} from "../Actions/totalActions";
const shortid = require("shortid");

export default function Cart() {
  const total = useSelector((state) => state.total);
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => {
            return <CartProduct product={product} />;
          })
        ) : (
          <p>cart is empty</p>
        )}
        <h5>Total: {total}</h5>
        <button
          onClick={() => {
            alert("You have purchased a total of: " + total);
            dispatch(resetCartItems());
            dispatch(resetTotal());
          }}
        >
          checkout
        </button>
      </>
    </div>
  );
}
