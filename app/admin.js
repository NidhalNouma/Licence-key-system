const express = require("express");
const app = express.Router();
const db = require("../db");

// app.post("/all", async function (req, res) {
//   const r = await db.getAllAdmin();
//   res.send(JSON.stringify(r));
// });

app.post("/find", async function (req, res) {
  const { password, username } = req.body;
  const r = await db.findAdmin(password, username);
  const rs = { error: null, results: r.results };
  if (r.error || r.results.length === 0) {
    rs.error = "User Name or Password is incorrect";
  }

  res.json(rs);
});

app.post("/update", async function (req, res) {
  const { ID, username, password, cpassword } = req.body;
  const r = await db.findAdminById(ID);
  const rs = { error: null, results: r.results };
  if (r.error || r.results.length === 0) {
    rs.error = "User Name Not Found";
    return res.json(rs);
  }
  if (r.results[0].results !== cpassword) {
    rs.error = "Current password is incorrect";
    return res.json(rs);
  }

  const rr= await db.updateAdminPassword(ID, password)

  rs.error=rr.error
  rs.results=rr.results

  res.json(rs);
});

module.exports = app;
