const mysql = require("mysql");
require("dotenv").config();

console.log("db init ... ");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(async (err) => {
  if (err) {
    console.log("Error connecting to database ,", err);
    return;
  }
  await createAdminTable();
  await createActivTable();
  await createAccountsTable();
});

function connect() {
  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
      console.log("ff  ,", fields);
    }
  );

  //   connection.end();
}

function createAdminTable() {
  const query =
    "CREATE TABLE admin (password VARCHAR(20) NOT NULL, email VARCHAR(50) UNIQUE, username VARCHAR(20) UNIQUE NOT NULL, ID int NOT NULL PRIMARY KEY AUTO_INCREMENT);";

  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) console.log("admin Table already exists ...");
      else console.log("Admin table created ...  ");
      resolve(error, results, fields);
    });
  });
}

async function addNewAdmin(email, username, password) {
  const query = `INSERT INTO admin (email,username, password) VALUES ('${email}', '${username}', '${password}');`;
  const r = await Query(query);

  return r;
}

async function updateAdminPassword(id, password) {
  const query = `UPDATE admin SET password='${password}' WHERE ID='${id}';`;
  const r = await Query(query);

  return r;
}

async function getAllAdmin() {
  const query = `SELECT * from admin;`;
  const r = await Query(query);

  return r;
}

async function findAdmin(password, username) {
  const query = `SELECT * from admin WHERE password = '${password}' AND username = '${username}';`;
  const r = await Query(query);

  return r;
}

async function findAdminById(ID) {
  const query = `SELECT * from admin WHERE ID = '${ID}';`;
  const r = await Query(query);

  return r;
}

function createActivTable() {
  const query =
    "CREATE TABLE activations (code VARCHAR(30) NOT NULL UNIQUE, maxAccounts INT DEFAULT 3, end DATE NOT NULL, ID int NOT NULL PRIMARY KEY AUTO_INCREMENT);";

  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) console.log("Activ Table already exists ...");
      else console.log("Activ table created ...  ");
      resolve({ error, results, fields });
    });
  });
}

async function getAllCode() {
  const query = `SELECT * from activations LEFT JOIN accounts ON activations.ID=accounts.code_ID;`;
  const r = await Query(query);

  if(r.results.length > 0) {
    let nr=filterAcc(r)

    r.results = nr
  }

  return r;
}

async function findCode(code) {
  const query = `SELECT * from activations LEFT JOIN accounts ON activations.ID=accounts.code_ID WHERE code = '${code}';`;
  const r = await Query(query);

  if(r.results.length > 0) {
    let nr=filterAcc(r)

    r.results = nr
  }

  return r;
}

async function addCode(code, end, maxAccounts) {
  const query = `INSERT INTO activations (code, end, maxAccounts) VALUES ('${code}', '${end}', '${maxAccounts}');`;
  const r = await Query(query);

  return r;
}

async function updateCode(id, end, maxAccounts) {
  const query = `UPDATE activations SET end='${end}', maxAccounts='${maxAccounts}' WHERE ID='${id}';`;
  const r = await Query(query);

  return r;
}

async function deleteCode(id) {
  const query = `DELETE FROM activations WHERE ID='${id}';`;
  const r = await Query(query);

  return r;
}

function createAccountsTable() {
  const query =
    "CREATE TABLE accounts (server VARCHAR(50), number VARCHAR(50), code_ID INT NOT NULL, accID int NOT NULL PRIMARY KEY AUTO_INCREMENT);";

  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) console.log("Accounts Table already exists ...");
      else console.log("Accounts table created ...  ");
      resolve({ error, results, fields });
    });
  });
}

async function addAccount(server, number, code_ID) {
  const query = `INSERT INTO accounts (server, number, code_ID) VALUES ('${server}', '${number}', '${code_ID}');`;
  const r = await Query(query);

  return r;
}

async function deleteAccount(id) {
  const query = `DELETE FROM accounts WHERE accID='${id}';`;
  const r = await Query(query);

  return r;
}

async function deleteAccountByCode(id) {
  const query = `DELETE FROM accounts WHERE code_ID='${id}';`;
  const r = await Query(query);

  return r;
}

module.exports = {
  connect,
  createAdminTable,
  createActivTable,
  createAccountsTable,

  addNewAdmin,
  getAllAdmin,
  findAdmin,
  updateAdminPassword,
  findAdminById,

  getAllCode,
  findCode,
  addCode,
  updateCode,
  deleteCode,

  addAccount,
  deleteAccount,
  deleteAccountByCode,
};

const Query = (query) =>
  new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      resolve({ error, results, fields });
    });
  });

function filterAcc(r){
  const nr=[]
    r.results.map(i=>{
      let index = null;
      const arr = nr.find((i1, ii1)=> { index=ii1; return i1.ID===i.ID})
      if(arr){
        const nd = {code:i.code,maxAccounts:i.maxAccounts,end:i.end,ID:i.ID, accounts: [...arr.accounts, {server:i.server, number:i.number,ID:i.accID}]}
        // console.log(index)
        nr[index] = nd
      } else{
        let ad = []
        if(i.accID)
          ad.push({server:i.server, number:i.number,ID:i.accID})
        nr.push({code:i.code,maxAccounts:i.maxAccounts,end:i.end,ID:i.ID, accounts: ad})
      }
    })

    return nr
}
