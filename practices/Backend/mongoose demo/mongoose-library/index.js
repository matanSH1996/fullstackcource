require("dotenv").config()
const express = require("express")
const app = express()

//middlewares
app.use(express.json())

app.get("/", (req,res) =>{
    res.send(
        "TEST"
    )
})



const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)})