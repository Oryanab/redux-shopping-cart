import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeProductsFromCart,
  addProductsQuantity,
} from "../Actions/totalActions";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <>
        <h4>{product.name} x 1</h4>

        <h5>Price: {product.price}</h5>

        <button
          onClick={(e) => {
            dispatch(removeProductsFromCart(product));
            dispatch(decrement(product.price));
            dispatch(addProductsQuantity(product));
          }}
          id={product.name}
        >
          remove
        </button>
      </>
    </div>
  );
}
