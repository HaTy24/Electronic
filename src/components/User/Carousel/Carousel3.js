import React from "react";

function Carousel3() {
  const data = [
    "https://www.tncstore.vn/image/catalog/banner/2020/web-official-store-2%20(1).jpg",
    "https://www.tncstore.vn/image/catalog/banner/2020/web-official-store-msi%20(1).jpg",
    "https://www.tncstore.vn/image/catalog/banner/2021/Slide/WEB%20-%20OFFICIAL%20STORE%202%20-%20ACER.jpg",
    "https://www.tncstore.vn/image/catalog/banner/2021/Th%C3%A1ng%204/nzxt-store-2.jpg",
  ];

  return (
    <div>
      {data.map((item) => {
        return <img src={item} alt="" />;
      })}
    </div>
  );
}

export default Carousel3;
