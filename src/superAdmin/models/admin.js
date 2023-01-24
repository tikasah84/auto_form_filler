const mongoose = require("mongoose");
const { Schema } = mongoose;
const adminSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
