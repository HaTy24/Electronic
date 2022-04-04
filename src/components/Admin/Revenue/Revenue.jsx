import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactToPrint from "react-to-print";
import BaseUrl from "../../api/BaseURL";
import "../../Scss/input.scss";

function Revenue({ name }) {
  const [totalPrice, setTotalPrice] = useState();
  const [value, setValue] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(BaseUrl.baseUrl + "/Ve")
      .then((response) => response.json())
      .then((data) => setValue(data));
  }, []);

  useEffect(() => {
    const priceArr = value.filter((item) => {
      if (input === "") {
        return item;
      } else if (
        item.idChiTietChieuNavigation.ngayChieu.slice(0, 7).includes(input)
      ) {
        return item;
      }
    });

    const total = priceArr.reduce((acc, cur) => {
      return acc + cur.idChiTietChieuNavigation.giaVe;
    }, 0);
    setTotalPrice(total);
  });

  const handleMonth = (e) => {
    setInput(e.target.value);
  };
  console.log(input);
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = dd + ", tháng " + mm + ", năm " + yyyy;

  const month = input
    ? "Tháng " + input.split("-")[1] + " - " + input.split("-")[0]
    : "";

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // // hide last border
    // "&:last-child td, &:last-child th": {
    //   border: 0,
    // },
  }));

  const componentRef = useRef();

  return (
    <div>
      <h1 className="title">Doanh Thu Theo Tháng</h1>
      <div className="form">
        <label htmlFor="start" className="label">
          Choose Month
        </label>
        <div className="form-group">
          <input
            className="form-input"
            onChange={(e) => handleMonth(e)}
            type="month"
            id="start"
            name="start"
          ></input>
          <input
            className="form-input"
            disabled
            value={"Tổng Tiền: " + totalPrice + " VNĐ"}
          />
        </div>
        <ReactToPrint
          trigger={() => (
            <button className="form-button">
              In Doanh Thu
              <i className="fas fa-print"></i>
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Người Đặt</StyledTableCell>
              <StyledTableCell align="center">Tên Phim</StyledTableCell>
              <StyledTableCell align="center">Tên Rạp</StyledTableCell>
              <StyledTableCell align="center">Chổ Ngồi</StyledTableCell>
              <StyledTableCell align="center">Ngày Chiếu</StyledTableCell>
              <StyledTableCell align="center">Giờ Bắt Đầu</StyledTableCell>
              <StyledTableCell align="center">Giá Vé</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#dfdfdf" }}>
            {value
              .filter((item) => {
                if (input === "") {
                  return item;
                } else if (
                  item.idChiTietChieuNavigation.ngayChieu
                    .slice(0, 7)
                    .includes(input)
                ) {
                  return item;
                }
              })
              .map((item, i) => {
                return (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {item.idVe}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idUserNavigation.hoTen}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idChiTietChieuNavigation.idPhimNavigation.tenPhim}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idChiTietChieuNavigation.idPhongNavigation.tenPhong}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idChoNgoiNavigation.idGheNavigation.tenGhe}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idChiTietChieuNavigation.ngayChieu.split("T")[0]}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idChiTietChieuNavigation.gioBatDau
                        .split("T")[1]
                        .slice(0, 5)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.idChiTietChieuNavigation.giaVe + " VNĐ"}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="print" ref={componentRef}>
        <span className="print-title">Báo Cáo Doanh Thu {month}</span>
        <table className="print-table">
          <tr>
            <th>Người Đặt</th>
            <th>Tên Phim</th>
            <th>Ngày Chiếu</th>
            <th>Giá Vé</th>
          </tr>
          {value
            .filter((item) => {
              if (input === "") {
                return item;
              } else if (
                item.idChiTietChieuNavigation.ngayChieu
                  .slice(0, 7)
                  .includes(input)
              ) {
                return item;
              }
            })
            .map((item, i) => {
              return (
                <tr>
                  <td>{item.idUserNavigation.hoTen}</td>
                  <td>
                    {item.idChiTietChieuNavigation.idPhimNavigation.tenPhim}
                  </td>
                  <td>
                    {item.idChiTietChieuNavigation.ngayChieu.split("T")[0]}
                  </td>
                  <td>{item.idChiTietChieuNavigation.giaVe + " VNĐ"}</td>
                </tr>
              );
            })}
        </table>
        <div className="print-info">
          <span className="print-name">Người in: {name}</span>
          <span className="print-price">Tổng tiền: {totalPrice} VNĐ</span>
        </div>
        <span className="print-day">Ngày lập: {today}</span>
        <span className="print-signature">Chữ Ký Quản Lý</span>
        <span className="print-des">(Ký và ghi rõ họ tên)</span>
      </div>
    </div>
  );
}

export default Revenue;
