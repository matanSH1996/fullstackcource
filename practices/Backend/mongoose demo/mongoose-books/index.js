const dotenv = require("dotenv")

const express = require ("express")
const app = express()

const connectDB = require("./utils/connectDB")
dotenv.config()
connectDB()

//MIDDLEWARES
app.use(express.json())

app.get("/" , (req, res) =>{
    res.send("TEST")
})

app.use("api/author" , require ("./routes/author"))

const PORT = process.env.PORT || 8000
app.listen(() => console.log(`server is up on port ${PORT}`))