const BillDetailsModel = require("../models/BillDetailsModel");

// create BillDetails
const createBillDetails = async (req, res) => {
  const data = req.body;

  try {
    const newModel = new BillDetailsModel(data);
    await newModel.save();

    return res.json(newModel);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// get BillDetails
const getBillDetailsById = async (req, res) => {
  try {
    const data = await BillDetailsModel.findById(req.params.id);

    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ error: "Not found!" });
    }
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

module.exports = {
  createBillDetails,
  getBillDetailsById,
};
