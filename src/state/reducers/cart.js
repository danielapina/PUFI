const cartReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return (state += 1);
    default:
      return state;
  }
};

export default cartReducer;
