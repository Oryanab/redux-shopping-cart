import React from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/totalActions";

function App() {
  const total = useSelector((state) => state.total);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="main-div">
      <h1>Shopping List</h1>
      <hr />
      <h3>Products</h3>
      <Products />
      <hr />
      <h3>Shopping Cart</h3>
      <Cart />
    </div>
  );
}

export default App;
