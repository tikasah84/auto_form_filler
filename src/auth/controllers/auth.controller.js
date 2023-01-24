const errorFunction = require("../../utils/errorFunction");
const User = require("../models/user");
const { securePassword, checkPassword } = require("../../utils/securePassword");
var jwt = require("jsonwebtoken");

const addUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var id = "";
    jwt.verify(token, process.env.SECRET_KEY_ADMIN, (err, decoded) => {
      if (err) {
        res.status(403);
        return res.json(errorFunction(true, err));
      } else {
        id = decoded.data.id;
      }
    });
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
        adminId: id,
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

//Login user

const login = async (req, res, next) => {
  try {
    var data = await User.find({ email: req.body.email }).exec();
    if (data.length < 1) {
      res.status(404);
      return res.json(errorFunction(true, "User Not Found"));
    } else {
      existingUser = data[0];
    }

    if (existingUser) {
      const isPasswordMatch = await checkPassword(
        req.body.password,
        existingUser.password
      );
      if (isPasswordMatch) {
        var userData = {
          id: existingUser._id,
          email: existingUser.email,
        };
      } else {
        res.status(403);
        return res.json(errorFunction(true, "Invalid Password"));
      }
      jwt.sign(
        {
          data: userData,
        },
        process.env.SECRET_KEY,
        (err, token) => {
          if (err) {
            res.status(403);
            return res.json(errorFunction(true, "Error Signing Token"));
          } else {
            res.status(201);
            return res.json(
              errorFunction(false, "Login Successful", { token: token })
            );
          }
        }
      );
    }
  } catch (error) {
    res.status(400);
    return res.json(errorFunction(true, "Error Logging In"));
  }
};

//get profile information

const profile = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403);
    return res.json(errorFunction(true, "No Authorization"));
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403);
        return res.json(errorFunction(true, err));
      } else {
        const userData = {
          id: decoded.data.id,
          email: decoded.data.email,
        };
        res.status(201);
        return res.json(errorFunction(false, "Profile", userData));
      }
    });
  }
};

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403);
    return res.json(errorFunction(true, "No Authorization"));
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403);
        return res.json(errorFunction(true, err));
      } else {
        next();
      }
    });
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).exec();
    if (users) {
      res.status(201);
      return res.json(errorFunction(false, "Users", users));
    } else {
      res.status(403);
      return res.json(errorFunction(true, "Error Getting Users"));
    }
  } catch (error) {
    res.status(400);
    return res.json(errorFunction(true, "Error Getting Users"));
  }
};

module.exports = { addUser, login, profile, auth, getUsers };
