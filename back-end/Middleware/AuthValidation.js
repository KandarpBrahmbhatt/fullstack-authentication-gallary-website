// const joi = require("joi");

// const signupValidation = (req, resp, next) => {
//   //  // req kaya form ma aavase ae lakhiyu 6e nichi object form ma aavase.
//   const schema = joi.object({
//     name: joi.string().min(3).max(100).required(),
//     email: joi.string().email().required(),
//     password: joi.string().min(4).max(100).required(),
//   });

//   const { error } = schema.validate(req.body, { abortEarly: false }); // destructure error
//   if (error) {
//     console.log(error);
//     return resp.status(400).json({
//       message: "Bad Request",
//       details: error.details.map((err) => err.message), // cleaner error messages
//     });
//   }
//   next();
// };

// const loginValidation = (req, resp, next) => {
//   const schema = joi.object({
//     email: joi.string().email().required(),
//     password: joi.string().min(4).max(100).required(),
//   });

//   const { error } = schema.validate(req.body, { abortEarly: false }); //By default, Joi stops after the first validation error.
//   if (error) {
//     console.log(error);
//     return resp.status(400).json({
//       message: "Bad Request",
//       details: error.details.map((err) => err.message),
//     });
//   }
//   next();
// };

// module.exports = { signupValidation, loginValidation };

// check karase user authentication 6e ke nahi browser na je token 6e ae kaya user nu 6e ae check kari ne aapase useer ni id nikadi ne aapse

// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
const isAuth = async (req, resp, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return resp.status(400).json({ message: "User doesn't have a token" });
    }
    let varifytoken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!varifytoken) {
      return resp
        .status(400)
        .json({ message: "user doesn't have  valid token" });
    }
    req.userId = varifytoken._id;
  } catch (error) {
    return resp.status(500).json({ message: "is Auth error" });
  }
};

export default isAuth;
