const errorFunction = require("../../utils/errorFunction");
const Admin = require("../models/admin");
const { securePassword, checkPassword } = require("../../utils/securePassword");
var jwt = require("jsonwebtoken");

const addAdmin = async (req, res, next) => {
  try {
    if (req.body.key === "NextNepal") {
      const existingAdmin = await Admin.findOne({
        email: req.body.email,
      }).lean(true);
      if (existingAdmin) {
        res.status(403);
        return res.json(errorFunction(true, "Admin Already Exists"));
      } else {
        const hashedPassword = await securePassword(req.body.password);
        const newAdmin = await Admin.create({
          email: req.body.email,
          password: hashedPassword,
        });
        if (newAdmin) {
          const AdminData = {
            email: newAdmin.email,
          };
          res.status(201);
          return res.json(errorFunction(false, "Admin Created", AdminData));
        } else {
          res.status(403);
          return res.json(errorFunction(true, "Error Creating Admin"));
        }
      }
    } else {
      res.status(403);
      return res.json(errorFunction(true, "Invalid Key"));
    }
  } catch (error) {
    res.status(400);
    return res.json(errorFunction(true, "Error Adding Admin"));
  }
};

//Login Admin

const loginAdmin = async (req, res, next) => {
  try {
    var data = await Admin.find({ email: req.body.email }).exec();
    if (data.length < 1) {
      res.status(404);
      return res.json(errorFunction(true, "Admin Not Found"));
    } else {
      existingAdmin = data[0];
    }

    if (existingAdmin) {
      const isPasswordMatch = await checkPassword(
        req.body.password,
        existingAdmin.password
      );
      if (isPasswordMatch) {
        var AdminData = {
          id: existingAdmin._id,
          email: existingAdmin.email,
        };
      } else {
        res.status(403);
        return res.json(errorFunction(true, "Invalid Password"));
      }

      jwt.sign(
        {
          data: AdminData,
        },
        process.env.SECRET_KEY_ADMIN,
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

const AdminProfile = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403);
    return res.json(errorFunction(true, "No Authorization"));
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY_ADMIN, (err, decoded) => {
      if (err) {
        res.status(403);
        return res.json(errorFunction(true, err));
      } else {
        const AdminData = {
          id: decoded.data.id,
          email: decoded.data.email,
        };
        res.status(201);
        return res.json(errorFunction(false, "Profile", AdminData));
      }
    });
  }
};

const authAdmin = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403);
    return res.json(errorFunction(true, "No Authorization"));
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY_ADMIN, (err, decoded) => {
      if (err) {
        res.status(403);
        return res.json(errorFunction(true, err));
      } else {
        next();
      }
    });
  }
};

module.exports = { addAdmin, loginAdmin, AdminProfile, authAdmin };
