import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Carousel.scss";
function Carousel() {
  const settings = {
    className: "slider",
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: false,
    speed: 800,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const Value = [
    // {
    //   img: "https://www.tncstore.vn/image/catalog/banner/2020/web-official-store-2%20(1).jpg",
    //   des: "",
    // },
    // {
    //   img: "https://www.tncstore.vn/image/catalog/banner/2020/web-official-store-msi%20(1).jpg",
    //   des: "",
    // },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/Slide/WEB%20-%20OFFICIAL%20STORE%202%20-%20ACER.jpg",
      des: "",
    },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/Th%C3%A1ng%204/nzxt-store-2.jpg",
      des: "",
    },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/Thang%201/WEB%20-%20OFFICIAL%20STORE%202%20-%20LG.jpg",
      des: "",
    },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/thang%2011/WEB%20-%20OFFICIAL%20STORE%202%20-%20VIEWSONIC.jpg",
      des: "",
    },
  ];
  return (
    <div className="mt-14">
      <div className="trending">
        <Slider {...settings}>
          {Value.map((item, i) => {
            return (
              <div key={i}>
                <div
                  className="trending-top"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  <div className="trending-moreInfo">
                    <h1 className="trending-name">
                      {item.title ? item.title : item.original_title}
                    </h1>
                    <p className="trending-overview">{item.des}</p>
                  </div>
                  <img src={`${item.img}`} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
