import React, { useState, useEffect, memo, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Axios from "axios";
import { DialogContent, DialogTitle } from "@mui/material";
import { location } from "../../../config";
import "./Products.scss";

function Products() {
  // *** khai bao ***
  const [input, setInput] = useState(""); //nhap vao tim kiem
  const [cate, setCate] = useState([]);
  const [data, setData] = useState({
    idtl: "",
    tenphim: "",
    thoiLuong: "",
    image: "",
    hour: "",
    minutes: "",
    trailer: "",
    des: "",
  }); //gia tri put phim
  const [reload, setReload] = useState(); //load lai trang
  const [open, setOpen] = useState(false); //mo dialog
  const [dialog, setDialog] = useState({
    idtl: "",
    tenphim: "",
    thoiLuong: "",
    image: "",
    hour: "",
    minutes: "",
    trailer: "",
    des: "",
  }); //gia tri dialog
  const [result, setResult] = useState([]);
  // *** get the loai ***
  useEffect(() => {
    fetch(location + "/product")
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, []);
  console.log(result);
  // *** get thể loại ***
  useEffect(() => {
    fetch(location + "/categories")
      .then((response) => response.json())
      .then((data) => setCate(data));
  }, [reload]);
  // *** put phim ***
  const handlePut = (e, idPhim) => {
    e.preventDefault();
    // Axios.put(BaseUrl.baseUrl + `/Phim/${idPhim}`, {
    //   idTheLoai: parseInt(data.idtl),
    //   tenPhim: data.tenphim,
    //   thoiLuong: data.hour + "h" + data.minutes,
    //   image: data.image,
    //   trailer: data.trailer + "!!!" + data.des,
    // })
    // .then(setOpen(false))
    // .then(() => setReload(Math.random()));
  };

  const arr = [];
  for (let i = 0; i <= 59; i++) {
    arr.push(i < 10 ? `0${i}` : `${i}`);
  }

  // *** delete phim ***
  const handleDelete = (e, item) => {
    e.preventDefault();
    if (window.confirm(`Are you sure want to delete: ${item.tenPhim}`)) {
      // Axios.delete(BaseUrl.baseUrl + `/Phim/${item.idPhim}`).then(() =>
      //   setReload(Math.random())
      // );
    }
  };

  // *** tim kiem ***
  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textTransform: "uppercase",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleClickOpen = (item) => {
    setOpen(true);
    setDialog(item);
    // setData({
    //   idtl: item.idTheLoai,
    //   tenphim: item.tenPhim,
    //   hour: item.thoiLuong.split("h")[0],
    //   minutes: item.thoiLuong.split("h")[1].trim(),
    //   image: item.image,
    //   des: item.trailer.split("!!!")[1],
    //   trailer: item.trailer.split("!!!")[0],
    // });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePutChange = (e) => {
    let newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  return (
    <div className="movies">
      <div className="search">
        <input
          className="search-input"
          onInput={(e) => {
            handleSearch(e);
          }}
          placeholder="Search"
        ></input>
        <i className="fas fa-search"></i>
      </div>
      <h1 className="title">Admin Page</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1280 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>STT</StyledTableCell>
              <StyledTableCell align="center">Tên</StyledTableCell>
              <StyledTableCell align="center">Chi tiết</StyledTableCell>
              <StyledTableCell align="center">Giá</StyledTableCell>
              <StyledTableCell align="center">Hình Ảnh</StyledTableCell>
              <StyledTableCell align="center">Thể loại</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#dfdfdf" }}>
            {result
              .filter((val) => {
                if (input === "") {
                  return val;
                } else if (
                  val.name_product.toLowerCase().includes(input.toLowerCase())
                ) {
                  console.log(val);
                  return val;
                }
              })
              .map((item, i) => {
                return (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {i + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.name_product}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <span className="des viewmore" key={i}>
                        {item.description}
                      </span>
                      <p
                        className="view-btn"
                        key={i}
                        onClick={() => {
                          document
                            .querySelectorAll(".des")
                            [i].classList.toggle("viewmore");
                        }}
                      >
                        Xem thêm
                      </p>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <img src={item.image} alt="" />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.categories}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        style={{
                          backgroundColor: "#594AE2",
                          color: "white",
                          display: "block",
                        }}
                        variant="outlined"
                        onClick={(e) => handleClickOpen(item, i)}
                      >
                        Sửa
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          marginTop: "8px",
                        }}
                        variant="outlined"
                        onClick={(e) => handleDelete(e, item)}
                      >
                        Xóa
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "red", textTransform: "uppercase" }}>
          Chỉnh sửa thông tin phim
        </DialogTitle>
        <DialogContent>
          <label>Thể loại</label>
          <select
            defaultValue={dialog.name}
            className="select"
            id="idtl"
            onBlur={(e) => {
              handlePutChange(e);
            }}
          >
            {cate.map((i) => {
              return (
                <option key={i._id} value={i.name}>
                  {i.name}
                </option>
              );
            })}
          </select>
          <label>Tên Phim</label>
          <TextField
            fullWidth
            variant="filled"
            id="tenphim"
            onBlur={(e) => handlePutChange(e)}
            defaultValue={dialog.name_product}
          ></TextField>

          <label>Hình Ảnh</label>
          <TextField
            fullWidth
            variant="filled"
            id="image"
            onBlur={(e) => handlePutChange(e)}
            defaultValue={dialog.image}
          ></TextField>
          <label>Chi tiết</label>
          <TextField
            fullWidth
            variant="filled"
            id="trailer"
            onBlur={(e) => handlePutChange(e)}
            defaultValue={dialog.description}
          ></TextField>
          <label>Giá</label>
          <TextField
            fullWidth
            variant="filled"
            id="des"
            onBlur={(e) => handlePutChange(e)}
            defaultValue={
              dialog.price ? dialog.price.toLocaleString("it-IT", {}) : 0
            }
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => handlePut(e, dialog.idPhim)}>Sửa</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Products;
