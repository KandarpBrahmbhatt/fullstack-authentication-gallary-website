const joi = require("joi");

const signupValidation = (req, resp, next) => {
  //  // req kaya form ma aavase ae lakhiyu 6e nichi object form ma aavase.
  const schema = joi.object({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false }); // destructure error
  if (error) {
    console.log(error);
    return resp.status(400).json({
      message: "Bad Request",
      details: error.details.map((err) => err.message), // cleaner error messages
    });
  }
  next();
};

const loginValidation = (req, resp, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false }); //By default, Joi stops after the first validation error.
  if (error) {
    console.log(error);
    return resp.status(400).json({
      message: "Bad Request",
      details: error.details.map((err) => err.message),
    });
  }
  next();
};

module.exports = { signupValidation, loginValidation };
