const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  food_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  item_qty: Number,
});

const CartModel = mongoose.model("Cart", schema);

module.exports = CartModel;
