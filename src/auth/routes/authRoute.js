const express = require("express");
const userValidation = require("../controllers/auth.validator");
const { addUser } = require("../controllers/auth.controller");
const defaultController = require("../controllers/defaultController");

const router = express.Router();

router.get("/", defaultController);
router.post("/register", userValidation, addUser);

module.exports = router;
