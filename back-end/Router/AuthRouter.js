const { signUp } = require("../Controller/AuthController");
const { signupValidation } = require("../Middleware/AuthValidation");

const router = require("express").Router();

router.post("/login", (req, resp) => {
  resp.send("login Successfully");
});
//signup controller ne use kariya pahela signupValidation ne call karvanu 6e

router.post("/signUp", signupValidation, signUp);
module.exports = router;
