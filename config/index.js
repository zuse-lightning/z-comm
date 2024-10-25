const mysql = require("mysql");

const db = mysql.createConnection({
    host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "wy0fg7830hgybq3s",
    password: "und2gq5w0wjzzqwe",
    database: "xguq3o5tvsxchopc"
});

module.exports = db;