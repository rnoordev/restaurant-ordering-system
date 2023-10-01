const UserModel = require("../models/UserModel");

// get all Users
const allUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    return res.json(users);
  } catch {
    return res.status(400).json({ error: "Error while get users!" });
  }
};

// get single user
const showAUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ user_email: req.params.email });

    if (user) {
      return res.json(user);
    } else {
      return res
        .status(404)
        .json({ error: `User of email (${req.params.email}) not found!` });
    }
  } catch {
    return res
      .status(400)
      .json({ error: `Error when get user of email ${req.params.email}!` });
  }
};

// create user
const createAccount = async (req, res) => {
  const data = req.body;

  try {
    const user = new UserModel(data);
    await user.save();
    return res.json(user);
  } catch (e){
    console.log(e);
    return res.status(400).json({ error: "Error when creating user!" });
  }
};

module.exports = {
  allUsers,
  showAUser,
  createAccount,
};
