require("dotenv").config()
const express = require("express")
const connectDB = require("./utils/connectDB")
const app = express()

connectDB()

//middlewares
app.use(express.json())

app.use("/author", require("./routes/authors"))
app.use("/book", require("./routes/books"))
app.use("/review", require("./routes/review"))
// app.get("/", (req,res) =>{res.send("TEST")})

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)})