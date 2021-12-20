import { combineReducers } from "redux";
import totalPriceReducer from "./priceTotal";
import shopProductsReducer from "./shopProducts";
import totalCartProductsReducer from "./cartProducts";
const appReducers = combineReducers({
  products: shopProductsReducer,
  total: totalPriceReducer,
  cartProducts: totalCartProductsReducer,
});

export default appReducers;
