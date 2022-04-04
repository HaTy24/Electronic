import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../sass/grid.scss";
import "./Product.scss";

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8800/product").then((res) => {
      setProduct(res.data);
    });
  }, []);
  console.log(product);
  return (
    <div className="products ">
      <div className="products-items grid wide">
        <h1 className="products-title">Tất cả sản phẩm</h1>
        <div className="row ">
          {product.map((item, index) => {
            return (
              <div
                className="products-item col c-5 m-3 l-2 p-2 text-center border-2"
                key={index}
                onClick={() => window.scroll(0, 0)}
              >
                <Link to={`product/${item._id}`}>
                  <div className="products-container">
                    <div
                      className="products-img"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>

                  <h2 className="products-name">{item.name_product}</h2>
                  <span className="products-price">{item.price} VNĐ</span>
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Mua ngay
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Link to={"/product"}>Xem Thêm</Link>
    </div>
  );
}

export default Product;
