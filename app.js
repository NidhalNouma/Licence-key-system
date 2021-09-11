const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config()
const port = process.env.PORT || 3080;

const admin = require("./app/admin");
const code = require("./app/code");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/admin", admin);
app.use("/code", code);
app.use(express.static(path.join(__dirname, "/public/build")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/build/index.html");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
