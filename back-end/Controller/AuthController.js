const userModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// signup functionality
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

// login functionality
const login = async (req, resp) => {
  try {
    const { name, email, password } = req.body; // body mathi aa request aavase.
    const user = await userModel.findOne({ email });
    const errorMsg = "Auth failed email and password is wrong";
    // Aahiya reverse condition lagavani 6e user signup na hoy
    if (!user) {
      // 409 conflex
      return resp.status(403).json({ message: errorMsg, success: false });
    }

    // password ne decrept kari ne check kariyu 6e. decrept promise return karse and compare method no use karishu
    const ispassEqual = await bcrypt.compare(password, user.password); // first password user jodethi aavase ae 6e

    if (!ispassEqual) {
      return resp.status(403).json({ message: errorMsg, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIN: "24h " }
    );

    resp.status(200).json({
      message: "Login sucessfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
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
  login,
};
