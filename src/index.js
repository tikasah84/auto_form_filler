require("dotenv").config();
require("./db/connection");
const express = require("express");
var cors = require("cors");
const authRoutes = require("./auth/routes/authRoute");
const adminRoutes = require("./superAdmin/routes/adminRoute");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");

const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many requests, please try again later",
});
app.use(cors());
const port = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(bodyParser.json());
app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", limiter, authRoutes);
app.use("/admin", limiter, adminRoutes);

app.listen(port, HOST, () => {
  console.log(`Server is running on https://${HOST}: ${port}`);
});
