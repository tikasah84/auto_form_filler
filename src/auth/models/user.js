const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = Schema(
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

const User = mongoose.model("user", userSchema);

module.exports = User;
