const express = require("express")
const app = express()
const salesRoutes = require("./routes/salesRoutes")
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.use("/api/sales", salesRoutes)

module.exports = app