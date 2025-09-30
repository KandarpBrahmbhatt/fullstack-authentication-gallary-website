const { required, string } = require("joi");
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

const postSchema = new Schema({
  auther: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    // default: " ",
  },

  like: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
