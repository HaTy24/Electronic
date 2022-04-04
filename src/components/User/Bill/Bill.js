import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Bill() {
  const [bill, setBill] = useState([]);
  useEffect(() => {
    const getBill = async () => {
      const res = await axios.get(
        "http://localhost:8800/bill"
        // , {
        //   headers: {
        //     token:
        //       "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        //   },
        // }
      );
      setBill(res.data);
    };
    getBill();
  }, []);
  return (
    <div>
      {bill.map((item) => {
        return (
          <Link to={"/bill/" + item._id}>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    {item.postedBy.name_user}
                  </h5>
                  <p class="text-gray-700 text-base mb-4">{item.quantity}</p>
                  {item.id_product.map((i) => {
                    return <p>{i.name_product}</p>;
                  })}
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Bill;
