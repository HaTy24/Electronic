import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Context from "../../../context/Context";
import { addCart } from "../../../context/Actions";
import { Link } from "react-router-dom";
import "./Detail.scss";

function Product() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);
  const location = useLocation().pathname.split("/")[2];
  const [detail, setDetail] = useState({
    price: "",
  });

  const [quantity, setQuantity] = useState(1);
  const [display, setDisplay] = useState("hidden");
  useEffect(() => {
    axios
      .get("http://localhost:8800/product/" + location)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  const handleAddCart = () => {
    let res = [];
    if (state.user) {
      res = axios.post(
        "http://localhost:8800/cart",
        {
          id_user: state.user.user._id,
          list_product: detail._id,
          list_quantity: quantity,
        },
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      dispatch(addCart(quantity));
      console.log(res.data);
    } else {
      navigate("/login");
    }
  };

  // const handleAddToCart = () => {
  //   const auth = JSON.parse(localStorage.getItem("user"));
  //   if (!auth) {
  //     // addCartContext.handleAddToCart({ detail, quantity });
  //   } else {
  //     axios
  //       .post("http://localhost:8800/cart", {
  //         id_user: auth.user._id,
  //         quantity: quantity,
  //         list_product: detail._id,
  //       })
  //       .then((res) => console.log(res));
  //   }
  //   setDisplay("");
  // };
  // setTimeout(() => setDisplay("hidden"), 1000);

  // console.log(state.user.user);
  return (
    <div className="mt-32">
      <div className="bg-white py-2 px-4 rounded-2xl shadow-[0_0_20px_1px_rgba(0,0,0,0.3)] grid wide">
        <h1 className="mb-4 text-4xl">{detail.name_product}</h1>
        <div className="row">
          <div className="col l-5 ">
            <img src={detail.image} alt="" className="max-w-md" />
          </div>
          <div className="col l-4">
            <div className="pb-2 border-b-2 mr-2 mb-4">
              <h3 className="inline-block">Tình trạng: </h3>
              <span className="text-green-600">Còn hàng</span>
            </div>
            <h4 className="mb-7">Nội dung đang cập nhật...</h4>
            <h2 className="text-red-700 text-3xl mb-7">
              {detail.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </h2>
            <h3 className="mr-2 mb-7">Số lượng: </h3>
            <div class="flex items-center justify-center">
              <div class="inline-flex mb-4" role="group">
                <button
                  type="button"
                  class="
        rounded-l
        px-6
        py-2
        border-2 border-blue-600
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  class="
        text-center
        py-2
        border-t-2 border-b-2 border-blue-600
        text-blue-600
        font-medium
        max-w-[80px]
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  class="
        rounded-r
        px-6
        py-2
        border-2 border-blue-600
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                className="w-[50%] items-center py-2 px-4 border-none rounded-lg text-white text-lg gap-2 cursor-pointer flex bg-orange-700"
                onClick={() => handleAddCart()}
              >
                <ion-icon name="cart-sharp"></ion-icon>Thêm vào giỏ
              </button>
              <button className="w-[50%] text-center py-2 px-4 border-none rounded-lg text-white text-lg gap-2 cursor-pointer bg-yellow-500">
                Mua ngay
              </button>
            </div>
          </div>

          <div className="col l-3 product-right">
            <div className="product-slogan">
              <h2 className="product-store">Chỉ có tại Billion</h2>
              <ul>
                <li>
                  <ion-icon name="shield-checkmark-outline"></ion-icon> Sản phẩm
                  an toàn
                </li>
                <li>
                  <ion-icon name="thumbs-up-outline"></ion-icon>Chất lượng cam
                  kết
                </li>
                <li>
                  <ion-icon name="medal-outline"></ion-icon>Dịch vụ vượt trội
                </li>
                <li>
                  <ion-icon name="rocket-outline"></ion-icon>Giao hàng nhanh
                  chóng
                </li>
              </ul>
            </div>
            <div className="product-contact">
              <img
                src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/customer-service.png?1646630804664"
                alt=""
              />
              <div>
                <h3>Hỗ trợ mua hàng</h3>
                <h2>0948 162 500</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description">
          <h2 className="text-2xl border-b-[1px] border-b-gray-400 mb-5">
            Thông tin chi tiết
          </h2>
          <p>{detail.description ? detail.description : "Đang cập nhật..."}</p>
        </div>
      </div>

      {/* ----------------- */}
      <div
        class={` flex space-x-2 justify-center absolute top-24 right-2 ${display}`}
      >
        <div
          class="g-blue-500 shadow-lg mx-auto w-72 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
          id="static-example"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-mdb-autohide="false"
        >
          <div class=" bg-blue-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
            <p class="font-bold text-white">THÔNG BÁO</p>

            <button
              type="button"
              class=" btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-mdb-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="p-3 bg-blue-500 rounded-b-lg break-words text-white">
            Đã thêm vào giỏ hàng
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
