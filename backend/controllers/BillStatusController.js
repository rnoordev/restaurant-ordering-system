const BillStatusModel = require("../models/BillStatusModel");

// get newest Bill Status
const showNewestStatusId = async (req, res) => {
  try {
    const data = await BillStatusModel.findOne().sort({ created_at: -1 });

    return res.json(data.bill_id);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// create BillStatus
const createBillStatus = async (req, res) => {
  const data = req.body;

  try {
    const newModel = new BillStatusModel(data);
    await newModel.save();

    return res.json(newModel);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// get Bills Status
const getAllBillsByUser = async (req, res) => {
  try {
    const data = await BillStatusModel.find({ user_id: req.params.id });

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// get Bills Status
const getAllBillsByBill = async (req, res) => {
  try {
    const data = await BillStatusModel.find({ bill_id: req.params.id });

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// get Bills Status
const getAllBills = async (req, res) => {
  try {
    const data = await BillStatusModel.find();

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// update Status
const updateBillStatus = async (req, res) => {
  try {
    const model = await BillStatusModel.findByIdAndUpdate(req.params.id, {
      $inc: { "BillStatus.bill_status": 1 }, // increment by 1
    });

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// update Paid
const updateBillPaid = async (req, res) => {
  try {
    const model = await BillStatusModel.findByIdAndUpdate(req.params.id, {
      bill_paid: "true",
    });

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// cancel Status
const cancelBillStatus = async (req, res) => {
  try {
    const model = await BillStatusModel.findByIdAndUpdate(req.params.id, {
      bill_status: 0,
      bill_paid: "false",
    });

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

module.exports = {
  showNewestStatusId,
  createBillStatus,
  getAllBillsByUser,
  getAllBillsByBill,
  getAllBills,
  cancelBillStatus,
  updateBillStatus,
  updateBillPaid,
  cancelBillStatus,
};
