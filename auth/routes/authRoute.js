const express = require("express");
const userValidation = require("../controllers/auth.validator");
const {
  addUser,
  getUsers,
  login,
  profile,
  auth,
} = require("../controllers/auth.controller");
const defaultController = require("../controllers/defaultController");

const router = express.Router();

router.get("/", defaultController);

module.exports = router;
