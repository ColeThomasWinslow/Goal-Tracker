const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a text Name"],
    },
    email: {
      type: String,
      required: [true, "Please add a text Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a text Password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
