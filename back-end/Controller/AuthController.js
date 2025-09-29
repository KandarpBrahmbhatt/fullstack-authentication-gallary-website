// const userModel = require("../Models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// // signup functionality
// const signUp = async (req, resp) => {
//   try {
//     const { name, email, password } = req.body; // body mathi aa request aavase.
//     const user = await userModel.findOne({ email });
//     if (user) {
//       // 409 conflex
//       return resp
//         .status(409)
//         .json({ message: "user is alrady exist", success: false });
//     }
//     const usermodel = new userModel({ name, password, email });
//     // bcrypt is used for increption
//     usermodel.password = await bcrypt.hash(password, 10); // hash = password sholt 10

//     await usermodel.save();

//     resp.status(201).json({
//       message: "signup sucessfully",
//       success: true,
//     });
//   } catch (err) {
//     resp.status(500).json({
//       message: "internal server error",
//       success: false,
//     });
//   }
// };

// // login functionality
// const login = async (req, resp) => {
//   try {
//     const { email, password } = req.body; // body mathi aa request aavase.
//     const user = await userModel.findOne({ email });
//     const errorMsg = "Auth failed email and password is wrong";
//     // Aahiya reverse condition lagavani 6e user signup na hoy
//     if (!user) {
//       console.log(" Login failed: User not found for email:", email);
//       // 409 conflex
//       return resp.status(403).json({ message: errorMsg, success: false });
//     }

//     // password ne decrept kari ne check kariyu 6e. decrept promise return karse and compare method no use karishu
//     const ispassEqual = await bcrypt.compare(password, user.password); // first password user jodethi aavase ae 6e

//     if (!ispassEqual) {
//       console.log(" Login failed: Invalid password for email:", email);
//       return resp.status(403).json({ message: errorMsg, success: false });
//     }
//     const jwtToken = jwt.sign(
//       { email: user.email, _id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIN: "24h " }
//     );
//     console.log("Login successful for:", email);
//     resp.status(200).json({
//       message: "Login sucessfully",
//       success: true,
//       jwtToken,
//       email,
//       name: user.name,
//     });
//   } catch (err) {
//     resp.status(500).json({
//       message: "internal server error",
//       success: false,
//     });
//   }
// };

// module.exports = {
//   signUp,
//   login,
// };

const userModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup functionality
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body; // body mathi request aavase

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
        success: false,
      });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res
        .status(409)
        .json({ message: "User already exists", success: false });
    }

    const hashed = await bcrypt.hash(password, 10); // // hash = password sholt 10
    const user = new userModel({ name, email, password: hashed });

    await user.save(); // save a data in mongodb database.

    return res
      .status(201)
      .json({ message: "Signup successful", success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

// login functionality
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required", success: false });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      console.log("Login failed: user not found for email:", email);
      return res.status(401).json({
        message: "Auth failed: invalid email or password",
        success: false,
      });
    }

    // password ne decrept kari ne check kariyu 6e. decrept promise return karse and compare method no use karishu
    const isPassEqual = await bcrypt.compare(password, user.password); // password user jode thi aavase
    if (!isPassEqual) {
      console.log("Login failed: invalid password for email:", email);
      return res.status(401).json({
        message: "Auth failed: invalid email or password",
        success: false,
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not set in environment variables");
      return res
        .status(500)
        .json({ message: "Server misconfiguration", success: false });
    }

    // option name is expiresIn (camelCase). not expiresIN
    const token = jwt.sign(
      // sign jwt ni method 6e.
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    console.log("Login successful for:", email);
    return res.status(200).json({
      message: "Login successful",
      success: true,
      token, // use `token` for front-end convenience
      user: { email: user.email, name: user.name, id: user._id },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signUp,
  login,
};
