const initState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  products: 0,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_CART": {
      return {
        ...state,
        products: state.products + action.payload,
      };
    }
    case "UPDATE_CART": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        user: null,
        products: 0,
      };
    }
    default:
      return {
        user: "",
      };
  }
};

export { initState };
export default Reducer;
