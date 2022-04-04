import React from "react";
import Carousel from "../../components/User/Carousel/Carousel";
import Categories from "../../components/User/Categories/Categories";
import Product from "../../components/User/Products/Product";
import Carousel2 from "../../components/User/Carousel/Carousel2";
import Header from "../../components/User/Header/Header";
import Footer from "../../components/User/Footer/Footer";
import PaginatedItems from "../../components/User/ListProduct/Pagination";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Categories />
      <Product />
      <Carousel2 />
      <Footer />
    </div>
  );
}

export default Home;
