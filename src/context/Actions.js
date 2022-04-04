export const login = (payload) => ({
  type: "LOGIN",
  payload,
});

export const addCart = (payload) => ({
  type: "ADD_CART",
  payload,
});

export const updateCart = (payload) => ({
  type: "UPDATE_CART",
  payload,
});

export const quantity = () => ({
  type: "QUANTITY",
});

export const logout = () => ({
  type: "LOGOUT",
});
