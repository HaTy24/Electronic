import axios from "axios";
import { useEffect, useReducer } from "react";
import { addCart } from "./Actions";
import Context from "./Context";
import Reducer, { initState } from "./Reducer";

function Provider({ children }) {
  const [state, dispach] = useReducer(Reducer, initState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    const getCart = async () => {
      const product = await axios.get("http://localhost:8800/cart/", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispach(
        addCart(
          product.data.list_quantity
            ? product.data.list_quantity.reduce((a, b) => a + b, 0)
            : 0
        )
      );
    };
    getCart();
  }, [state.user]);

  return (
    <Context.Provider value={[state, dispach]}>{children}</Context.Provider>
  );
}

export default Provider;
