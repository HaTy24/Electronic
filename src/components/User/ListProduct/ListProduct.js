import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ListProduct() {
  const location = useLocation().search;
  useEffect(() => {
    axios.get("http://localhost:8800/product" + location).then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div className="">ListProduct</div>;
}

export default ListProduct;
