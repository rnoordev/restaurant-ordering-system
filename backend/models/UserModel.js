const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
    unique: true,
  },
  user_phone: String,
  user_password: {
    type: String,
    required: true,
  },
  user_birth: String,
  user_gender: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
