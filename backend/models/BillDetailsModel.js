const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  bill_id: Number,
  food_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  item_qty: Number,
});

const BillDetailsModel = mongoose.model("BillDetails", schema);

module.exports = BillDetailsModel;
