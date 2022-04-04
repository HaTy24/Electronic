import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const newArr = { ...data };
    newArr[e.target.name] = e.target.value;
    setData(newArr);
  };
  console.log(data);
  const handleRegister = async () => {
    axios
      .post("http://localhost:8800/auth/register", {
        name_user: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password,
      })
      .then(() => alert("Success!!!"))
      .then(() => navigate("/login"));
  };
  return (
    <div>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div class="flex flex-row items-center justify-center ">
                  <p class="text-2xl mb-4 text-red-600">Register</p>
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="User Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="phone"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Phone Number"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="address"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Address"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    name="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div class=" flex justify-between lg:text-left">
                  <button
                    type="button"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => handleRegister()}
                  >
                    Register
                  </button>
                  <Link
                    to="/"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out underline"
                  >
                    Back to home
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
