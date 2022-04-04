import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bill from "./components/User/Bill/Bill";
import Detail from "./pages/User/Detail";
import Login from "./pages/Login";
import Home from "./pages/User/Home";
import SingleBill from "./components/User/SingleBill";
import Cart from "./pages/User/Cart";
import Context from "./context/Context";
import Register from "./pages/Register";
import List from "./pages/User/List";
import HomeAdmin from "./pages/Admin/HomeAdmin";
function App() {
  const [state] = useContext(Context);
  // state.user ? <Home /> : <Navigate to="/login" replace />
  console.log(state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/bill/:id" element={<SingleBill />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/product/" element={<List />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
