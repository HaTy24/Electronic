import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SingleBill() {
  const location = useLocation().pathname.split("/")[2];
  const [billDetail, setBillDetail] = useState({
    postedBy: {
      name_user: "",
      address: "",
      phone: "",
      email: "",
    },
  });

  useEffect(() => {
    const getBill = async () => {
      const res = await axios.get(
        "http://localhost:8800/bill/" + location
        // , {
        //   headers: {
        //     token:
        //       "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        //   },
        // }
      );
      setBillDetail(res.data);
    };
    getBill();
  }, [location]);

  console.log(billDetail);
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {billDetail.postedBy.name_user}
            </h5>
            <p class="text-gray-700 text-base mb-4">
              {billDetail.postedBy.email}
            </p>
            <p class="text-gray-700 text-base mb-4">
              {billDetail.postedBy.phone}
            </p>
            <p class="text-gray-700 text-base mb-4">
              {billDetail.postedBy.address}
            </p>
            <p class="text-gray-700 text-base mb-4">
              {billDetail.id_product.map((item) => {
                return (
                  <div>
                    <h1>{item.name_product}</h1>
                    <img
                      className="w-16"
                      src={item.image}
                      alt={item.name_product}
                    />
                    <h3>{item.price}</h3>
                  </div>
                );
              })}
            </p>
            <p class="text-gray-700 text-base mb-4">
              {billDetail.id_product.length}
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBill;
