const FoodModel = require("../models/FoodModel");

// get all Foods
const showFoods = async (req, res) => {
  try {
    const data = await FoodModel.find();

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// get single Food
const showFoodById = async (req, res) => {
  try {
    const data = await FoodModel.findById(req.params.id);

    if (data) {
      return res.json(data);
    } else {
      return res.status(404).json({ error: "Not found!" });
    }
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// create Food
const createFood = async (req, res) => {
  const data = req.body;

  try {
    const newModel = new FoodModel(data);
    await newModel.save();

    return res.json(newModel);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// update Food
const updateFood = async (req, res) => {
  try {
    const model = await FoodModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// delete Food
const deleteFood = async (req, res) => {
  try {
    const model = await FoodModel.findByIdAndDelete(req.params.id);

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

module.exports = {
  showFoods,
  showFoodById,
  createFood,
  updateFood,
  deleteFood,
};
