import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="my-12 border-t-[1px] border-red-500 pt-5">
      <div className="footer-container grid wide">
        <div className="row">
          <div className="col l-4">
            <h3 className="mb-3">Hỗ trợ khách hàng</h3>
            <ul>
              <li>Các câu hỏi thường gặp</li>
              <li>Gửi yêu cầu hỗ trợ</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức vận chuyển</li>
              <li>Giới thiệu Billion</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>
          <div className="col l-4">
            <h3 className="footer-title">Chính sách Billion</h3>
            <ul>
              <li>Chính sách bảo mật thanh toán </li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Chính sách giải quyết khiếu nại</li>
              <li>Chính sách đổi trả hàng</li>
              <li>Chính sách bảo hành</li>
              <li>Điều khoản sử dụng</li>
            </ul>
          </div>
          <div className="col l-4">
            <h3 className="footer-title">Thông tin liên hệ</h3>
            <ul>
              <li>
                Địa chỉ : 59h Nguyễn Kiệm, phường 3, quận Gò Vấp, TP.Hồ Chí Minh
              </li>
              <li>Email: hathienty2000@gmail.com</li>
              <li>Hotline: 0948162500</li>
              <li>
                Giấy chứng nhân đăng ký Kinh doanh số 0309532XXX do Sở Kế hoạch
                và Đầu tư Thành phố Hồ Chí Minh cấp.
              </li>
            </ul>
          </div>
          <div className=" col flex items-center justify-center gap-8 mt-5">
            <div>
              <h2 className="footer-title">Kết nối với chúng tôi</h2>
              <div class="flex items-center">
                <img
                  className="footer-contact"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/facebook.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-contact"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/twitter.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-contact"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/instagram.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-contact"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/youtube.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-contact"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/shopee.png?16466308046644"
                  alt=""
                />
                <img
                  className="footer-contact"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/lazada.jpg?1646630804664"
                  alt=""
                />
              </div>
              <h4>Phương thức thanh toán</h4>
              <div className="flex items-center">
                <img
                  className="footer-checkout"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/payment-1.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-checkout"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/payment-2.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-checkout"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/payment-3.png?1646630804664"
                  alt=""
                />
                <img
                  className="footer-checkout"
                  src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/payment-4.png?1646630804664"
                  alt=""
                />
              </div>
            </div>
            <img
              className="col l-6"
              src="https://bizweb.dktcdn.net/100/422/614/themes/813952/assets/mew_store.png?1646630804664"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
