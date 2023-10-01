const express = require("express");

const userController = require("../controllers/userController");

const foodController = require("../controllers/foodController");

const CartController = require("../controllers/CartController");

const BookController = require("../controllers/BookTableController");

const BillStatusController = require("../controllers/BillStatusController");

const BillDetailsController = require("../controllers/BillDetailsController");

const router = express.Router();

// get all users
router.get("/users", userController.allUsers);

// get one user
router.get("/users/:email", userController.showAUser);

// create account
router.post("/users/create", userController.createAccount);

// ---------------------------------------------

// get all Food
router.get("/foods", foodController.showFoods);

// get single Food
router.get("/foods/:id", foodController.showFoodById);

// create Food
router.post("/foods", foodController.createFood);

// update Food
router.put("/foods/:id", foodController.updateFood);

// delete Food
router.delete("/foods/:id", foodController.deleteFood);

// ---------------------------------------------

// add to cart
router.post("/cartItem", CartController.addItems);

// get a item in cart
router.get("/cartItem/:user_id/:food_id", CartController.getItem);

// get all items by user id
router.get("/cartItem/:id", CartController.allItems);

// update item qty
router.put("/cartItem/", CartController.updateItem);

// delete a item in cart
router.delete("/cartItem/:user_id/:food_id", CartController.deleteItem);

// delete all items in cart
router.delete("/cartItem/:id", CartController.deleteItems);

// ---------------------------------------------

// Booking
router.post("/booking", BookController.createBooking);

// ---------------------------------------------

// Bill Details
router.post("/billdetails", BillDetailsController.createBillDetails);
router.get("/billdetails/:id", BillDetailsController.getBillDetailsById);

// ---------------------------------------------

// Bill Status
router.get("/billstatus/new", BillStatusController.showNewestStatusId);
router.post("/billstatus", BillStatusController.createBillStatus);
router.get("/billstatus/user/:id", BillStatusController.getAllBillsByUser);
router.get("/billstatus/bill/:id", BillStatusController.getAllBillsByBill);
router.get("/billstatus", BillStatusController.getAllBills);
router.put("/billstatus/:id", BillStatusController.updateBillStatus);
router.put("/billstatus/paid/:id", BillStatusController.updateBillPaid);
router.put("/billstatus/cancel/:id", BillStatusController.cancelBillStatus);

module.exports = router;
