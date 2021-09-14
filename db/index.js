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
    "CREATE TABLE activations (code VARCHAR(30) NOT NULL UNIQUE, end DATE NOT NULL, ID int NOT NULL PRIMARY KEY AUTO_INCREMENT);";

  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) console.log("Activ Table already exists ...");
      else console.log("Activ table created ...  ");
      resolve({ error, results, fields });
    });
  });
}

async function getAllCode() {
  const query = `SELECT * from activations;`;
  const r = await Query(query);

  return r;
}

async function findCode(code) {
  const query = `SELECT * from activations WHERE code = '${code}';`;
  const r = await Query(query);

  return r;
}

async function addCode(code, end) {
  const query = `INSERT INTO activations (code, end) VALUES ('${code}', '${end}');`;
  const r = await Query(query);

  return r;
}

async function updateCode(id, end) {
  const query = `UPDATE activations SET end='${end}' WHERE ID='${id}';`;
  const r = await Query(query);

  return r;
}

async function deleteCode(id) {
  const query = `DELETE FROM activations WHERE ID='${id}';`;
  const r = await Query(query);

  return r;
}

module.exports = {
  connect,
  createAdminTable,
  createActivTable,

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
};

const Query = (query) =>
  new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      resolve({ error, results, fields });
    });
  });
