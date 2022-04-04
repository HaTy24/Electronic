import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./Carousel2.scss";

function Carousel() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="Carousel ">
      <div className="Carousel-container grid wide">
        <div className="Carousel-wrap">
          <div className=" Carousel-slider c-12 l-9">
            <Slider {...settings}>
              <img
                src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/slide-img2.png?1645785157584"
                alt=""
              />
              <img
                src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/slide-img1.png?1645785157584"
                alt=""
              />
            </Slider>
          </div>
          <div className="Carousel-sale">
            <h2 className="Carousel-title">
              Tin Khuyến Mãi <span></span>
            </h2>
            <div className="Carousel-items">
              <div className="Carousel-item">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/422/614/articles/mot-mon-qua-tu-mew-mall.jpg?v=1636385900007"
                  alt=""
                />
                <h3>
                  Tặng ngay voucher 300k - Khi mua online tại billion store
                </h3>
                <span>08/03/2022</span>
              </div>
              <div className="Carousel-item">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/422/614/articles/mot-mon-qua-tu-mew-mall.jpg?v=1636385900007"
                  alt=""
                />
                <h3>
                  Tặng ngay voucher 300k - Khi mua online tại billion store
                </h3>
                <span>08/03/2022</span>
              </div>
              <div className="Carousel-item">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/422/614/articles/mot-mon-qua-tu-mew-mall.jpg?v=1636385900007"
                  alt=""
                />
                <h3>
                  Tặng ngay voucher 300k - Khi mua online tại billion store
                </h3>
                <span>08/03/2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
