const express = require("express");
const userValidation = require("../controllers/auth.validator");
const {
  addUser,
  login,
  profile,
  auth,
} = require("../controllers/auth.controller");
const defaultController = require("../controllers/defaultController");

const router = express.Router();

router.post("/register", userValidation, addUser);
router.post("/login", login);
router.get("/profile", auth, profile);

module.exports = router;
