// const express = require("express");

// const app = express();
// require("dotenv").config();
// require("./Models/db.js");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const AuthRouter = require("./Router/AuthRouter.js");
// const PostRouter = require("./Router/postRouter");
// const { default: userRouter } = require("./Router/userRouter.js");
// const { default: postRouter } = require("./Router/postRouter");

// app.get("/", (req, resp) => {
//   resp.send("home page");
// });

// // middalware
// app.use(bodyParser.json());
// app.use(express.json());
// // const corsOptions = {
// //   origin: "http://localhost:5173", // origin no matlab ahiya thi data aavase to aene allow karvade.
// //   methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
// //   credentials: true,
// // };
// app.use(
//   cors({
//     origin: "http://localhost:5173", // your frontend port
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(cors(corsOptions)); // aa middalware use karvu pade cors ma

// app.use("/auth", AuthRouter); // router use karva mate middleware kari ne import kari 6e.
// app.use("/user", userRouter); // router use karva mate middleware kari ne import kari 6e.
// app.use("/post", postRouter); // router use karva mate middleware kari ne import kari 6e.

// const port = process.env.PORT || 8080; // .env file mathi je port lakhiyo 6e use karva lakhiyu
// app.listen(port, () => {
//   console.log(`server is started on  ${port}`);
// });

import express from "express";
import dotenv from "dotenv";
import "./Models/db.js";
import bodyParser from "body-parser";
import cors from "cors";

import AuthRouter from "./Router/AuthRouter.js";
import userRouter from "./Router/userRouter.js";
import postRouter from "./Router/postRouter.js";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173", // frontend origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use("/auth", AuthRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

// Home route
app.get("/", (req, resp) => {
  resp.send("Home Page");
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
