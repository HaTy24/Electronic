import React, { useEffect, useContext, useState } from "react";
import Context from "../../../context/Context";

import { Link } from "react-router-dom";
import { logout } from "../../../context/Actions";
import axios from "axios";

function Header() {
  // let quantity = useContext(Context);

  const [state, dispatch] = useContext(Context);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  // const qtCart = Object.values(quantity.quantity).reduce((a, b) => {
  //   return a + b.quantity;
  // }, 0);

  // console.log(quantity.quantity[0].quantity);
  useEffect(() => {
    axios.get("http://localhost:8800/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav
        class="
              w-full
              flex 
              items-center
              justify-between
              py-4
              bg-gray-200
              z-20
              text-white
              hover:text-gray-700
              focus:text-gray-700
              shadow-lg
              navbar navbar-expand-lg navbar-light
              fixed
              top-0
              "
      >
        <div class="container-fluid w-full flex-wrap flex items-center justify-between md:px-6 px-3">
          <div
            class=" flex w-full flex-wrap lg:items-center md:items-start justify-between"
            id="navbarSupportedContent"
          >
            <div class="px-6 md:block lg:flex">
              <div class="flex items-center gap-3">
                <Link
                  to={"/"}
                  class="
                      text-gray-900
                      hover:text-gray-900
                      focus:text-gray-900
                      mt-2
                      lg:mt-0
                      mr-1
                    "
                >
                  <img
                    src="http://cdn.shopify.com/s/files/1/0578/9296/2510/collections/Icon-linh-kien-khac.png?v=1625593192g"
                    alt=""
                    className="w-16 h-16"
                  />
                </Link>
                <button
                  class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContentQ"
                  aria-controls="navbarSupportedContentQ"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="navbar-collapse collapse grow items-center"
                id="navbarSupportedContentQ"
              >
                <ul class="navbar-nav mr-auto flex flex-col">
                  <li class="nav-item">
                    <Link
                      to={"/"}
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item dropdown static">
                    <div
                      class="nav-link pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap cursor-pointer"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      type="button"
                      id="dropdownMenuButtonQ"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Danh mục sản phẩm
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="dropdown-menu w-full  mt-0 hidden shadow-lg bg-white absolute left-0 top-full"
                      aria-labelledby="dropdownMenuButtonQ"
                    >
                      <div class="px-6 lg:px-8 py-5">
                        <div class=" bg-white text-gray-600">
                          <p class="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                            Linh kiện điên tử
                          </p>
                          <div className="grid wide">
                            <div className="row">
                              {category.map((item) => {
                                return (
                                  <Link
                                    to={`/product/?cate=${item.name}`}
                                    aria-current="true"
                                    class=" px-6 py-3 col c-3  border-b border-gray-200 w-full hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
                                  >
                                    <div class="shrink-0">
                                      <img
                                        src={item.image}
                                        class="w-16 shadow-lg rounded"
                                        alt="Hollywood Sign on The Hill"
                                      />
                                    </div>
                                    <div class="grow ml-4">
                                      <p class="mb-1 font-semibold">
                                        {item.name}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown static">
                    <div class="flex items-center">
                      <div class=" xl:w-[450px]">
                        <div class="input-group relative flex flex-wrap items-stretch w-full">
                          <input
                            type="search"
                            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Search..."
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            onChange={(e) => handleInput(e)}
                          />
                          <Link
                            to={`/product/?search=${search}`}
                            class="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                            type="button"
                            id="button-addon2"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="search"
                              class="w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                              ></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown static"></li>
                </ul>
              </div>
            </div>
            <div class="flex items-center relative">
              <Link
                to={"/cart"}
                class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
                onClick={() => window.scroll(0, 0)}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shopping-cart"
                  class="w-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
                </svg>
                <span class="text-white bg-red-700 absolute rounded-full text-xs top-1 ml-2 py-0 px-1.5">
                  {state.products}
                </span>
              </Link>
              <div class="dropdown relative">
                <Link
                  to={"/"}
                  class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4
                      dropdown-toggle
                      hidden-arrow
                      flex items-center
                    "
                  id="dropdownMenuButton1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bell"
                    class="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                    ></path>
                  </svg>
                  <span class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                    1
                  </span>
                </Link>
                <ul
                  class="
                      dropdown-menu
                      min-w-max
                      absolute
                      bg-white
                      text-base
                      z-50
                      float-left
                      py-2
                      list-none
                      text-left
                      rounded-lg
                      shadow-lg
                      mt-1
                      hidden
                      m-0
                      bg-clip-padding
                      border-none
                      left-auto
                      right-0
                    "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      to={"/"}
                      class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
              {state.user ? (
                <div class="dropdown relative">
                  <div
                    class="dropdown-toggle flex items-center hidden-arrow"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                      class="rounded-full w-9"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <ul
                    class="
                      dropdown-menu
                      min-w-max
                      absolute
                      bg-white
                      text-base
                      z-50
                      py-2
                      list-none
                      text-center
                      rounded-lg
                      shadow-lg
                      mt-1
                      hidden
                      m-0
                      bg-clip-padding
                      border-none
                      left-auto
                      right-0
                    "
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link
                        to={"/"}
                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 border-b-2"
                      >
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparenttext-gray-700 hover:bg-gray-100 border-b-2"
                        href="#"
                      >
                        Another action
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="mt-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => handleLogout()}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to={"/login"}
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
