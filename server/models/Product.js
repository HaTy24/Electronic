const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    name_product: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
