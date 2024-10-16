const mysql = require("mysql");

const db = mysql.createConnection({
    host: "us-cluster-east-01.k8s.cleardb.net",
    user: "bc51a916588941",
    password: "fe45ab45",
    database: "heroku_66448cb84867580"
});

module.exports = db;