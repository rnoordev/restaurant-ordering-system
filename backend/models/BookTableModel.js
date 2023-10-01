const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  book_phone: String,
  book_people: Number,
  book_tables: Number,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book_when: String,
  book_note: String,
});

const BookTableModel = mongoose.model("BookTable", schema);

module.exports = BookTableModel;
