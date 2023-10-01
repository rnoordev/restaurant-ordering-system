const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  bill_id: Number,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bill_phone: String,
  bill_address: String,
  bill_when: String,
  bill_method: String,
  bill_discount: Number,
  bill_delivery: Number,
  bill_total: Number,
  bill_paid: String,
  bill_status: Number,
});

const BillStatusModel = mongoose.model("BillStatus", schema);

module.exports = BillStatusModel;
