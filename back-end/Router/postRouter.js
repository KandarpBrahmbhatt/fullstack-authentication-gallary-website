const upload = require("../Middleware/multer.js");
const UpdateProfile = require("../Controller/PostController.js");
const router = require("express").Router();

router.put("/updateprofile", upload.single("profileImage"), UpdateProfile);

module.exports = router;
// import isAuth from "../Middleware/AuthValidation";
// import upload from "../Middleware/multer.js";
// import express from "express";
// // const express = require("express");
// const postRouter = express.Router();

// postRouter.post("/create", isAuth, upload.single("image"));

// export default postRouter;
