import express from "express";
import { signUp, login } from "../Controller/AuthController.js";
// import { like, comment } from "../Controller/PostController.js";
import {
  signupValidation,
  loginValidation,
} from "../Middleware/AuthValidation.js";
// import upload from "../Middleware/multer.js";

const router = express.Router();
router.post("/login", (req, resp) => {
  resp.send("login Successfully");
});
//signup controller ne use kariya pahela signupValidation ne call karvanu 6e

router.post("/signUp", signupValidation, signUp);
router.post("/login", loginValidation, login);

// router.put("/upadateprofile", upload.fields([{ name: "ProfileImage" }]));

// router.post("/like/:id", like); // post ni id mokalsu kaya post ma usere like kare 6e ae khabr padase paramas thi
// router.post("/comment/:id", loginValidation, comment);
export default router;
