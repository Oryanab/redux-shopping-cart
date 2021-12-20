const allproducts = [
  {
    name: "lemon",
    price: 10,
    quantity: 10,
  },
  {
    name: "juice",
    price: 10,
    quantity: 10,
  },
  {
    name: "tomato",
    price: 10,
    quantity: 10,
  },
  {
    name: "avocado",
    price: 10,
    quantity: 10,
  },
];

const shopProductsReducer = (state = allproducts, action) => {
  const { selectedItem } = action;
  let modifiedProduct;
  let newState;
  switch (action.type) {
    case "ADD":
      modifiedProduct = state.find(
        (product) => product.name === selectedItem.name
      );
      modifiedProduct.quantity += 1;
      return (state = [...state]);
    case "REMOVE":
      modifiedProduct = state.find(
        (product) => product.name === selectedItem.name
      );
      if (modifiedProduct.quantity > 0) {
        modifiedProduct.quantity -= 1;
        newState = [...state];
      } else {
        modifiedProduct.quantity = 0;
      }
      return (state = newState);
    default:
      return state;
  }
};

export default shopProductsReducer;
