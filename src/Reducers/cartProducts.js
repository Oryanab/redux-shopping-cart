const totalCartProductsReducer = (state = [], action) => {
  const { selectedItem, id } = action;
  switch (action.type) {
    case "ADD_TO_CART":
      let newCartItem = { ...selectedItem, id: id };
      return (state = [...state, newCartItem]);
    case "REMOVE_FROM_CART":
      return (state = state.filter((item) => item.id !== selectedItem.id));
    case "REMOVE_ALL":
      return (state = []);
    default:
      return state;
  }
};

export default totalCartProductsReducer;
