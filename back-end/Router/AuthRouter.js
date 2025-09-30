const { signUp, login } = require("../Controller/AuthController");
// const { like, comment } = require("../Controller/PostController");
const {
  signupValidation,
  loginValidation,
} = require("../Middleware/AuthValidation");
// const { default: upload } = require("../Middleware/multer");

const router = require("express").Router();

router.post("/login", (req, resp) => {
  resp.send("login Successfully");
});
//signup controller ne use kariya pahela signupValidation ne call karvanu 6e

router.post("/signUp", signupValidation, signUp);
router.post("/login", loginValidation, login);

// router.put("/upadateprofile", upload.fields([{ name: "ProfileImage" }]));

// router.post("/like/:id", like); // post ni id mokalsu kaya post ma usere like kare 6e ae khabr padase paramas thi
// router.post("/comment/:id", loginValidation, comment);
module.exports = router;
