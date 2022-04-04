const mongoose = require("mongoose");

const Bill = new mongoose.Schema(
  {
    postedBy: {
      type: String,
      required: true,
    },
    list_product: {
      type: Array,
      required: true,
    },
    list_quantity: {
      type: Array,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", Bill);
