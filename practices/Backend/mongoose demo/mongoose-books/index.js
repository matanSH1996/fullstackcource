require("dotenv").config()
const express = require ("express")
const app = express()

//middlewares
app.use(express.json())

const connectDB = require("./utils/connectDB")

connectDB()

// app.use("api/author" , require ("./routes/author"))

const PORT = process.env.PORT || 8000
app.listen(() => console.log(`server is up on port ${PORT}`))