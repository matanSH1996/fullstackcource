require("dotenv").config()
const express = require("express")
const app = express()
const fs = require ("fs")
const cookieParser = require('cookie-parser')

app.set("view engine" , "ejs")

app.use(express.json())
app.use(cookieParser())

app.use("/auth" , require("./routes/auth"))
//when ever using the route "/auth", it will send him to "./routes/auth".
app.use("/tweet" , require("./routes/tweet"))
//when ever using the route "/tweet", it will send him to "./routes/tweet".

app.get("/", (req,res) =>{
    res.send("TEST")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`we rock on port ${PORT}`))