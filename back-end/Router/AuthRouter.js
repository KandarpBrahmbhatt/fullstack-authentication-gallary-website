const { signUp, login } = require("../Controller/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middleware/AuthValidation");

const router = require("express").Router();

router.post("/login", (req, resp) => {
  resp.send("login Successfully");
});
//signup controller ne use kariya pahela signupValidation ne call karvanu 6e

router.post("/signUp", signupValidation, signUp);
router.post("/login", loginValidation, login);
module.exports = router;
