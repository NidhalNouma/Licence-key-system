const express = require("express");
const app = express.Router();
const db = require("../db");

app.post("/all", async function (req, res) {
  const r = await db.getAllAdmin();
  res.send(JSON.stringify(r));
});

app.post("/find", async function (req, res) {
  const { password, username } = req.body;
  const r = await db.findAdmin(password, username);
  const rs = { error: null, results: r.results };
  if (r.error || r.results.length === 0) {
    rs.error = "User Name or Password is incorrect";
  }

  res.json(rs);
});

module.exports = app;
