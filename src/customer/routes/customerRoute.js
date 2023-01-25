const express = require("express");
const cusotmerValidation = require("../controllers/customer.validator");
const { addCustomer } = require("../controllers/customer.controller");
//const defaultController = require("../controllers/defaultController");

const router = express.Router();

router.post("/", cusotmerValidation, addCustomer);

module.exports = router;
