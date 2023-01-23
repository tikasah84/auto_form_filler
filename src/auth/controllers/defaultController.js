const errorFunction = require("../../utils/errorFunction");

const defaultController = async (req, res, next) => {
  res.status(200);
  res.json(errorFunction(false, "Home Page", "Welcome from  Api"));
};

module.exports = defaultController;
