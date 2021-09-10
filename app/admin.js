const express = require("express");
const app = express.Router();
const db = require("../db");

app.get("/", function (req, res) {
  res.send("hello admin");
});

app.get("/all", async function (req, res) {
  const r = await db.getAllAdmin();
  res.send(JSON.stringify(r));
});

module.exports = app;
