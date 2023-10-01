const BookTableModel = require("../models/BookTableModel");

// insert Booking
// create Booking
const createBooking = async (req, res) => {
  const data = req.body;

  try {
    const newModel = new BookTableModel(data);
    await newModel.save();

    return res.json(newModel);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

module.exports = {
  createBooking,
};
