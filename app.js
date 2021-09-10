const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const admin = require("./app/admin");
const code = require("./app/code");

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
