export const increment = (product) => {
  return {
    type: "INCREMENT",
    product: product,
  };
};

export const decrement = (product) => {
  return {
    type: "DECREMENT",
    product: product,
  };
};

export const addProductsQuantity = (product) => {
  return {
    type: "ADD",
    selectedItem: product,
  };
};

export const removeProductsQuantity = (product) => {
  return {
    type: "REMOVE",
    selectedItem: product,
  };
};

export const addProductsToCart = (product, id) => {
  return {
    type: "ADD_TO_CART",
    selectedItem: product,
    id: id,
  };
};

export const removeProductsFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    selectedItem: product,
  };
};

export const resetCartItems = () => {
  return {
    type: "REMOVE_ALL",
  };
};

export const resetTotal = () => {
  return {
    type: "RESET_TOTAL",
  };
};
