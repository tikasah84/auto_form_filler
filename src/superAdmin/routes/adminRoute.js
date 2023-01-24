const express = require("express");
const adminValidation = require("../controllers/admin.validator");
const {
  addAdmin,
  loginAdmin,
  AdminProfile,
  authAdmin,
} = require("../controllers/admin.controller");
const { getUsers } = require("../../auth/controllers/auth.controller");

const router = express.Router();

router.post("/register", adminValidation, addAdmin);
router.post("/login", loginAdmin);
router.get("/profile", authAdmin, AdminProfile);
router.get("/users", authAdmin, getUsers);

module.exports = router;
