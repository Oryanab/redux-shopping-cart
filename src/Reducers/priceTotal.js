const totalPriceReducer = (state = 0, action) => {
  const { product } = action;
  switch (action.type) {
    case "INCREMENT":
      return product.quantity > 0 ? (state += product.price) : (state += 0);
    case "DECREMENT":
      return (state -= product.price);

    case "RESET_TOTAL":
      return (state = 0);
    default:
      return state;
  }
};

export default totalPriceReducer;
