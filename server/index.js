const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8800;

app.use(express.json());
app.use(cors());

// Connect to DB
mongoose
  .connect("mongodb://localhost:27017/Electronic")
  .then(console.log("Connected to DB !!!"));

// Routers
const authenticationRouter = require("./routers/authentication");
const accountRouter = require("./routers/account");
const productRouter = require("./routers/product");
const billRouter = require("./routers/bill");
const categoryRouter = require("./routers/category");
const cartRouter = require("./routers/cart");

app.use("/auth", authenticationRouter);
app.use("/account", accountRouter);
app.use("/product", productRouter);
app.use("/bill", billRouter);
app.use("/categories", categoryRouter);
app.use("/cart", cartRouter);

//Running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
