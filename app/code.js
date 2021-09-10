const express = require("express");
const app = express.Router();
const db = require("../db");

app.get("/", function (req, res) {
  res.send("hello code");
});

app.get("/all", async function (req, res) {
  const r = await db.getAllCode();
  res.send(JSON.stringify(r));
});

app.get("/add", async function (req, res) {
  const { code, end } = req.query;
  const r = await db.addCode(code, end);
  res.send(JSON.stringify(r));
});

module.exports = app;
