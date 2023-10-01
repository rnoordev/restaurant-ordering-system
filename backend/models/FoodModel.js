const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  food_name: {
    type: String,
    required: true,
  },
  food_star: String,
  food_vote: String,
  food_price: String,
  food_discount: String,
  food_desc: String,
  food_status: String,
  food_type: String,
  food_category: String,
  food_src: String,
});

const FoodModel = mongoose.model("Food", schema);

module.exports = FoodModel;
