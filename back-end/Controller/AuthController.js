const userModel = require("../Models/User");
const bcrypt = require("bcrypt");

const signUp = async (req, resp) => {
  try {
    const { name, email, password } = req.body; // body mathi aa request aavase.
    const user = await userModel.findOne({ email });
    if (user) {
      // 409 conflex
      return resp
        .status(409)
        .json({ message: "user is alrady exist", success: false });
    }
    const usermodel = new userModel({ name, password, email });
    // bcrypt is used for increption
    usermodel.password = await bcrypt.hash(password, 10); // hash = password sholt 10

    await usermodel.save();

    resp.status(201).json({
      message: "signup sucessfully",
      success: true,
    });
  } catch (err) {
    resp.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

module.exports = {
  signUp,
};
