const express = require("express");
const app = express.Router();
const db = require("../db");
const moment = require("moment");

app.post("/all", async function (req, res) {
  const r = await db.getAllCode();
  res.json(r);
});

app.post("/find", async function (req, res) {
  const { code, time, number, server } = req.body;
  const r = await db.findCode(code);

  const re={found: false, end: null, error: ''}

  if(r.results.length > 0) {
    const ra=r.results[0]
    let t=ra.end
    t=moment(t).format('YYYY-MM-DD HH:mm')
    const ft = t.toString().replace(/-/g, " ")

    const acc = ra.accounts.find(i => i.number === number && i.server===server)

    if(!acc) {
      if(ra.maxAccounts>ra.accounts.length) 
        await db.addAccount(server, number, ra.ID)
      else {
        re.error = 'Licence Key reach maximium accounts.'
        return res.json(re)
      }
    } 

    re.end=ft;
    re.found = true;
  } else re.error = 'Invalid Licence Key, Please Contact the owner.'

  res.json(re);
});

app.post("/add", async function (req, res) {
  const { code, end, maxAccounts } = req.body;
  const r = await db.addCode(code, end, maxAccounts);

  if (!r.error) {
    const r1 = await db.getAllCode();
    r.results = r1.results;
  }

  res.json(r);
});

app.post("/update", async function (req, res) {
  const { id, end, maxAccounts } = req.body;
  const r = await db.updateCode(id, end, maxAccounts);

  if (!r.error) {
    const r1 = await db.getAllCode();
    r.results = r1.results;
  }

  res.json(r);
});


app.post("/delete", async function (req, res) {
  const { id } = req.body;
  const r = await db.deleteCode(id);

  if (!r.error) {
    const r1 = await db.getAllCode();
    r.results = r1.results;
    db.deleteAccountByCode(id)
  }

  res.json(r);
});

app.post("/deleteAccount", async function (req, res) {
  const { id } = req.body;
  const r = await db.deleteAccount(id);

  if (!r.error) {
    const r1 = await db.getAllCode();
    r.results = r1.results;
  }

  res.json(r);
});

module.exports = app;
