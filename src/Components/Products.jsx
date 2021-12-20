import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products);
  return (
    <>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </>
  );
}
