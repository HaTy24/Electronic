const mongoose = require("mongoose");

const Cart = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    list_product: {
      type: Array,
      required: false,
    },
    list_quantity: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", Cart);
