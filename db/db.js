const Sequelize = require("sequelize");
// const db = new Sequelize('postgres://localhost:5432/seq_intro');

// const DB_URL =
//     process.env.DB_URL ||
//     'postgres://localhost:5432/acme_cc';

// const db = new Sequelize(DB_URL);
const db = new Sequelize('postgres://localhost:5432/acme_cc'); // URL path to our db

module.exports = db;