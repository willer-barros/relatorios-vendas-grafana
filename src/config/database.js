const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "991666",
    database: "sales_db",
    waitForConnections: true,
    queueLimit: 0
})

module.exports = pool