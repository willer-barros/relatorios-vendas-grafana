const pool = require("../config/database")

const createSale = async (amount) =>{
    const [result] = await pool.execute(
        "INSERT INTO sales (amount) VALUES (?)",
        [amount]
    )
    return result.insertId
}

const getSales = async () =>{
    const [rows] = await pool.query("SELECT * FROM sales")
    return rows
}

module.exports = { createSale, getSales}