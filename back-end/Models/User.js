const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// database connection model thai gayu aa

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("gellary", UserSchema);

module.exports = userModel;
