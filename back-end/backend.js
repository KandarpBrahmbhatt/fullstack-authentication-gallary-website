const express = require("express");

const app = express();
require("dotenv").config();
require("./Models/db.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Router/AuthRouter.js");

app.get("/", (req, resp) => {
  resp.send("home page");
});

// middalware
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter); // router use karva mate middleware kari ne import kari 6e.

const port = process.env.PORT || 8080; // .env file mathi je port lakhiyo 6e use karva lakhiyu
app.listen(port, () => {
  console.log("server is started");
});
