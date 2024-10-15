const mysql = require("mysql");

let db;

if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection({
        host: "localhost",
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
};

module.exports = db;