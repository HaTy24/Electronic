import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Categories.scss";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/categories")
      .then((res) => setCategories(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="Category wide grid">
      <h1 className="text-2xl text-center mt-10 mb-5 border-b-[1px] border-b-gray-300 font-bold uppercase">
        Danh mục nổi bật
      </h1>
      <div className="Category-items row">
        {categories.map((cat, index) => {
          return (
            <div className="Category-item l-1 c-2">
              <img src={cat.image} alt="" />
              {/* <div
                className="Category-img"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div> */}
              <span>{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
