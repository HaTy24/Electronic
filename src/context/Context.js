import { createContext } from "react";

const Context = createContext();

// let arrCart = [];
// function Provider({ children }) {
//   const [quantity, setQuantity] = useState([]);
//   if (!JSON.parse(sessionStorage.getItem("cart"))) {
//     sessionStorage.setItem("cart", JSON.stringify(arrCart));
//   }
//   const handleAddToCart = (val) => {
//     const cart = JSON.parse(sessionStorage.getItem("cart"));
//     if (Object.values(cart).length !== 0) {
//       for (let i = 0; i < cart.length; i++) {
//         if (cart[i].detail._id === val.detail._id) {
//           const index = cart.indexOf(cart[i]);
//           cart[index] = {
//             ...cart[i],
//             quantity: (cart[i].quantity += val.quantity),
//           };
//           arrCart = cart;
//           break;
//         } else if (i + 1 === cart.length) {
//           arrCart.push(val);
//         }
//       }
//     } else {
//       arrCart.push(val);
//     }
//     sessionStorage.setItem("cart", JSON.stringify(arrCart));
//     setQuantity(arrCart);
//   };

//   return (
//     <authContext.Provider value={{ quantity, handleAddToCart }}>
//       {children}
//     </authContext.Provider>
//   );
// }

// export { Provider, authContext };
export default Context;
