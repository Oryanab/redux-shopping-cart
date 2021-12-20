import React from "react";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeProductsQuantity,
  addProductsToCart,
} from "../Actions/totalActions";

export default function Product({ product }) {
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <>
        <h4>
          {product.name} x {product.quantity}
        </h4>

        <h5>Price: {product.price}</h5>

        <button
          onClick={() => {
            dispatch(increment(product.price));
            dispatch(removeProductsQuantity(product));
            dispatch(addProductsToCart(product, shortid.generate()));
          }}
          id={product.name}
        >
          add to cart
        </button>
      </>
    </div>
  );
}
