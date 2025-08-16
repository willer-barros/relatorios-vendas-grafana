const mysql = require("mysql2/promise")
const pool = mysql.createPoll({
    host: "192.168.0.108",
    user: "root",
    password: "991666",
    database: "sales_db",
    waitForConnections: true,
    queueLimit: 0
})

module.exports = pool