require("dotenv").config();
require("./db/connection");
const express = require("express");
var cors = require("cors");
const authRoutes = require("./auth/routes/authRoute");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(bodyParser.json());
app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);

app.listen(port, HOST, () => {
  console.log(`Server is running on https://${HOST}: ${port}`);
});
