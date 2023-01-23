const errorFunction = require("../../utils/errorFunction");
const User = require("../models/user");
const { securePassword, checkPassword } = require("../../utils/securePassword");
const addUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    }).lean(true);
    if (existingUser) {
      res.status(403);
      return res.json(errorFunction(true, "User Already Exists"));
    } else {
      const hashedPassword = await securePassword(req.body.password);
      const newUser = await User.create({
        email: req.body.email,
        password: hashedPassword,
      });
      if (newUser) {
        const userData = {
          email: newUser.email,
        };
        res.status(201);
        return res.json(errorFunction(false, "User Created", userData));
      } else {
        res.status(403);
        return res.json(errorFunction(true, "Error Creating User"));
      }
    }
  } catch (error) {
    res.status(400);
    return res.json(errorFunction(true, "Error Adding user"));
  }
};

module.exports = { addUser };
