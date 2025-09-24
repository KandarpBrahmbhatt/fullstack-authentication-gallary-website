// server side validation mate.

const joi = require("joi");

const signupValidation = (req, resp, next) => {
  // req kaya form ma aavase ae lakhiyu 6e nichi object form ma aavase.
  const schema = joi.object({
    name: joi.string().min(3).max(100).required(), // min charchter 3 ,max charcter 100
    email: joi.string().email().required(),
    password: joi.string().min(4).max(100).required(),
  });

  const error = schema.validate(req.body);
  console.log(error);
  if (error) {
    console.log(error);
    return resp.status(400).json({
      message: "Bad Request",
      error,
    });
  }
  next();
};
const loginValidation = (req, resp, next) => {
  // req kaya form ma aavase ae lakhiyu 6e nichi object form ma aavase.
  const schema = joi.object({
    // min charchter 3 ,max charcter 100
    email: joi.string().email().required(),
    password: joi.string().min(4).max(100).required(),
  });

  const error = schema.validate(req.body);
  if (error) {
    console.log(error);
    return resp.status(400).json({
      message: "Bad Request",
      error,
    });
  }
  next();
};
module.exports = { signupValidation, loginValidation };
