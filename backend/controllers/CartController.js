const CartModel = require("../models/CartModel");

// get all items by user id
// get all Items
const allItems = async (req, res) => {
  try {
    const data = await CartModel.find({ user_id: req.params.id });

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// get a Item
const getItem = async (req, res) => {
  try {
    const data = await CartModel.findOne({
      user_id: req.params.user_id,
      food_id: req.params.food_id,
    });

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// add to cart
const addItems = async (req, res) => {
  try {
    const data = await CartModel.insertMany(req.body);

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// update Item
const updateItem = async (req, res) => {
  try {
    const model = await CartModel.updateOne(
      {
        user_id: req.params.user_id,
        food_id: req.params.food_id,
      },
      req.body.item_qty,
      {
        new: true,
      }
    );

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// delete a item in cart
const deleteItem = async (req, res) => {
  try {
    const model = await CartModel.deleteOne({
      user_id: req.params.user_id,
      food_id: req.params.food_id,
    });

    if (!model) {
      return res.status(404).json({ error: "Not found!" });
    }

    return res.json(model);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

// delete all items in cart
const deleteItems = async (req, res) => {
  try {
    const data = await CartModel.deleteMany({ user_id: req.params.id });

    return res.json(data);
  } catch {
    return res.status(400).json({ error: "Error occurred!" });
  }
};

module.exports = {
  allItems,
  getItem,
  addItems,
  updateItem,
  deleteItem,
  deleteItems,
};
