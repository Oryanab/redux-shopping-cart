const totalPriceReducer = (state = 0, action) => {
  const { price } = action;
  switch (action.type) {
    case "INCREMENT":
      return (state += price);
    case "DECREMENT":
      return (state -= price);
    case "RESET_TOTAL":
      return (state = 0);
    default:
      return state;
  }
};

export default totalPriceReducer;
