const joi = require("joi");
const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
  email: joi.string().email().trim(true).required(),
  password: joi.string().min(8).trim(true).required(),
});

const adminValidation = async (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password,
  };

  const { error } = validation.validate(payload);
  if (error) {
    res.status(406);
    return res.json(
      errorFunction(true, `Error in admin Data : ${error.message}`)
    );
  } else {
    next();
  }
};

module.exports = adminValidation;
