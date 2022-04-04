import React from "react";
import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import PaginatedItems from "../../components/User/ListProduct/Pagination";

function List() {
  return (
    <div>
      <Header />
      <PaginatedItems itemsPerPage={2} />
      <Footer />
    </div>
  );
}

export default List;
