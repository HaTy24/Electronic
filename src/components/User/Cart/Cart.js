import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { updateCart } from "../../../context/Actions";
import Context from "../../../context/Context";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    list_product: [],
    list_quantity: [],
  });
  const [state, dispatch] = useContext(Context);
  let [total, setTotal] = useState(0);
  let [qty, setQty] = useState(0);
  const [disable, setDisable] = useState(false);
  const [quantity, setQuantity] = useState();
  const btnCheck = document.querySelectorAll("#check");
  useEffect(() => {
    const getCart = async () => {
      const res = await axios.get("http://localhost:8800/cart/", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setCart(res.data);
      setQuantity(res.data.list_quantity);
    };
    getCart();
  }, []);

  const handleDeleteCart = (e, index, id) => {
    e.preventDefault();
    cart.list_product.splice(index, 1);
    cart.list_quantity.splice(index, 1);
    axios
      .put("http://localhost:8800/cart/" + id, {
        id_user: cart.id_user,
        list_product: cart.list_product.map((item) => {
          return item._id;
        }),
        list_quantity: cart.list_quantity,
      })
      .then(() => alert("Deleted !!!"))
      .then(() => window.location.reload());
  };

  const updateQty = async (id, listQty) => {
    await axios.put("http://localhost:8800/cart/" + id, {
      id_user: cart.id_user,
      list_product: cart.list_product.map((item) => {
        return item._id;
      }),
      list_quantity: listQty,
    });
  };

  const updateTotalPrice = (i, e) => {
    if (btnCheck[i].checked) {
      if (e.target.innerHTML === "+") {
        setTotal((total += cart.list_product[i].price));
      } else {
        setTotal((total -= cart.list_product[i].price));
      }
    }
  };

  const handlePrev = async (i, id, e) => {
    quantity[i] -= 1;
    setCart({ ...cart, list_quantity: quantity });
    updateQty(id, cart.list_quantity);
    const sum = quantity.reduce((a, b) => {
      return a + b;
    }, 0);
    dispatch(updateCart(sum));
    updateTotalPrice(i, e);
  };

  const handleNext = (i, id, e) => {
    quantity[i] += 1;
    setCart({ ...cart, list_quantity: quantity });
    updateQty(id, cart.list_quantity);
    const sum = quantity.reduce((a, b) => {
      return a + b;
    }, 0);
    dispatch(updateCart(sum));
    updateTotalPrice(i, e);
    setDisable(false);
  };

  const handleChange = (e, i, id) => {
    if (btnCheck[i].checked) {
      setTotal(
        (total += (e.target.value - quantity[i]) * cart.list_product[i].price)
      );
    }
    quantity[i] = parseInt(e.target.value);
    setCart({ ...cart, list_quantity: quantity });
    updateQty(id, cart.list_quantity);
    const sum = quantity.reduce((a, b) => {
      return a + b;
    }, 0);
    dispatch(updateCart(sum));
  };

  const handleChangCheckbox = (e, i) => {
    if (e.target.checked) {
      setTotal((total += cart.list_product[i].price * cart.list_quantity[i]));
      setQty((qty += cart.list_quantity[i]));
    } else {
      setTotal((total -= cart.list_product[i].price * cart.list_quantity[i]));
      setQty((qty -= cart.list_quantity[i]));
    }
  };

  const handleBuy = () => {
    const mang = [];
    btnCheck.forEach((item) => {
      if (item.checked) {
        mang.push(item.value);
      }
    });
    const listPro = [];
    const listQty = [];
    mang.map((item) => {
      listPro.push(item.split(",")[0]);
      listQty.push(item.split(",")[1]);
    });
    axios.post("http://localhost:8800/bill", {
      postedBy: cart.id_user,
      list_product: listPro,
      list_quantity: listQty,
      total_price: total,
    });
  };

  const handleClear = (id) => {
    axios.delete("http://localhost:8800/cart/" + id);
  };
  return (
    <div className="mt-32 flex justify-evenly mx-14">
      <div class=" w-[60%] h-[80vh] overflow-y-scroll overflow-x-hidden pr-3">
        {cart.list_product ? (
          cart.list_product.map((item, i) => {
            return (
              <div class="flex my-2 gap-7 items-center rounded-lg shadow-lg bg-white w-full  px-4 border-2 cursor-pointer hover:border-orange-300">
                <input
                  type={"checkbox"}
                  value={[item._id, cart.list_quantity[i]]}
                  id="check"
                  onChange={(e) => handleChangCheckbox(e, i)}
                />
                <img class="rounded-xl max-w-[150px]" src={item.image} alt="" />
                <div className="w-full flex justify-between  py-4">
                  <div>
                    <h5 class="text-gray-900 text-lg font-medium mb-2">
                      {item.name_product}
                    </h5>
                    <p class=" text-base mb-4 text-red-600">
                      Giá:
                      {item.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <div class="flex items-center ">
                      <div class="inline-flex mb-4" role="group">
                        <button
                          type="button"
                          disabled={disable}
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
                          onClick={(e) => {
                            handlePrev(i, cart._id, e);
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
                          value={
                            !cart.list_quantity[i] ? 0 : cart.list_quantity[i]
                          }
                          min={1}
                          // onBlur={(e) => handleChange(e, i, cart._id)}
                          onChange={(e) => handleChange(e, i, cart._id)}
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
                          onClick={(e) => {
                            handleNext(i, cart._id, e);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[200px]">
                    <p class=" text-base mb-4 text-red-600">
                      Tổng tiền:
                      {(cart.list_quantity[i] * item.price).toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                    </p>
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={(e) => handleDeleteCart(e, i, cart._id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <img
              className="w-full"
              src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="bg-gray-200 px-7 w-[30%]">
        <h1 className="text-2xl mt-6 mb-4 font-bold">Thông tin giỏ hàng</h1>
        <h1 className="text-xl mt-8 mb-4 flex justify-between items-end">
          Số lượng sản phẩm{" "}
          <span className="text-xl font-bold text-blue-600">{qty}</span>
        </h1>
        <h1 className="text-xl  mb-4 flex justify-between items-end">
          Tổng tiền
          <span className="text-xl font-bold text-red-600">
            {total.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </span>
        </h1>
        <button
          type="button"
          class="w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleBuy()}
        >
          Thanh toán
        </button>
        <button
          type="button"
          class="w-full block mt-5 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleClear(cart._id)}
        >
          Xóa giỏ hàng
        </button>
        <button
          type="button"
          class="w-full mt-5 block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => {
            navigate("/");
          }}
        >
          Xem thêm sản phẩm
        </button>
      </div>
    </div>
  );
}

export default Cart;
