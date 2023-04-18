const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Register = new Schema(
  {
    username: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
    retypePassword: { type: String },
  },
  { collection: "register" }
);
module.exports = mongoose.model("Register", Register);
