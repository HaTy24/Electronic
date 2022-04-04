import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
  return (
    <>
      <div className=" mt-28">
        <div className="products-items grid wide">
          <h1 className="products-title">Tất cả sản phẩm</h1>
          <div className="row">
            {currentItems &&
              currentItems.map((item, index) => (
                <div
                  className=" products-item col c-4 m-3 l-2 p-2 text-center border-2 cursor-pointer"
                  key={index}
                >
                  <Link to={`/product/${item._id}`}>
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
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const location = useLocation().search;
  const [itemOffset, setItemOffset] = useState(0);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    location
      ? axios
          .get("http://localhost:8800/product" + location)
          .then((res) => setProduct(res.data))
      : axios.get("http://localhost:8800/product").then((res) => {
          setProduct(res.data);
        });
  }, [location]);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, product]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item "
        pageLinkClassName="page-link bg-red-500 px-4 text-white rounded-full"
        previousClassName="page-item"
        previousLinkClassName="page-link bg-red-600 px-4 text-white rounded-full"
        nextClassName="page-item"
        nextLinkClassName="page-link bg-red-600 px-4 text-white rounded-full"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination flex gap-1 justify-center mt-12"
        activeClassName="active "
        activeLinkClassName="bg-blue-700 text-white"
        disabledLinkClassName="bg-gray-400"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
export default PaginatedItems;
