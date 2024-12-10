const mysql = require("mysql2");
const { config } = require("dotenv");

config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost", // Replace with your MySQL host
  user: process.env.DB_USER || "root", // Replace with your MySQL username
  password: process.env.DB_PASSWORD || "root", // Replace with your MySQL password
  database: process.env.DB_DATABASE || "assignment", // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database!");
});

module.exports = { db };
