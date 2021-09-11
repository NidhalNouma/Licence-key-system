const express = require("express");
const app = express.Router();
const db = require("../db");
const moment = require("moment");

app.post("/all", async function (req, res) {
  const r = await db.getAllCode();
  res.json(r);
});

app.post("/find", async function (req, res) {
  const { code } = req.body;
  const r = await db.findCode(code);

  const re={found: false, end: null}

  if(r.results.length > 0) {
    let t=r.results[0].end
    t=moment(t).format('YYYY-MM-DD HH:mm')
    const ft = t.toString().replace(/-/g, " ")

    re.end=ft;
    re.found = true;
  }

  res.json(re);
});

app.post("/add", async function (req, res) {
  const { code, end } = req.body;
  const r = await db.addCode(code, end);

  if (!r.error) {
    const r1 = await db.getAllCode();
    r.results = r1.results;
  }

  res.json(r);
});

app.post("/update", async function (req, res) {
  const { id, end } = req.body;
  const r = await db.updateCode(id, end);
  res.send(JSON.stringify(r));
});


app.post("/delete", async function (req, res) {
  const { id } = req.body;
  const r = await db.deleteCode(id);

  if (!r.error) {
    const r1 = await db.getAllCode();
    r.results = r1.results;
  }

  res.json(r);
});


module.exports = app;
