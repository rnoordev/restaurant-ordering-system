const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://narasa3332015:aPokUoIiYoRAXOGc@cluster0.vpi2v2c.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.once("open", function () {
  console.log("connected to database");
});

module.exports = db;
