import express from "express";
import { getCurrentUser } from "../Controller/userController.js";
import isAuth from "../Middleware/AuthValidation.js";
import upload from "../Middleware/multer.js";
import updateProfile from "../Controller/userController.js";
let userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getCurrentUser); // jya shudhi isAuth ma validation check nahi thay tyasudhi user home page ma nahi jay
userRouter.put(
  "/updateProfile",
  isAuth,
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "productimage" },
  ]),
  updateProfile
);
export default userRouter;
